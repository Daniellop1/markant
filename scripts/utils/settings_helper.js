// Helper functions for saving and loading user settings with localstorage.
;(function() {
	// Default values for various user settings.
	const defaultValues = {
		"editorFontFamily": "monospace",
		"editorFontSize": 13,
		"editorIndentSize": 4,
		"editorUseTabs": true,
		"editorTheme": "light",
		"editorShowLineNumbers": false,
		"editorUseBigHeaders": false,
		"editorBigHeaders": false,
		"viewerFontFamily": "sans-serif",
		"viewerFontSize": 16,
		"viewerHljsTheme": "default",
		"viewerMathRenderer": "katex",
		"viewerTheme": "light",
		"hljsTabSize": 4,
	};

	// Used for converting settings values to actual font-familys.
	const fontFamilyMap = {
		"monospace": "monospace",
		"sans-serif": "sans-serif",
		"serif": "serif",
	};

	// Get the setting with the specified key. If the setting is null, use the default value.
	function getSetting(key) {
		let setting;
		try {
			setting = JSON.parse(localStorage.getItem(key));
		} catch (exception) {
			// Ignored
		}
		if (setting == null || setting == "") {
			setting = getDefaultValue(key);
			setSetting(key, setting);
		}
		return setting;
	}

	// Set the setting with the specified key to the specified value.
	function setSetting(key, value) {
		if (value == null) {
			value = getDefaultValue(key);
		}
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (exception) {
			console.error(`Error saving setting.\nKey: ${key}\nValue: ${value}\n`);
		}
	}

	// Get the default value of the setting with the specified key.
	function getDefaultValue(key) {
		if (key in defaultValues) {
			return defaultValues[key];
		}
	}

	// Reset all the settings to their default values.
	function reset() {
		for (let key in defaultValues) {
			setSetting(key, getDefaultValue(key));
		}
	}

	module.exports = {
		getSetting,
		setSetting,
		fontFamilyMap,
		getDefaultValue,
		reset
	};
}());