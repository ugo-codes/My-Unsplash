export const getDesignTokens = mode => ({
  palette: {
    mode,
    primary: {
      ...(mode === 'light'
        ? {
            main: '#fff',
          }
        : {
            main: '#fff',
          }),
    },
    secondary: {
      ...(mode === 'light'
        ? {
            main: '#fff',
          }
        : {
            main: '#fff',
          }),
    },

    background: {
      ...(mode === 'light'
        ? {
            main: '#fff',
          }
        : {
            main: '#fff',
          }),
    },
  },
});
