// Import @testing-library/jest-dom extensions
import '@testing-library/jest-dom';

// Mocking the random functions to make tests deterministic
jest.spyOn(global.Math, 'random').mockReturnValue(0.5); 