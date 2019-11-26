module.exports = {
  presets: [require.resolve('@babel/preset-env'), require.resolve('@babel/preset-typescript')],
  plugins: [
    require.resolve('@babel/plugin-transform-runtime'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-proposal-object-rest-spread')
  ],
  compact: process.env.NODE_ENV === 'production'
};
