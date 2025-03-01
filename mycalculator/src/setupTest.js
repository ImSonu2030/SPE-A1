// src/setupTests.js
import '@testing-library/jest-dom';

// Mock axios
jest.mock('axios', () => {
  return {
    __esModule: true,
    default: {
      get: jest.fn(() => Promise.resolve({ data: {} })),
      post: jest.fn(() => Promise.resolve({ data: {} }))
    },
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} }))
  };
});