module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': (filenames: string[]) => [
    `npx eslint --fix . ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],
};
