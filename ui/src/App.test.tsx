import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders link to github', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/scala-play-react-typescript-seed/i);
  expect(linkElement).toBeInTheDocument();
});
