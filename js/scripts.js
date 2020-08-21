function replace(x){
  
  let num = parseInt(x);
  let strA = "Won't you be my neighbor?";
  let strB = "Boop!";
  let strC= "Beep!";
  let newArray=[];
 
  for(let i = 0; i <= num; i++){
   // test to check if the string contains a 3, 2 ,or 1 and refactoring of last code//
    const substring = i.toString();
    if (substring.includes(3)){
      newArray.push(strA);
    }
    else if (substring.includes(2)){
      newArray.push(strB);
    }
    else if (substring.includes(1)){
      newArray.push(strC);
    }
    else{
      newArray.push(substring);
    }
    } 
  }

 //else if(newArray[i] === 1){
      //  If a user inputs a 5, the program should display a list of values: ""Beep!"", , Boop!, "Won't you be my neighbor?", 4, 5 as 3 is replaced with strC
     //newArray[i]=strC;
   // }
    // If a user inputs a 5, the program should display a list of values: "0", 1, Boop!, "Won't you be my neighbor?", 4, 5 as 3 is replaced with strB
    //else if(newArray[i] === 2){
     // newArray[i]=strB;
   // }
   //   If a user inputs a 5, the program should display a list of values: "0", 1, 2, "Won't you be my neighbor?", 4, 5 as 3 is replaced with strA
   // else if(newArray[i] === 3){
   //   newArray[i]=strA;
