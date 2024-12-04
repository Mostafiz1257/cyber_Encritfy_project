function encryptText() {
    var output;
    
    var encryptKey = document.getElementById("encryptKey").value;
    
    var encryptKeyExtra = document.getElementById("encryptKeyExtra").value;
    
    var textToEncrypt = document.getElementById("encryptText").value;
    
    var selectedValue = document.getElementById("encryptionType").value;

    switch (selectedValue) {
        case "additive":
            output = encryptToAdditive(encryptKey, textToEncrypt);
        break;
        case "multiplicative":
            output = encryptToMultiplicative(encryptKey, textToEncrypt);
        break;
        case "affine":
            output = encryptToAffine(encryptKey, encryptKeyExtra, textToEncrypt);
        break;
        case "playfair":
            output = encryptToPlayFair(encryptKey, textToEncrypt);
        break;
        case "vigenere":
            output = encryptToVigenere(encryptKey, textToEncrypt);
            break;
        case "rsa":
            output = encryptToRsa(encryptKey, encryptKeyExtra, textToEncrypt);
            break;
        default:
            output = "Something went wrong";
            break;
    }

    // Update the content of the element with id "decryptedTextOutput" with the decrypted text
    document.getElementById("encryptedTextOutput").innerHTML = "Encrypted Text: " + output;
}

function decryptText() {
    var output;
    
    var encryptKey = document.getElementById("decryptKey").value;
    
    var encryptKeyExtra = document.getElementById("decryptKeyExtra").value;
    
    var textToDecrypt = document.getElementById("decryptText").value;

    var selectedValue = document.getElementById("decryptionType").value;

    switch (selectedValue) {
        case "additive":
            output = decryptToAdditive(encryptKey, textToDecrypt);
        break;
        case "multiplicative":
            output = decryptToMultiplicative(encryptKey, textToDecrypt);
        break;
        case "affine":
            output = decryptToAffine(encryptKey, encryptKeyExtra, textToDecrypt);
        break;
        case "playfair":
            output = decryptToPlayFair(encryptKey, textToDecrypt);
        break;
        case "vigenere":
            output = decryptToVigenere(encryptKey, textToDecrypt);
        break;
        case "rsa":
            output = decryptToRsa(encryptKey, encryptKeyExtra, textToDecrypt);
        break;
        default:
            output = "Something went wrong";
        break;
    }
    
    document.getElementById("decryptedTextOutput").innerHTML = "Decrypted Text: " + output;
}

// Add event listener to the "Decrypt" button
document.getElementById("encryptButton").addEventListener("click", encryptText);

document.getElementById("decryptButton").addEventListener("click", decryptText);