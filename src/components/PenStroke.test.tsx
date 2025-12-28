import React from 'react';
import { render, screen } from '@testing-library/react';
import PenStroke from './PenStroke';

describe('PenStroke', () => {
  test('renders children correctly', () => {
    render(<PenStroke>Test Content</PenStroke>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    const { container } = render(<PenStroke className="custom-class">Test Content</PenStroke>);
    const element = container.querySelector('.react-penstroke');
    expect(element).toHaveClass('custom-class');
  });

  test('applies custom styles', () => {
    const customStyle = { fontWeight: 'bold' };
    const { container } = render(<PenStroke style={customStyle}>Test Content</PenStroke>);
    const element = container.querySelector('.react-penstroke');
    expect(element).toHaveStyle('font-weight: bold');
  });

  test('applies default props correctly', () => {
    const { container } = render(<PenStroke>Test Content</PenStroke>);
    const highlightElement = container.querySelector('.react-penstroke > span');

    // SVG based, so no background-color style on the span
    expect(highlightElement).toHaveStyle('opacity: 0.5');
  });

  test('applies custom props correctly', () => {
    const { container } = render(
      <PenStroke
        color="#ff0000"
        opacity={0.8}
        thickness={8}
        roughness={5}
      >
        Test Content
      </PenStroke>
    );

    const highlightElement = container.querySelector('.react-penstroke > span');
    // SVG based, so no background-color style on the span
    expect(highlightElement).toHaveStyle('opacity: 0.8');
  });
}); 