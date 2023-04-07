                                    
                                    //      21
                                    // Changing case

   
      // ----------------------- toLowerCase ------------                       


    //   with else ===============


    //  var city = prompt("Enter Your City Name");
    //  city = city.toLowerCase()  
    //  var arr = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"] 
    //  for (var i=0; i<arr.length; i++){
    //     if(arr[i] ===city){
    //         alert("city has found");
    //     }
    //     else{alert("City not Found")};
    //  }    
     
     
    //  without else in book =================


    //  var city = prompt("Enter Your City Name");
    //  city = city.toLowerCase()  
    //  var arr = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"] 
    //  for (var i=0; i<arr.length; i++){
    //     if(arr[i] ===city){
    //         alert("city has found");
    //     }
    //  } 
     
     








 // ----------------------- toUpperCase ------------                       


     //   with else ====================


    //  var city = prompt("Enter Your City Name");
    //  city = city.toUpperCase()  
    //  var arr = ["KARACHI" , "ISLAMABAD" , "PISHAWER", "LAHORE"];
    //  for (var i=0; i<arr.length; i++){
    //     if(arr[i] ===city){
    //         alert("city has found");
    //     }
    //     else{alert("City not Found")};
    //  }  


        //  without else in book =================


    //       var city = prompt("Enter Your City Name");
    //  city = city.toUpperCase()  
    //  var arr = ["KARACHI" , "ISLAMABAD" , "PISHAWER","Lahore"] 
    //  for (var i=0; i<arr.length; i++){
    //     if(arr[i] ===city){
    //         alert("city has found");
    //     }
    //     else{alert("City not Found")};
    //  } 










                        //             22
                        //         Strings:
                        //       Measuring length
                        //    and extracting parts



   
    //  ------------First letter capitalize from user------


    // var city = prompt('Enter Your City Name');
    // var firstchar = city.slice(0,1);
    // firstchar =  firstchar.toUpperCase();
    // var otherChar = city.slice(1);
    // otherChar = otherChar.toLowerCase();

    // var city = firstchar+otherChar;
    // console.log(city);         
    
    

//     var str = 'abcdf'
// var strPart = str.slice(1);
// console.log(strPart)



// var myName='asif';
// var text = myName.slice(0,1).toUpperCase();
// text = text + myName.slice (1,5);
// console.log(text);



//  var month = prompt("Enter a month");
//  var charsInMonth = month.length;
//  if (charsInMonth > 3) {
//  monthAbbrev = month.slice(0, 3);
//  }
// console.log(monthAbbrev);




                        // checking double spaces


//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
 
//   }
  
//  }










                        //          23
                        //       Strings:
                        //    Finding segments




//  var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should";
//   for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 12) === "World War II") {
//  text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//  console.log(text);
//   }
//   }



// ------------------- Finding index-------------------


// var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should";
// var indxNum = text.indexOf('World War II');
// console.log(indxNum);



// ------------------- Finding index of last-------------------


// var text = "The New Yorker magazine doesn't allow the phrase World War II. New They say it should";
// var indxNum = text.lastIndexOf('New');
// console.log(indxNum);



//-----------------// Finding and replacing  segments---


//  var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should";
//  var indxNum = text.indexOf('World War II');
//  var firstText = text.slice(0,indxNum);
//  var replacingText = 'The Second World War';
//  var thirdText = text.slice(indxNum+12);
//  console.log(firstText+replacingText+thirdText);
                        



// -----------------replacing character

// var text = 'Luxury Mogul is Takes Top Spot. The worlds richest person is Frances Bernard Arnault';
// text=text.replace(/is/g,'Asif');
// // console.log(text);
// document.write(text);










                    //              24
                    //           Strings:
                    //  Finding a character at a location


      
//  var a = "Asif";
// console.log(a.charAt(3));    







// ----------------- slice in string--------------


// string.slice(startIndex, endIndex);


// let str = "Hello, World!";

