import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />); // This is the correct approach for testing with React Testing Library
});
