import React from 'react';
import { Strokes } from './stokeAssets';


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
}) => {
  // Limit the values to reasonable ranges
  const safeThickness = Math.max(1, Math.min(10, thickness));
  const safeRoughness = Math.max(1, Math.min(10, roughness));
  const Stroke = Strokes[Math.floor(Math.random() * Strokes.length)];
  
  return (
    <span
      className={`react-penstroke ${className}`}
      style={{
        position: 'relative',
        display: 'block',
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
          mixBlendMode: behind ? 'normal' : 'multiply',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            left: 0,
            right: 0,
            width: '100%',
            top: underline ? '100%' : '50%',
            transform: underline ? 'translateY(-10%)' : 'translateY(-50%)',
            height: `${safeThickness * 10}%`, // Scale based on thickness
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