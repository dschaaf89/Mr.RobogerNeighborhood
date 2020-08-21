function replace(x){
  let num = parseInt(x);
  let strA = "Won't you be my neighbor?";
  let strB = "Boop!";
  let strC= "Beep!";
  let newArray=[];
  
  for(let i = 0; i <= num; i++){
    newArray.push(i);
    if(newArray[i] === 3){
      newArray[i]=strA;
    }
   }
  console.log(newArray);
}