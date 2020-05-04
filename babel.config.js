module.exports = {
  presets: [
    ['@babel/preset-env',
      {
        targets: { node: 'current' }
      }
    ],
    '@babel/preset-typescript',
    '@babel/react'
  ],
  plugins: [
    '@babel/proposal-class-properties',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: './src'
        // alias: {
        //   transactions: './src/transactions'
        // }
      }
    ],
    [
      'babel-plugin-typescript-to-proptypes', {}
    ]
  ]
};