/* Day-3 Javascript Essentail Program
 Program code By: ABHISHEKA A M  */
 
 // Program for Fizzbuzz without using mod

 for(i=0; i<=100; i++){
     a=i/15;
     b=i/3;
     c=i/5;
     if(Number.isInteger(a)){
         console.log("FizzBuzz");
     }
     else if(Number.isInteger(b)){
         console.log("Fizz");
     }
     else if(Number.isInteger(c)){
        console.log("Buzz");
    }else{
        console.log(i);
    }
 }
 
 (OR)

 let i, x, y, z, n=15;
 for(i=1;i<=n;i++){
     x=i;
     y=i;
     z=i;

     while(x>=15) x-=15;
     while(z>=15) z-=5;
     while(y>=3) y-=3;

     if(x==0) console.log("FizzBuzz");
     else if(z==0) console.log("Buzz");
     else if(y==0) console.log("Fizz");
     else console.log(i);
 }

 // Print Palindrome words from a string

 let s = "madam knows malayalam well ";
 let s1 = "", s2 = "";
 for (t of s) {
     if (t!= "") {
         s2 = s2 + t;
        s1 = t + s1;
     }
     else {
         if (s1 == s2)console.log(s1);
         s1 = "";
         s2 = "";
     }
 }
