function vowels(string){
    let vowels = '';
    for(let i = 0 ; i < string.length;i++){
        if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u" ){
            vowels+= string[i] + ",";
        }
    }
    let characters = '';
    for(let i = 0;i < vowels.length - 1;i++){
        characters += vowels[i];
    }
   console.log(characters); 
 }
 vowels("Umuzi")
