let defaultEncrypt = "";

function getValue(event) {
	event.preventDefault();
	let text =
		document.getElementById("post").value;
	let textEncrypt = document.getElementById(
		"replacedWord"
	).value;
	let textReplace = document.getElementById(
		"encryptWord"
	).value;
	let newText =
		document.getElementById("newText");

	FUNCTION TO DETERMINE LENGTH OF SELECTED WORDS AND MAKE IT EQUAL TO LENGTH OF ASTERISK

	let asterisk = function getNoOfAsterisk() {
		for (
			let i = 1;
			i <= textEncrypt.length;
			i++
		) {
			defaultEncrypt += "*";
		}
	};

	asterisk();

	let news = text.replaceAll(
		textEncrypt,
		textReplace ? textReplace : defaultEncrypt
	);

	newText.textContent = news;

	//Function that converts all text to lower

	let changeCase = function (text) {
		text.toLowerCase()
	}

	//Function that replaces multiple words

// 	let multiple = function replaceMultipleWords() {
// 		let textArray = text.split(" ");
// 		let  textEncryptArray = textEncrypt.split(" ");
// 		let textReplaceArray = textReplace.split(" ");

// 		let lowerTextArray = textArray.map(e => {changeCase(e)})
// 		let lowerTextEncryptArray = textEncryptArray.map(e => { changeCase(e) })
// 		let lowerTextReplaceArray = textReplaceArray.map(e => { changeCase(e) })

// 		for (let i = 0; i < lowerTextEncryptArray.length; i++) {
// 			if (lowerTextArray.includes(lowerTextEncryptArray)) {
// 				lowerTextArray.replaceAll(lowerTextEncryptArray[i], lowerTextReplaceArray[i])
// 			}
// 		}	
// 	}

// 	multiple()
// }
