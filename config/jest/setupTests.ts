import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
// import '@testing-library/jest-dom/extend-expect';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));
