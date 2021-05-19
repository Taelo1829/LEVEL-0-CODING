function commonChars(string1 , string2){
 let commonLetter = '';
 let commonLetters = "";
 string1 = string1.toLowerCase();
 string2 = string2.toLowerCase();
 if(string2.length > string1.length){
 for(let i = 0; i < string2.length;i++){
     commonLetter = string1[i];
     for(let j = 0;j < string2.length;j++){
         if(commonLetter == string2[j]){
             commonLetters += commonLetter + ",";
         }
     }
 }
}else{
    for(let i = 0; i < string1.length;i++){
        commonLetter = string2[i];
        for(let j = 0;j < string1.length;j++){
            if(commonLetter == string1[j]){
                commonLetters += commonLetter + ",";
            }
        }
    }
}
 let commonCharacters = ''; 
 for(let i = 0;i < commonLetters.length -1;i++){
     commonCharacters+= commonLetters[i];
 }
 console.log(`Common Letters:${commonCharacters}`)
}
commonChars("computers","house")