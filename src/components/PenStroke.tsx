import React from 'react';

export interface PenStrokeProps {
  /**
   * The text to highlight
   */
  children: React.ReactNode;
  /**
   * The highlight color
   * @default '#ffeb3b'
   */
  color?: string;
  /**
   * The opacity of the highlight
   * @default 0.5
   */
  opacity?: number;
  /**
   * The thickness of the highlight (1-10)
   * @default 6
   */
  thickness?: number;
  /**
   * The roughness of the highlight edge (1-10)
   * @default 3
   */
  roughness?: number;
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}

/**
 * PenStroke component highlights text with a hand-drawn marker-style stroke.
 */
const PenStroke: React.FC<PenStrokeProps> = ({
  children,
  color = '#ffeb3b',
  opacity = 0.5,
  thickness = 6,
  roughness = 3,
  className = '',
  style = {},
}) => {
  // Limit the values to reasonable ranges
  const safeThickness = Math.max(1, Math.min(10, thickness));
  const safeRoughness = Math.max(1, Math.min(10, roughness));
  
  // Calculate clip path for the marker effect
  // More roughness means more variations in the clip path
  const generateClipPath = () => {
    const variance = safeRoughness * 0.5;
    const topOffset = -safeThickness / 2;
    const bottomOffset = safeThickness / 2;
    
    return `
      polygon(
        0% ${topOffset - Math.random() * variance}%,
        100% ${topOffset - Math.random() * variance}%,
        100% ${100 + bottomOffset + Math.random() * variance}%,
        0% ${100 + bottomOffset + Math.random() * variance}%
      )
    `;
  };

  return (
    <span
      className={`react-penstroke ${className}`}
      style={{
        position: 'relative',
        display: 'inline',
        ...style,
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: color,
          opacity,
          clipPath: generateClipPath(),
          zIndex: -1,
          transform: `rotate(${Math.random() * safeRoughness * 0.2 - safeRoughness * 0.1}deg)`,
        }}
      />
      {children}
    </span>
  );
};

export default PenStroke; 