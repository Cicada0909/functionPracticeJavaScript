function calcLetters(word) {
    if (typeof(word) == "string") {
        const result = {};

        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
    
            let counter = 1;
    
            if (result[letter]) {
                counter++
            }
    
            result[letter] = counter;
        }
    
        console.log(result);
    } else {
        console.log("Error input");
    }
}

const userWord = prompt("Введите слово");

calcLetters(userWord);