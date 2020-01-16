// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react
module.exports = function(config) {
	config.set({
		mutate: ['src/**/*.ts?(x)', '!src/index.tsx', '!src/i18n/**'],
		mutator: 'typescript',
		testRunner: 'jest',
		reporters: ['progress', 'clear-text', 'html'],
		coverageAnalysis: 'off',
		jest: {
			projectType: 'react'
		},
		thresholds: { high: 80, low: 80, break: 79 },
		symlinkNodeModules: false
	});
};
