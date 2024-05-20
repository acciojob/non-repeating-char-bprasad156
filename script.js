function firstNonRepeatedChar(str) {
    // Write your code here
    
    for(let i = 0; i < str.length; i++)
   {
 
       if (str.indexOf(str.charAt(i),str.indexOf(str.charAt(i))+1) == -1)
       {
           document.write(str[i])
 
           break
       }
   }
   return null;
}
   }
   const input = prompt("Enter a string");
   alert(firstNonRepeatedChar(input)); 
   