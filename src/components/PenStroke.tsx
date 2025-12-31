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
  /**
   * The width of the stroke relative to the text
   * @default '100%'
   */
  width?: string | number;
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
  width = '100%',
}) => {
  // Limit the values to reasonable ranges
  const safeThickness = Math.max(1, Math.min(10, thickness));
  const safeRoughness = Math.max(1, Math.min(10, roughness));

  // State for random values to prevent hydration mismatch
  const [rotation, setRotation] = React.useState(0);
  const [SelectedStroke, setSelectedStroke] = React.useState<React.FC<{ color: string }>>(() => Strokes[1]);

  React.useEffect(() => {
    // Generate random rotation on client side only
    setRotation(Math.random() * safeRoughness * 0.2 - safeRoughness * 0.1);

    // Select stroke based on strokeIndex
    if (strokeIndex === "random") {
      setSelectedStroke(() => Strokes[Math.floor(Math.random() * Strokes.length)]);
    } else if (typeof strokeIndex === "number" && strokeIndex >= 0 && strokeIndex < Strokes.length) {
      setSelectedStroke(() => Strokes[strokeIndex]);
    } else {
      setSelectedStroke(() => Strokes[1]); // Default to index 1
    }
  }, [safeRoughness, strokeIndex]);

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
          transform: `rotate(${rotation}deg)`,
          mixBlendMode: 'hard-light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          width: '100%',
        }}
      >
        <span style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'block',
        }}>
          <span style={{
            position: 'absolute',
            left: '50%',
            right: 0,
            width: underline
              ? (typeof width === 'number' ? `${width * 1.15}%` : `calc(${width} * 1.15)`)
              : (typeof width === 'number' ? `${width * 1.05}%` : `calc(${width} * 1.05)`),
            top: underline ? '60%' : '50%',
            transform: underline ? 'translate(-50%, -10%)' : 'translate(-50%, -40%)',
            height: `${safeThickness * 7}%`,
            display: 'block',
          }}>
            <SelectedStroke color={color} />
          </span>
        </span>
      </span>
      {behind ? null : children}
    </span>
  );
};

export default PenStroke;