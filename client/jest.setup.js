// jest.setup.js

// Polyfill TextEncoder and TextDecoder for React Testing Library, React Router, and other libraries
// that require these browser APIs in a Node.js (Jest) environment.

import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}