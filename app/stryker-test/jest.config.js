module.exports = {
	jest: {
		roots: ['<rootDir>/src'],
		setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
		testEnvironment: 'jsdom',
		testURL: 'http://localhost',
		transform: {
			'^.+\\.tsx?$': 'ts-jest',
			'^.+\\.(js|jsx)$': '<rootDir>node_modules/babel-jest'
		},
		transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|tsx|ts)$'],
		moduleNameMapper: {
			'^react-native$': 'react-native-web'
		},
		moduleFileExtensions: ['js', 'json', 'jsx', 'tsx', 'ts']
	}
};
