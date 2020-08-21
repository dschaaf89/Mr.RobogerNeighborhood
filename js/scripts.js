function replace(number,person1){
  let num = parseInt(number);
  let strA = "Won't you be my neighbor,"+ person1 + "?";
  let strB = "Boop!";
  let strC= "Beep!";
  let strD= "Please help, the sith lords are attacking our planet. we need all the help we can get."
  let newArray=[];
  for(let i = 0; i <= num; i++){
    const substring = i.toString();
    if( substring.includes(9)){
      newArray.push(strD);
    }
    else if (substring.includes(3)){
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
    let strA = "Won't you be my neighbor,"+ person1 + "?";
    let strB = "Boop!";
    let strC= "Beep!";
    let strD= "Please help, the sith lords are attacking our planet. we need all the help we can get."
    let newArray=[];
    for(let i = num; i >= 0; i--){
      const substring = i.toString();
      if (substring.includes(8)){
        newArray.push(strD);
      }
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
    const operator = $("input:radio[name=operator]:checked").val();
    let result;
    if (operator === "forward") {
      result= replace(nums, person);
      $("#results").show();
    }
    else{
    result= reverseReplace(nums,person);
    $("#results").show();
  }

    $("#output").text(result);
    
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
