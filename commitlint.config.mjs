export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'scope-enum': [
      2,
      'always',
      ['backend', 'frontend', 'nginx', 'cd', 'ci', 'core'],
    ],
    'scope-empty': [2, 'never'],
  },
};