// // Extract a slice of the string from index 0 to 4 (excluding index 4)
// let slice1 = str.slice(0, 4); // Output: "Hell"
// console.log(slice1);

// // Extract a slice of the string from index 7 to the end of the string
// let slice2 = str.slice(7); // Output: "World!"
// console.log(slice2);

// // Extract a slice of the string from index -6 to the end of the string
// let slice3 = str.slice(-6); // Output: "World!"
// console.log(slice3);

// // Extract a slice of the string from index 2 to index 8 (excluding index 8)
// let slice4 = str.slice(2, 8); // Output: "llo, W"
// console.log(slice4);











                //           25
                //        Strings:
                //  Replacing characters



//     var para = "this is example";
//    var para1 = para.replace("example" , "text");
//    console.log(para1);    






                // Global  Replacing characters

    //    var para = "this is example , this is example";
    //    var para1 = para.replace(/example/g, "text");
    //    console.log(para1);










                    //          26
                    //  Rounding numbers



// randamNumber // 16 decimal places 

// 0 - 0.4 (round off to smallest number)
// 0.5 - 0.9 (round off to largest number)


// var num= 2.5;
// myNumber=Math.round(num);
// console.log(myNumber);


// var num = 1.5;
// var round = Math.round(num);
// console.log(round);






// floor // forcefully round off to smallest number 


// var num= 2.5;
// myNumber=Math.floor(num);
// console.log(myNumber);


// ---Floor pick the smallest value after point . ------------


// var num = 77.7;
// var round = Math.floor(num);
// console.log(round);






// ceil // forcefully round off to largest number


// var num= 2.5;
// myNumber=Math.ceil(num);
// console.log(myNumber);



// // ---Ceil pick the biggest value after point . ------------


//  var num = 76.1;
//  var round = Math.ceil(num);
//  console.log(round);






// var randamNumber = Math.randam()
// console.log(math.ceil(randamNumber * 6));










                    //                  27
                    //    Generating random numbers
 
                    
 
// randamNumber // 16 decimal places 



// var randamNumber = Math.randam()
// console.log(math.ceil(randamNumber * 6));




// var randam1 = Math.random() ;
// console.log(randam1);



// multiply by 7 means it generate number between 1 to 6.9

// var randam1 = Math.random() * 7;
// console.log(randam1);










                //                       28
        //   Converting strings to integers and decimals



// ----------------two method-------------------


// Number("10");

// var num = "10";
// num = Number(num);


// console.log(num);





// parseInt("10");

// var num = "10";
// num = parseInt(num);
// console.log(num);






       // string to number 
//Number // parseInt //parseFloat



// var num = "5.3";
// num=parseFloat(num);
// num=Number(num);
// var num_2 = 0.7;
// var total = num + num_2
// console.log(total);    










        //                  29
        //   Converting strings to numbers, numbers to
        //               strings



// number to string
//toString




// var num = 10;
// console.log(num.toString());



// var a = 7;
// a=a.toString()
// console.log(typeof a )
// var b = ' Second most powerful number';
// var total = a + b;
// console.log(total);










            //                30
            // Controlling the length of decimals



            // var num = 77.445366;
            // var cont = num.toFixed(3);
            // console.log(cont);            











            //                 31
            // Getting the current date and time    
            
            

// var a = new Date();
// console.log(a);


// var now = new Date();
// console.log(typeof now.toString());
// console.log(now);


// var day = now.getDay();
// var daysArr = ["sun","mon","tues","wed","thurs","fri","sat"];
// var today = daysArr[day]
// console.log('Day',today);
// var day = now.getDay();



// var monthArr = ["jan","feb","march","apr","may","june","july"];
// var month = now.getMonth();
// var nowMonth = monthArr[month]
// console.log(nowMonth);










            //                    32
            //  Extracting parts of the date and time



// var fullYear = now.getFullYear();
//  console.log(fullYear);

