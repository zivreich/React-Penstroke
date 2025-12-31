"use client";

import React, { useState } from "react";
import { PenStroke } from "react-penstroke";

export default function Home() {
  const [text, setText] = useState("Highlight me!");
  const [color, setColor] = useState("#ffeb3b");
  const [opacity, setOpacity] = useState(0.5);
  const [thickness, setThickness] = useState(6);
  const [roughness, setRoughness] = useState(3);
  const [behind, setBehind] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [strokeIndex, setStrokeIndex] = useState<number | "random">(1);
  const [isRandomStroke, setIsRandomStroke] = useState(false);
  const [width, setWidth] = useState(100);

  const handleStrokeIndexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      setStrokeIndex(val);
      setIsRandomStroke(false);
    }
  };

  const toggleRandomStroke = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRandomStroke(e.target.checked);
    if (e.target.checked) {
      setStrokeIndex("random");
    } else {
      setStrokeIndex(1);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">React PenStroke Playground</h1>
          <p className="text-gray-600">
            Tweak the controls below to see the <PenStroke color={color} thickness={thickness} roughness={roughness} opacity={opacity} behind={behind} underline={underline} strokeIndex={strokeIndex} width={`${width}%`}>dynamic effect</PenStroke> in action.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Controls</h2>

            {/* Text Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Text Content</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Color Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-10 w-10 p-0 border-0 rounded cursor-pointer"
                />
                <span className="text-sm text-gray-500">{color}</span>
              </div>
            </div>

            {/* Opacity Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Opacity: {opacity}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Thickness Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Thickness: {thickness}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={thickness}
                onChange={(e) => setThickness(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Roughness Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Roughness: {roughness}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={roughness}
                onChange={(e) => setRoughness(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Width Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Width: {width}%
              </label>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={width}
                onChange={(e) => setWidth(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Toggles */}
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  id="behind"
                  type="checkbox"
                  checked={behind}
                  onChange={(e) => setBehind(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="behind" className="ml-2 block text-sm text-gray-900">
                  Behind Text
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="underline"
                  type="checkbox"
                  checked={underline}
                  onChange={(e) => setUnderline(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="underline" className="ml-2 block text-sm text-gray-900">
                  Underline Mode
                </label>
              </div>
            </div>

            {/* Stroke Index */}
            <div className="pt-4 border-t">
              <label className="block text-sm font-medium text-gray-700 mb-2">Stroke Style</label>
              <div className="flex items-center mb-2">
                <input
                  id="randomStroke"
                  type="checkbox"
                  checked={isRandomStroke}
                  onChange={toggleRandomStroke}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="randomStroke" className="ml-2 block text-sm text-gray-900">
                  Random Stroke
                </label>
              </div>
              {!isRandomStroke && (
                <input
                  type="number"
                  min="0"
                  value={strokeIndex as number}
                  onChange={handleStrokeIndexChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Index (e.g. 0, 1)"
                />
              )}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
            <h2 className="text-xl font-semibold mb-8 text-gray-400 uppercase tracking-wider text-sm">Live Preview</h2>

            <div className="text-5xl font-bold text-center leading-relaxed">
              <PenStroke
                color={color}
                opacity={opacity}
                thickness={thickness}
                roughness={roughness}
                behind={behind}
                underline={underline}
                strokeIndex={strokeIndex}
                width={`${width}%`}
              >
                {text}
              </PenStroke>
            </div>

            <div className="mt-12 p-4 bg-gray-50 rounded-lg w-full overflow-x-auto">
              <pre className="text-xs text-gray-600 font-mono">
                {`<PenStroke
  color="${color}"
  opacity={${opacity}}
  thickness={${thickness}}
  roughness={${roughness}}
  behind={${behind}}
  underline={${underline}}
  strokeIndex={${typeof strokeIndex === 'string' ? `"${strokeIndex}"` : strokeIndex}}
  width="${width}%"
>
  ${text}
</PenStroke>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
