import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Calculator from './Calculator';
import axios from 'axios';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} }))
}));

describe('Calculator', () => {
  it('renders without crashing', () => {
    render(<Calculator />);
    expect(screen.getByPlaceholderText('Enter expression')).toBeInTheDocument();
  });

  it('performs addition correctly', async () => {
    axios.post.mockResolvedValue({ data: { result: '8' } });

    render(<Calculator />);
    
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(await screen.findByText('8')).toBeInTheDocument();
  });

  it('clears input when C is clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('C'));

    expect(screen.getByPlaceholderText('Enter expression').value).toBe('');
  });

  it('handles API error gracefully', async () => {
    axios.post.mockRejectedValue(new Error('Network Error'));

    render(<Calculator />);
    
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(await screen.findByText('Error')).toBeInTheDocument();
  });
});