// var hour = now.getHours();
//  console.log(hour);

// var milisec = now.getMilliseconds();
//  console.log(milisec);

// var min = now.getMinutes();
//  console.log(min);

// var sec = now.getSeconds();
//  console.log(sec);

// var time = now.getTime();
//  console.log(time);

// var tzone = now.getTimezoneOffset();
//  console.log(tzone);










    //               33
    //    Specifying a date and time



// var today = new Date();
// var d = new Date("July 21, 1983 13:25:00");
// console.log(d);




// ==================age calculator=====================


// var now = new Date();
// var nowTime = now.getTime()
// console.log(nowTime);


// var birthDate = new Date (prompt("Jan 1,1970"));
// var birthDateTime = birthDate.getTime()
// console.log(birthDateTime);


// var diff = nowTime - birthDateTime
// console.log(diff);


// var myBirthYear = (diff/(999*60*60*24*365));
// console.log(Math.floor(myBirthYear));










            //                   34
            //    Changing elements of a date and time



// var d = new Date();
// d.setFullYear(2001);
// console.log(d);


//  var d = new Date();
//  d.setMonth(11);


// var d = new Date();
//  d.setDate(15);


// var d = new Date();
//  d.setHours(13);


//   var d = new Date();
//   d.setMinutes(05);


//   var d = new Date();
//    d.setSeconds(55);
   

//    var d = new Date();
//     d.setMilliseconds(867);   










                        //   35
                        // Functions



// ================syntex=========

// function first(){

// }



// console.log("His");

// function first(){
// alert("He's World");
// }

// console.log("World");     










            //          36
            //     Functions:
            // Passing them data




// =================calling function========




// function first(){
// alert("His World");
// }

// first();



// // Parameters
// function first(a,b){
// alert(a+b);
// }

// // arguments
// first(2,3); 



// ===============by default value



// function getTime(greeting,name= "now"){
//     alert(greeting + "" + name);
//     var now = new Date()
//     var hours = now.getHours()
//     var min = now.getMinutes()
//     var sec = now.getSeconds()
//     console.log("Now the time is " + hours + " " + min + " " + sec)
// }

// getTime("Welcome", );
// getTime("Welcome", "Asifff");



// function getTime(greeting,name){
//     alert(greeting + "" + name);
//     var now = new Date()
//     var hours = now.getHours()
//     var min = now.getMinutes()
//     var sec = now.getSeconds()
//     console.log("Now the time is " + hours + " " + min + " " + sec)
// }

// getTime("Welcome", "Asif");
// getTime("Welcome", "Asifff");








        //            37
        //       Functions:
        //   Passing data back from them


// ================ getting value fromm function===


// // Parameters
// function first(a,b){
// return a+b
// }

// // arguments
// console.log(first(2,3));

// console.log(first(7,3));







// // Parameters
// function first(a,b){
// return "It's never to late";
// }

// // arguments
// console.log(first(2,3));
               










                //         38
                //     Functions:
                // Local vs. global variables



// ==================now not calling function===========

//  var a = "Asif";

//  function foo(){
//     a = "Ahmed";
//  } 

 

// console.log(a);








 
// one way

// function greeting(){
//     alert("He's World");
// }

// greeting();





// second way

// function greeting(greet){
//     alert(greet);
// }

// greeting("NA Times");



// function add(a,b,c){
//     alert(a+b+c);
// }

// add(7,7,7);





// ------------taking value from function------


// function add(a,b,c){

//     var z = a+b+c
//     return z;
// }

// var g = add(5,8,11);
// alert(g);





// globally declare  within the function declare

// var h = 15;
// function add(a,b,c){
// alert(h);
//     var z = a+b+c
//     return z;
// }

// var g = add(5,8,11);
// alert(g);







// globally declare 

// function add(a,b,c){
// alert(h);
// var h = 15;
//     var z = a+b+c
//     return z;
// }

// var g = add(5,8,11);
// alert(g);
