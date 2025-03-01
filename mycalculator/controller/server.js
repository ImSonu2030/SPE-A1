const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Helper function to evaluate factorial
const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// POST endpoint to evaluate expressions
app.post('/calculate', (req, res) => {
  const { expression } = req.body;

  if (!expression) {
    return res.status(400).json({ error: 'Expression is required' });
  }

  try {
    let result;

    // Handle square root
    if (expression.startsWith('√')) {
      const number = parseFloat(expression.slice(1));
      if (isNaN(number)) {
        throw new Error('Invalid number for square root');
      }
      result = Math.sqrt(number);
    }
    // Handle factorial
    else if (expression.endsWith('!')) {
      const number = parseFloat(expression.slice(0, -1));
      if (isNaN(number)) {
        throw new Error('Invalid number for factorial');
      }
      result = factorial(number);
    }
    // Handle natural logarithm
    else if (expression.startsWith('ln')) {
      const number = parseFloat(expression.slice(2));
      if (isNaN(number)) {
        throw new Error('Invalid number for natural logarithm');
      }
      result = Math.log(number);
    }
    // Handle general expressions
    else {
      // Replace '^' with '**' for exponentiation
      const sanitizedExpression = expression.replace(/\^/g, '**');
      result = eval(sanitizedExpression); // Evaluate the expression
    }

    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message || 'Invalid expression' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});