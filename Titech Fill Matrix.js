// ==UserScript==
// @name        Titech Fill Matrix
// @description This is your new file, start writing code
// @include    *://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=idg_key&AUTHMETHOD=IG&GASF=CERTIFICATE*
// @run-at       document-end
// ==/UserScript==

function getElementByXpath(path) {
	return document.evaluate(
		path,
		document,
		null,
		XPathResult.FIRST_ORDERED_NODE_TYPE,
		null
	).singleNodeValue;
}

function fillMatrix() {
	const okPath =
		"/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[8]/td/input[1]";

	const okButton = getElementByXpath(okPath);

	const matrix = {
		A: ["j", "l", "h", "x", "i", "h", "l"],
		// B: ["h", "l", "h", "x", "i", "h", "l"],
	}; // TODO: Fill your matrix here

	const mPaths = [
		'//*[@id="authentication"]/tbody/tr[4]/td/div/div/input',
		'//*[@id="authentication"]/tbody/tr[5]/td/div/div/input',
		'//*[@id="authentication"]/tbody/tr[6]/td/div/div/input',
	];

	const vPaths_1 = [
		'//*[@id="authentication"]/tbody/tr[4]/th[1]',
		'//*[@id="authentication"]/tbody/tr[5]/th[1]',
		'//*[@id="authentication"]/tbody/tr[6]/th[1]',
	];

	const vPaths_2 = [
		'//*[@id="authentication"]/tbody/tr[4]/td',
		'//*[@id="authentication"]/tbody/tr[5]/td',
		'//*[@id="authentication"]/tbody/tr[6]/td',
	];

	const vPaths =
		getElementByXpath(vPaths_1[0]).innerText.trim() === ""
			? vPaths_2
			: vPaths_1;

	const values = vPaths.map((path) => {
		const innerText = getElementByXpath(path).innerText.trim();
		return { i: innerText[1], j: parseInt(innerText[3]) };
	});

	mPaths.map((path, i) => {
		const input = getElementByXpath(path);
		const value = values[i];
		input.value = matrix[value.i][value.j - 1];
	});

	okButton.click();
}

fillMatrix();
