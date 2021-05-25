 function triangle(num){

   if(num > 0){
     var str = "";

     for(var i = 0 ; i < num ; i++){
        for (var x = 0; x <= i; x++) {
            str = str + "#";
        }
       console.log(str);
       str = "";
      }

    }else{

     var str = "";

      for(var k = 0 ; k < Math.abs(num) ; k++){
        for (var t = Math.abs(num); t > k; t--) {
            str = str + "#";
        }
       console.log(str);
       str = "";
      }
    }
}
 triangle(-4);