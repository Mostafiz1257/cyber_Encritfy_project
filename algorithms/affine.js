function encryptToAffine(key1Str, key2Str, text) {
    const key1 = parseInt(key1Str, 10); // Convert key1 from string to int
    const key2 = parseInt(key2Str, 10);
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let encryptedText = '';

    // Encrypt each character
    for (let char of text) {
        let isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();

        let index = alphabet.indexOf(char);
        if (index !== -1) {
            // Character is in the alphabet, apply the Affine cipher
            let encryptedIndex = (key1 * index + key2) % 26;
            let encryptedChar = alphabet[encryptedIndex];
            encryptedText += isUpperCase ? encryptedChar.toUpperCase() : encryptedChar;
        } else {
            // Character not in the alphabet (e.g., space), add it directly
            encryptedText += char;
        }
    }
    
    return encryptedText;
}
function modInverse(a, m) {
    // Calculate the modular inverse of a modulo m
    // Assumes that a and m are coprime
    a = a % m;
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) {
            return x;
        }
    }
    return 1; // Should never reach here if a and m are coprime
}

function decryptToAffine(key1Str, key2Str, text) {
    const key1 = parseInt(key1Str, 10); // Convert key1 from string to int
    const key2 = parseInt(key2Str, 10);
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let decryptedText = '';

    const key1Inverse = modInverse(key1, 26); // Find modular inverse of key1

    // Decrypt each character
    for (let char of text) {
        let isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();

        let index = alphabet.indexOf(char);
        if (index !== -1) {
            // Character is in the alphabet, apply the Affine decryption
            let decryptedIndex = (key1Inverse * (index - key2 + 26)) % 26; // Ensure the result is positive with +26
            let decryptedChar = alphabet[decryptedIndex];
            decryptedText += isUpperCase ? decryptedChar.toUpperCase() : decryptedChar;
        } else {
            // Character not in the alphabet (e.g., space), add it directly
            decryptedText += char;
        }
    }

    return decryptedText;
}
