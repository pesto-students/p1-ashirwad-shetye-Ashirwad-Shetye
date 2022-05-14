// "Map" is used here to store key/value pairs 


function isVowel(char){
    return "aeiou".includes(char);                       //checks if the character is a vowel
}

function vowelCount(str){
    const vowelMap=new Map();                           //creates a new array from calling a function for every array element
    for(let char of str){
        let lowerCaseChar=char.toLowerCase()            //converts the all characters to lowercase
            if(isVowel(lowerCaseChar)){                 
            if(vowelMap.has(lowerCaseChar)){            //checks if the vowel is already present in the map
               vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar)+1);  //setting the vowel as key and it's count as value
            }else{
               vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount("Hey, It's Ashirwad here!"));