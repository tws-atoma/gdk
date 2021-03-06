import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'st-ui',
  plugins: [
    sass()
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@gdk/st-ui',
      directivesProxyFile: '../ng-ui/src/lib/ng-ui.ts',
      valueAccessorConfigs: []
    }),
    reactOutputTarget({
      componentCorePackage: '@gdk/st-ui',
      proxiesFile: '../ra-ui/src/lib/ra-ui.ts'
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-json',
      file: 'docs/st-ui.json'
    },
    {
      type: 'docs-readme',
      footer: 'Geekster Development Kit'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: './html', dest: 'build' }
      ]
    }
  ]
};
