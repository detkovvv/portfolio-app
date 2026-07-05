import '@testing-library/jest-dom/vitest';

// jsdom does not implement matchMedia; BtnDarkMode relies on it to detect
// the user's OS color-scheme preference.
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    }),
});

// jsdom does not implement scrollTo; ScrollToTop calls it on every navigation.
window.scrollTo = () => {};
