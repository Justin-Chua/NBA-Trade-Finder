// eslint.config.js
const eslintPluginReact = require('eslint-plugin-react')

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    plugins: {
      react: eslintPluginReact
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'warn'
      // Add other rules here
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
