Package.describe({
  name: 'jasonford:spinner-then',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Template helper that returns a spinner url until a provided image url is fully loaded',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use([
    'ecmascript',
    'reactive-var',
    'templating'
  ], 'client');
  api.addAssets([
    'spinner.svg',
    'error.svg'
  ],
  'client');
  api.addFiles([
    'spinner-then.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jasonford:spinner-then');
  api.addFiles('spinner-then-tests.js');
});
