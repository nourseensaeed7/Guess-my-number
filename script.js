let number = Math.trunc(Math.random() * 20) + 1;
// +1  because trunc will cut the decimal number at 19.9999 to be 19 so the 20 will not be in the interval
let score = 20;
// state variable
let highscore=0
const displaymessage=(message)=>{
    document.querySelector(".message").textContent=message;
}
document.querySelector(".check").addEventListener("click", function (){
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);
    // no input
    if (!guess) {
                // document.querySelector(".message").textContent = "no Number!";
                displaymessage('no Number!');
    // when player wins
    } else if (guess === number) {
                // document.querySelector(".message").textContent = "Correct guess!";
                displaymessage('correct guess!');
                document.querySelector(".number").textContent = number;
                document.querySelector("body").style.backgroundColor = "#60b347";
                document.querySelector(".number").style.width = "30rem";
                if(score>highscore){
                    highscore=score;
                    document.querySelector('.highscore').textContent=highscore;
                }
    // when guess is wrong
    }else if(guess!==number){
        if (score > 1) {
            // ternary operator
                // document.querySelector(".message").textContent = guess>number ? "TOO high!":"TOO low!"
                displaymessage(guess>number ? "TOO high!":"TOO low!")
                score--;
                document.querySelector(".score").textContent = score;
                } else {
                // document.querySelector(".message").textContent = "you lost the game";
                displaymessage('You lost the game :(')
                document.querySelector(".score").textContent = 0;
                }
    }
})
// anonymous function does not has a name
document.querySelector('.again').addEventListener("click",function(){
    document.querySelector(".number").textContent='?';
    score=20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent=score;
    document.querySelector(".guess").value=''; //empty value
    // document.querySelector('.message').textContent='Start guessing...';
    displaymessage('Start Guessing...')
    document.querySelector('body').style.backgroundColor='black'
    document.querySelector('body').style.widtht='15rem'
});
// refactoring is to apply the do not repeat yourself principle (DRY ) so in the next code the high and low number is the same code but wth different condtions
// guess is high
//  else if (guess > number) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "TOO high!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "you lost the game";
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess < number) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "TOO low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     }
//   } else {
//     document.querySelector(".message").textContent = "you lost the game";
//     document.querySelector(".score").textContent = 0;
//   }
// }); 
