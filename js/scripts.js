function replace(number,person1){
  let num = parseInt(number);
  let strA = "Won't you be my neighbor, "+ person1 + "!!!";
  let strB = "Boop!";
  let strC= "Beep!";
  let newArray=[];
  for(let i = 0; i <= num; i++){
 
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
    return newArray;
  }
  function reverseReplace(number,person1){
    let num = parseInt(number);
    let strA = "Won't you be my neighbor, "+ person1 + "!!!";
    let strB = "Boop!";
    let strC= "Beep!";
    let newArray=[];
    for(let i = num; i >= 0; i--){
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
      return newArray;
    }
  

  $(document).ready(function() {
    $("form#numbers").submit(function(event) {
    event.preventDefault();
    let nums = $("#number").val(); 
    const person = $("#person").val();
    let result = replace(nums,person);
    $("#output").text(result);
  });
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    let nums = $("#number").val(); 
    const person = $("#person").val();
    let results = reverseReplace(nums,person);
    $("#output").text(results);
    });
  });















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
