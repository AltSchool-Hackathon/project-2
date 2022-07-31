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
		//Map through array and change to lower case

		let lowerTextArray = textArray.map((e) =>
			changeCase(e)
		);
		let lowerTextEncryptArray =
			textEncryptArray.map((e) => changeCase(e));
		let lowerTextReplaceArray =
			textReplaceArray.map((e) => changeCase(e));

		//Map through array and check if there's a match and replace

		for (
			let i = 0;
			i < textEncryptArray.length;
			i++
		) {
			textArray.forEach((j, index) => {
				if (j == textEncryptArray[i]) {
					textReplaceArray[i]
						? (textArray[index] =
								textReplaceArray[i])
						: (textArray[index] = defaultEncrypt);
				}
			});
		}

		newText.textContent = textArray.join(" ");
	};

	multiple();
	clearField();
}
