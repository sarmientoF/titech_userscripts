// ==UserScript==
// @name        Login Titech
// @description This is your new file, start writing code
// @match       *://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=userpass_key&AUTHMETHOD=UserPassword*
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

function login() {
	const accountPath =
		"/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/input";
	const passwordPath =
		"/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[3]/td/div/div/input";
	const okPath =
		"/html/body/center[3]/form/table/tbody/tr/td/table/tbody/tr[5]/td/input[1]";

	const accountInput = getElementByXpath(accountPath);
	const passwordInput = getElementByXpath(passwordPath);
	const okButton = getElementByXpath(okPath);

	accountInput.value = "18B07124";
	passwordInput.value = "PASSWORD"; //TODO: Fill your password here

	okButton.click();
}

login();
