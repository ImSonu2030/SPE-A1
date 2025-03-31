const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

app.post('/calculate', (req, res) => {
  const { expression } = req.body;

  if (!expression) {
    return res.status(400).json({ error: 'Expression is required' });
  }

  try {
    let result;

    if (expression.startsWith('√')) {
      const number = parseFloat(expression.slice(1));
      if (isNaN(number)) {
        throw new Error('Invalid number for square root');
      }
      result = Math.sqrt(number);
    }
    else if (expression.endsWith('!')) {
      const number = parseFloat(expression.slice(0, -1));
      if (isNaN(number)) {
        throw new Error('Invalid number for factorial');
      }
      result = factorial(number);
    }
    else if (expression.startsWith('ln')) {
      const number = parseFloat(expression.slice(2));
      if (isNaN(number)) {
        throw new Error('Invalid number for natural logarithm');
      }
      result = Math.log(number);
    }
    else {
      const sanitizedExpression = expression.replace(/\^/g, '**');
      result = eval(sanitizedExpression);
    }

    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message || 'Invalid expression' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});