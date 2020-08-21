function replace(x){
  let num = parseInt(x);
  let strA = "Won't you be my neighbor?";
  let strB = "Boop!";
  let strC= "Beep!";
  let newArray=[];
 
  for(let i = 0; i <= num; i++){
    newArray.push(i);
    if(newArray[i] === 1){
      //  If a user inputs a 5, the program should display a list of values: ""Beep!"", , Boop!, "Won't you be my neighbor?", 4, 5 as 3 is replaced with strC//
      newArray[i]=strC;
    }
    //  If a user inputs a 5, the program should display a list of values: "0", 1, Boop!, "Won't you be my neighbor?", 4, 5 as 3 is replaced with strB//
    else if(newArray[i] === 2){
      newArray[i]=strB;
    }
    //  If a user inputs a 5, the program should display a list of values: "0", 1, 2, "Won't you be my neighbor?", 4, 5 as 3 is replaced with strA//
    else if(newArray[i] === 3){
      newArray[i]=strA;
    }
  }
  console.log(newArray);
}