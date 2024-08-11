/** @type {import('stylelint').Config} */
export default {
	extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
	plugins: ["@stylistic/stylelint-plugin"],
	rules: {
		"@stylistic/indentation": "tab",
	},
};
