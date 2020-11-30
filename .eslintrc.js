module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
	},
	plugins: ['react'],
	rules: {
		'react/prefer-stateless-function': [0, { ignoreComponents: true }],
		'react/destructuring-assignment': [0, 'never', { ignoreClassFields: true }],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
	},
};
