import React from 'react';
import { Strokes } from './strokeAssets';


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
  /**
   * Whether to place the highlight behind the text
   * @default false
   */
  behind?: boolean;
  /**
   * Whether the stroke should be under the text
   * @default false
   */
  underline?: boolean;
  /**
   * Index of the stroke style to use (0 or 1)
   * Use "random" for random stroke selection
   * @default 1
   */
  strokeIndex?: number | "random";
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
  behind = false,
  underline = false,
  strokeIndex = 1,
}) => {
  // Limit the values to reasonable ranges
  const safeThickness = Math.max(1, Math.min(10, thickness));
  const safeRoughness = Math.max(1, Math.min(10, roughness));
  
  // Select stroke based on strokeIndex (use random only if "random" is explicitly specified)
  const Stroke = strokeIndex === "random"
    ? Strokes[Math.floor(Math.random() * Strokes.length)]
    : typeof strokeIndex === "number" && strokeIndex >= 0 && strokeIndex < Strokes.length
      ? Strokes[strokeIndex]
      : Strokes[1]; // Default to index 1
  
  // Check if children is a heading element
  const isBlock = React.Children.toArray(children).some(child => 
    React.isValidElement(child) && 
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(child.type as string)
  );
  
  return (
    <span
      className={`react-penstroke ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        justifyContent: 'center',
        alignItems: 'center',
        width: isBlock ? 'fit-content' : undefined,
        ...style,
      }}
    >
      {behind ? children : null}
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          opacity,
          zIndex: behind ? -1 : 1,
          transform: `rotate(${Math.random() * safeRoughness * 0.2 - safeRoughness * 0.1}deg)`,
          mixBlendMode: 'hard-light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          width: '100%',
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            left: '50%',
            right: 0,
            width: underline 
              ? '115%' 
              : '105%',
            top: underline ? '60%' : '50%',
            transform: underline ? 'translate(-50%, -10%)' : 'translate(-50%, -40%)',
            height: `${safeThickness *   7}%`,
          }}>
            <Stroke color={color} />
          </div>
        </div>
      </span>
      {behind ? null : children}
    </span>
  );
};

export default PenStroke; 