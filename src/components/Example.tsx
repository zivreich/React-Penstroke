import React from 'react';
import PenStroke from './PenStroke';

const Example: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>React PenStroke Demo</h1>
      
      <h2>Basic Usage</h2>
      <p>
        This is <PenStroke>highlighted text</PenStroke> with a default pen stroke effect.
      </p>
      
      <h2>Color Variations</h2>
      <p>
        You can use <PenStroke color="#ff9800">orange highlights</PenStroke>,{' '}
        <PenStroke color="#4caf50">green highlights</PenStroke>, or{' '}
        <PenStroke color="#f44336">red highlights</PenStroke>.
      </p>
      
      <h2>Thickness and Roughness</h2>
      <p>
        Try <PenStroke thickness={2} roughness={1}>thin and smooth</PenStroke>,{' '}
        <PenStroke thickness={6} roughness={5}>medium and rough</PenStroke>, or{' '}
        <PenStroke thickness={10} roughness={8}>thick and very rough</PenStroke>.
      </p>
      
      <h2>Opacity</h2>
      <p>
        <PenStroke opacity={0.2}>Light opacity (0.2)</PenStroke>, {' '}
        <PenStroke opacity={0.5}>Medium opacity (0.5)</PenStroke>, {' '}
        <PenStroke opacity={0.8}>Heavy opacity (0.8)</PenStroke>
      </p>
      
      <h2>Combined Properties</h2>
      <p>
        <PenStroke color="#9c27b0" thickness={8} roughness={7} opacity={0.6}>
          Custom highlight with multiple properties
        </PenStroke>
      </p>
      
      <h2>Works with Different Text Lengths</h2>
      <p>
        <PenStroke color="#2196f3">
          This is a longer piece of text that demonstrates how the PenStroke component
          adapts to different text lengths and wraps naturally with the text when it
          spans multiple lines in your document.
        </PenStroke>
      </p>
      
      <h2>Mixing with Other Styles</h2>
      <p>
        You can even use it with <PenStroke><strong>bold text</strong></PenStroke> or{' '}
        <PenStroke><em>italic text</em></PenStroke> or other{' '}
        <PenStroke><span style={{ textDecoration: 'underline' }}>styled elements</span></PenStroke>.
      </p>
    </div>
  );
};

export default Example; 