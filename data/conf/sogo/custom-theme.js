/* EXAMPLE - EXAMPLE - EXAMPLE - EXAMPLE - EXAMPLE - EXAMPLE - EXAMPLE
(function() {
  'use strict';
  angular.module('SOGo.Common')
    .config(configure)

  configure.$inject = ['$mdThemingProvider'];
  function configure($mdThemingProvider) {
    var greyMap = $mdThemingProvider.extendPalette('grey', {
      '200': 'F5F5F5',
      '300': 'E5E5E5',
      '1000': '4C566A'
    });
    var greenCow = $mdThemingProvider.extendPalette('green', {
      '600': 'E5E5E5'
    });
    $mdThemingProvider.definePalette('frost-grey', greyMap);
    $mdThemingProvider.definePalette('green-cow', greenCow);
    $mdThemingProvider.theme('default')
      .primaryPalette('green-cow', {
        'default': '400',
        'hue-1': '400',
        'hue-2': '600',
        'hue-3': 'A700'
      })
      .accentPalette('green', {
        'default': '600',
        'hue-1': '300',
        'hue-2': '300',
        'hue-3': 'A700'
      })
      .backgroundPalette('frost-grey');
    $mdThemingProvider.generateThemesOnDemand(false);
  }
})();
 */


(function () {
  'use strict';

  angular.module('SOGo.Common')
    .config(configure);

  configure.$inject = ['$mdThemingProvider'];

  function configure($mdThemingProvider) {
    // Define modern color palette (Dark theme with blue accents)
    var modernPrimary = $mdThemingProvider.extendPalette('blue-grey', {
      '50': 'eceff1',
      '100': 'cfd8dc',
      '200': 'b0bec5',
      '300': '90a4ae',
      '400': '78909c',
      '500': '607d8b',
      '600': '546e7a',
      '700': '455a64',
      '800': '37474f',
      '900': '263238',
      'A100': 'cfd8dc',
      'A200': 'b0bec5',
      'A400': '78909c',
      'A700': '455a64',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50', '100', '200', 'A100'],
      'contrastLightColors': ['800', '900']
    });

    var modernAccent = $mdThemingProvider.extendPalette('light-blue', {
      '50': 'e1f5fe',
      '100': 'b3e5fc',
      '200': '81d4fa',
      '300': '4fc3f7',
      '400': '29b6f6',
      '500': '03a9f4',
      '600': '039be5',
      '700': '0288d1',
      '800': '0277bd',
      '900': '01579b',
      'A100': '80d8ff',
      'A200': '40c4ff',
      'A400': '00b0ff',
      'A700': '0091ea'
    });

    // Register custom palettes
    $mdThemingProvider.definePalette('modern-primary', modernPrimary);
    $mdThemingProvider.definePalette('modern-accent', modernAccent);

    // Apply the theme
    $mdThemingProvider.theme('default')
      .primaryPalette('modern-primary', {
        'default': '900',   // Primary dark color
        'hue-1': '800',     // Slightly lighter for elements
        'hue-2': '700',     // Sidebar background
        'hue-3': '600'      // Hover states
      })
      .accentPalette('modern-accent', {
        'default': 'A700',  // Bright accent for CTAs
        'hue-1': '500',     // Icons and secondary actions
        'hue-2': '300',     // Hover effects
        'hue-3': '100'      // Subtle highlights
      })
      .warnPalette('red')
      .backgroundPalette('modern-primary', {
        'default': '900',
        'hue-1': '800',
        'hue-2': '700'
      });

    // Enable theme generation
    $mdThemingProvider.generateThemesOnDemand(false);
  }
})();
