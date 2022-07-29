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

	// FUNCTION TO DETERMINE LENGTH OF SELECTED WORDS AND MAKE IT EQUAL TO LENGTH OF ASTERISK

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
}
