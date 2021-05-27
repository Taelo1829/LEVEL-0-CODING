function vowels(string) {
    let vowels = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
            vowels += string[i] + ", ";
        }
    }
    vowels = vowels.slice(0, vowels.length - 2);
    console.log(vowels);
}
vowels("Umuzi");
