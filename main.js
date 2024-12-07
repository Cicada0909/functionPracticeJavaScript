function calcLetters(word) {
    if (typeof(word) == "string") {
        const result = {};

        for (let i = 0; i < word.length; i++) {
            const letter = word[i];

            if (result[letter]) {
                result[letter]++;
            } else {
                result[letter] = 1;
            }

            console.log(result);
        }
        
    
        console.log(result);
    } else {
        console.log("Error input");
    }
}

const userWord = prompt("Введите слово");

calcLetters(userWord);