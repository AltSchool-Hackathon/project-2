let defaultEncrypt = "*";
let totalWordCount;
let totalWordMatchCount = 0;
let scrambledWordCount = [];
let timeUsedCount;

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
		//to make it case insensitive

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
			i < lowerTextEncryptArray.length;
			i++
		) {
			lowerTextArray.forEach((j, index) => {
				if (j == lowerTextEncryptArray[i]) {
					scrambledWordCount.push(
						lowerTextEncryptArray[i]
					);
					lowerTextReplaceArray[i]
						? (lowerTextArray[index] =
								lowerTextReplaceArray[i])
						: (lowerTextArray[index] =
								defaultEncrypt.repeat(
									parseInt(j.length)
								));
					totalWordMatchCount += 1;
				}
			});
		}
		totalWordCount = textArray.length;

		let finalResult = lowerTextArray.join(" ");

		//Capitalise the first letter of the sentence.
		newText.textContent =
			finalResult.charAt(0).toUpperCase() +
			finalResult.slice(1);

		wordCount.textContent = totalWordCount;
		matchCount.textContent = totalWordMatchCount;
		scrambledCount.textContent =
			scrambledWordCount.join("").length;

		let end = Date.now();
		timeUsedCount = `${end - start}ms`;
		timeCount.textContent = timeUsedCount;
		scrambledWordCount = [];
		totalWordMatchCount = 0;
	};

	multiple();
	clearField();
}
