let defaultEncrypt = "*****";

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

	let textArray = text.split(" ");
	let textEncryptArray = textEncrypt.split(" ");
	let textReplaceArray = textReplace.split(" ");

	// FUNCTION TO DETERMINE LENGTH OF SELECTED WORDS AND MAKE IT EQUAL TO LENGTH OF ASTERISK

	// let asterisk = function getNoOfAsterisk(i) {
	// 	for (
	// 		let j = 0;
	// 		j <= textEncryptArray[i].length;
	// 		j++
	// 	) {
	// 		if (textReplaceArray[i]) {
	// 			return;
	// 		} else {
	// 			defaultEncrypt += "*";
	// 			console.log(textEncryptArray[i].length);
	// 		}
	// 	}
	// };

	//Function that converts all text to lower

	let changeCase = (text) => text.toLowerCase();

	//Function to clear input field

	let clearField = function () {
		const inputs = document.querySelectorAll(
			"#post, #replacedWord, #encryptWord"
		);
		inputs.forEach((key) => {
			key.value = "";
		});
	};

	//Function that replaces multiple words

	let multiple = function replaceMultipleWords() {
		let textArray = text.split(" ");
		let textEncryptArray = textEncrypt.split(" ");
		let textReplaceArray = textReplace.split(" ");

		let lowerTextArray = textArray.map((e) => {
			changeCase(e);
		});
		let lowerTextEncryptArray =
			textEncryptArray.map((e) => {
				changeCase(e);
			});
		let lowerTextReplaceArray =
			textReplaceArray.map((e) => {
				changeCase(e);
			});

		for (
			let i = 0;
			i < lowerTextEncryptArray.length;
			i++
		) {
			// if (lowerTextArray.includes(lowerTextEncryptArray)) {
			// 	lowerTextArray.replaceAll(lowerTextEncryptArray[i], lowerTextReplaceArray[i])
			// }
			lowerTextArray.forEach((e) => {
				if (e == lowerTextEncryptArray[i]) {
					return lowerTextArray
						.join()
						.replace(e, lowerTextReplaceArray[i]);
				}
			});
		}
	};

	multiple();
}
