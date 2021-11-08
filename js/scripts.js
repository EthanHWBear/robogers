// BUSINESS LOGIC TAKE 2

const  beepBoop =(inputtedNumber) => {
const userArray = [];
  for (let index=1; index <=inputtedNumber; index +=1) {
    if (index.toString().includes("3")) {
    userArray.push("Won't you be my neighbor?");
    } else if (index.toString().includes("2")) {
    userArray.push("Boop!");
    } else if (index.toString().includes("1")) {
      userArray.push("Beep!");
    } else  {
    userArray.push(index);
    }
    
  }
  return userArray
}

// USER-INTERFACE LOGIC

$(document).ready(function() {
  $("form#entryForm").submit(function(event) {
    event.preventDefault();

    const formInput = parseInt($("#numInput").val())
    const output = beepBoop(formInput);
    $("#result").html(output);
    $("#result").show();
  })});