# React-Penstroke

A lightweight React component that highlights text with a smooth, hand-drawn marker effect. Perfect for emphasizing content like a real pen stroke in a book.

[![npm version](https://img.shields.io/npm/v/react-penstroke.svg)](https://www.npmjs.com/package/react-penstroke)
[![npm downloads](https://img.shields.io/npm/dm/react-penstroke.svg)](https://www.npmjs.com/package/react-penstroke)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install react-penstroke
# or
yarn add react-penstroke
# or
pnpm add react-penstroke
```

## Usage

```jsx
import React from 'react';
import { PenStroke } from 'react-penstroke';

function Example() {
  return (
    <div>
      <h1>
        This is <PenStroke>highlighted text</PenStroke> with a pen stroke effect.
      </h1>
      
      <p>
        You can <PenStroke color="#ff9800" thickness={8} roughness={5}>customize</PenStroke> the appearance.
      </p>

      <h3>Styles</h3>
      <p>
        <PenStroke underline>Underline style</PenStroke> instead of highlight.
      </p>
      <p>
        <PenStroke behind>Highlight behind text</PenStroke> (great for dark mode).
      </p>
      <p>
        <PenStroke strokeIndex={0}>Specific stroke style</PenStroke> or <PenStroke strokeIndex="random">random style</PenStroke>.
      </p>
    </div>
  );
}
```

## Props

| Prop        | Type               | Default    | Description                                                    |
|-------------|--------------------|------------|----------------------------------------------------------------|
| children    | React.ReactNode    | (required) | The text to highlight                                          |
| color       | string             | '#ffeb3b'  | The highlight color                                            |
| opacity     | number             | 0.5        | The opacity of the highlight (0-1)                             |
| thickness   | number             | 6          | The thickness of the highlight (1-10)                          |
| roughness   | number             | 3          | The roughness of the highlight edge (1-10)                     |
| behind      | boolean            | false      | Whether to place the highlight behind the text                 |
| underline   | boolean            | false      | Whether the stroke should be under the text (underline effect) |
| strokeIndex | number \| "random" | 1          | Index of the stroke style to use, or "random"                  |
| className   | string             | ''         | Additional CSS class names                                     |
| style       | React.CSSProperties| {}         | Additional inline styles                                       |

## Features

- 🎨 Customizable highlight color, opacity, thickness, and roughness
- 📝 Natural-looking marker-style effect
- 🌟 Works with any text length or element
- 📦 Small bundle size with no external dependencies
- 🔧 TypeScript support with full type definitions

## License

MIT © Ziv Reich
