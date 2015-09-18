// Extend the base config
import config from './base';

// Add react plugin
config.plugins.push('react');

// Enable react syntax
config.ecmaFeatures.jsx = true;

config.rules = Object.assign({}, config.rules, {
  'react/display-name': 0,
  'react/jsx-boolean-value': [2, 'never'],
  'react/jsx-no-undef': 2,
  'react/jsx-quotes': [2, 'double'],
  'react/jsx-sort-prop-types': 0,
  'react/jsx-sort-props': 0,
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,
  'react/no-did-mount-set-state': 2,
  'react/no-did-update-set-state': 2,
  'react/no-multi-comp': 1,
  'react/no-unknown-property': 2,
  'react/prop-types': 1,
  'react/react-in-jsx-scope': 2,
  'react/require-extension': [2, { 'extensions': ['.js'] }],
  'react/self-closing-comp': 2,
  'react/sort-comp': 2,
  'react/wrap-multilines': 2
});

// Export config
export default config;
