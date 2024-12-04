function encryptToMultiplicative(key, text) {
    // Initialize an empty string to store the encrypted text
    var encryptedText = "";

    // Define the alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    // Loop through each character in the text
    for (var i = 0; i < text.length; i++) {
        // Get the current character
        var char = text.charAt(i).toLowerCase(); // Convert to lowercase for simplicity

        // Check if the character is a letter
        if (/[a-z]/.test(char)) {
            // Find the position of the character in the alphabet
            var position = alphabet.indexOf(char);

            // Calculate the new position by multiplying and then taking modulus
            var newPosition = (position * key) % alphabet.length;

            // Get the encrypted character from the alphabet
            var encryptedChar = alphabet.charAt(newPosition);

            // Preserve the original case of the character
            if (text.charAt(i) === text.charAt(i).toUpperCase()) {
                encryptedChar = encryptedChar.toUpperCase();
            }

            // Append the encrypted character to the result
            encryptedText += encryptedChar;
        } else {
            // If the character is not a letter, keep it unchanged
            encryptedText += char;
        }
    }

    // Return the encrypted text
    return encryptedText;
}

function decryptToMultiplicative(key, encryptedText) {
    // Initialize an empty string to store the decrypted text
    var decryptedText = "";

    // Define the alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    // Calculate the multiplicative inverse of the key
    var inverseKey = multiplicativeInverse(key, alphabet.length);

    // Loop through each character in the encrypted text
    for (var i = 0; i < encryptedText.length; i++) {
        // Get the current character
        var char = encryptedText.charAt(i).toLowerCase(); // Convert to lowercase for simplicity

        // Check if the character is a letter
        if (/[a-z]/.test(char)) {
            // Find the position of the character in the alphabet
            var position = alphabet.indexOf(char);

            // Calculate the new position by multiplying with the inverse key and then taking modulus
            var newPosition = (position * inverseKey) % alphabet.length;

            // Get the decrypted character from the alphabet
            var decryptedChar = alphabet.charAt(newPosition);

            // Preserve the original case of the character
            if (encryptedText.charAt(i) === encryptedText.charAt(i).toUpperCase()) {
                decryptedChar = decryptedChar.toUpperCase();
            }

            // Append the decrypted character to the result
            decryptedText += decryptedChar;
        } else {
            // If the character is not a letter, keep it unchanged
            decryptedText += char;
        }
    }

    // Return the decrypted text
    return decryptedText;
}

function multiplicativeInverse(key, modulus) {
    key = key % modulus;
    for (var x = 1; x < modulus; x++) {
        if ((key * x) % modulus === 1) {
            return x;
        }
    }
    throw new Error("No multiplicative inverse found. The key is not valid.");
}