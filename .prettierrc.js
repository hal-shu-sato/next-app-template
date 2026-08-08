/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  plugins: [
    'prettier-plugin-packagejson',
    '@trivago/prettier-plugin-sort-imports',
  ],
  importOrder: [
    '^react(-dom)?(/.*)?$',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderSideEffects: false,
};
