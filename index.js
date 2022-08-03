let defaultEncrypt = "****";
let totalWordCount;
let totalWordMatchCount = 0;

function getValue(event) {
	let start = Date.now();
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

	let wordCount =
		document.getElementById("wordCount");
	let matchCount =
		document.getElementById("matchCount");
	let scrambledCount = document.getElementById(
		"scrambledCount"
	);
	let timeCount =
		document.getElementById("timeCount");

	// let toggler =
	// 	document.getElementById("toggler");

	let textArray = text.split(" ");
	let textEncryptArray = textEncrypt.split(" ");
	let textReplaceArray = textReplace.split(" ");

	// FUNCTION TO DETERMINE LENGTH OF SELECTED WORDS AND MAKE IT EQUAL TO LENGTH OF ASTERISK

	// let asterisk = function getNoOfAsterisk(i) {
	//  for(let j=0; j<)
	// 	if (!textReplaceArray[i]) {
	// 		console.log(defaultEncrypt);
	//  }
	// };

	//Function that converts all text to lower

	let changeCase = (text) => text.toLowerCase();

	//TOGGLE ENCRYPTION TEXT

	// function toggler (){
	// 	textContent
	// }
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
			lowerTextArray.forEach((j, index) => {
				if (j == lowerTextEncryptArray[i]) {
					// asterisk(i);
					textReplaceArray[i]
						? (textArray[index] =
								textReplaceArray[i])
						: (textArray[index] = defaultEncrypt);
					totalWordMatchCount += 1;
				}
			});
		}
		totalWordCount = textArray.length;

		newText.textContent = textArray.join(" ");
		wordCount.textContent = totalWordCount;
		matchCount.textContent = totalWordMatchCount;
		scrambledCount.textContent =
			lowerTextEncryptArray.length;

		let end = Date.now();

		timeCount.textContent = `${end - start}ms`;
	};

	multiple();
	clearField();
}
