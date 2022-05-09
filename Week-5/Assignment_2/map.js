function isVowel(char){
    return "aeiou".includes(char);                          //checks if the character is a vowel
   }

    function vowelCount(str){
        const vowelMap=new Map();                           //creates a new array from calling a function for every array element
        for(let char of str){
            let lowerCaseChar=char.toLowerCase()            //converts the character to lowercase
            if(isVowel(lowerCaseChar)){
             if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar)+1);
            }else{
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
        return vowelMap;
}

console.log(vowelCount("Hello World"));