
var input = require('readline-sync');

var ans = input.question('what is your name?');

console.log("WELCOME TO RICK & MORTY QUIZ!");
var arr=[
question1 = {
  ques: "What is the president's name?",
  ans: "curtis"
}
,
question2 = {
  ques: "What is Rick's wife name?",
  ans: "Diane"
}
,
question3 = {
  ques: "What is the meaning of 'waba laba dub dub'?",
  ans: "I am in great pain"
}
]
var score=0;
function quiz(question,answer){
  var ans1=input.question(question);
  if(ans1===answer){
    console.log("you are right!!🎉 ");
    score++;
  }else{
    console.log("you are wrong. 🙁");
  }
}

for(var i=0;i<arr.length;i++){
quiz(arr[i].ques,arr[i].ans);
console.log("Your current Score is:",score,"\n");
}
console.log("Your Total Score is:",score);