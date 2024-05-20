function firstNonRepeatedChar(str) {
    // Write your code here
    
    for(var i=0;i<str.length;i++){
        var s=str.charAt(i)
         if(s.IndexOf(c)===i&&s.IndexOf(c,i+1)===-1){
            return c;

         }
		
    }
    return null;
       
   }
   const input = prompt("Enter a string");
   alert(firstNonRepeatedChar(input)); 
   