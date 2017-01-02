;(function() {
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
		"markdown": "",
		"documentTitle": "Untitled document",
		"leftPanePercentage": 50,
		"rightPanePercentage": 50,
	};

	// Used for converting settings values to actual font-familys.
	const fontFamilyMap = {
		"monospace": "monospace",
		"sans-serif": "sans-serif",
		"serif": "serif",
	};

	function getSetting(key) {
		let setting;
		try {
			setting = JSON.parse(localStorage.getItem(key));
		} catch (exception) {
			// Ignored
		}
		if (setting == null || settings == "") {
			setting = getDefaultValue(key);
			setSetting(key, setting);
		}
		return setting;
	}

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

	function getDefaultValue(key) {
		if (key in defaultValues) {
			return defaultValues[key];
		}
	}

	module.exports = {
		getSetting,
		setSetting,
		fontFamilyMap
	};
}());