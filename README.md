# 🤖 TITECH Login Automatization

This will help you to login in the `titech portal` in any browser; it even works in safari for `ios` or `macos`.

## Requirements for macos or ios

You will need to install [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887) and enable the access for the domain `portal.nap.gsic.titech.ac.jp`.

## Setup

1. Go to `Login Titech.js` and add you account details

```js
accountInput.value = "STUDENT_ID";
passwordInput.value = "PASSWORD";
```

2. Go to `Titech Fill Matrix.js` and add your matrix details from the back of your student id

```js
const matrix = {
	A: ["j", "l", "h", "x", "i", "h", "l"],
	// B: ["h", "l", "h", "x", "i", "h", "l"],
};
```

3. Open `Userscripts` in Safary and click on `Open Extension pages`. Then create two new javascript code and paste the content from `Login Titech.js` and `Titech Fill Matrix.js`.

## Preview

![Preview after setup](https://raw.githubusercontent.com/sarmientoF/titech_userscripts/main/images/preview.png)

You are ready to enjoy a smooth login in titech portal 🚀
