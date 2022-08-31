let userName = '';
let promptIndex = 0;
let numberOfHoles = 6;
let scoreHole1;
let scoreHole2;
let scoreHole3;
let scoreHole4;
let scoreHole5;
let scoreHole6;
let totalPar;


var userPrompts = document.getElementById('user-prompts');
var userInput = document.getElementById('user-input');
document.getElementById('user-input').addEventListener("keypress", function handleClick(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        onSubmit();
    }
})
document.getElementById('submit-btn').addEventListener("click", onSubmit);

userPrompts.innerText = 'Welcome to GC mini golf! What is your name?';

function onSubmit() {

    if (promptIndex === 0) {
        userName = userInput.value;
    }

    if (promptIndex === 1) {
        numberOfHoles = Number(userInput.value);
    }

    if (promptIndex === 2) {
        scoreHole1 =  Number(userInput.value);
    }

    if (promptIndex === 3) {
        scoreHole2 =  Number(userInput.value);
    }

    if (promptIndex === 4) {
        scoreHole3 =  Number(userInput.value);
        if (numberOfHoles === 3) {
            promptIndex = 7;
        }
    }

    if (promptIndex === 5) {
        scoreHole4 =  Number(userInput.value);
    }

    if (promptIndex === 6) {
        scoreHole5 =  Number(userInput.value);
    }

    if (promptIndex === 7) {
        scoreHole6 =  Number(userInput.value);
        if (numberOfHoles === 3) {
            const userScore =
                scoreHole1 +
                scoreHole2 +
                scoreHole3;
            totalPar = (userScore - 9).toString();
            if (totalPar < 0) {
                console.log('Great job, '+ userName+ '! Your total par was: '+ totalPar+'.');
            } else if (totalPar > 0) {
                console.log('Nice try, '+ userName+ '! Your total par was: '+ totalPar+'.');
            } else {
                console.log('Good game, '+ userName+ '! Your total par was: 0.');
            }
        } else {
            const userScore =
                scoreHole1 +
                scoreHole2 +
                scoreHole3 +
                scoreHole4 +
                scoreHole5 +
                scoreHole6;
            totalPar = (userScore - 18).toString();
            if (totalPar < 0) {
                console.log('Great job, '+ userName+ '! Your total par was: '+ totalPar+'.');
            } else if (totalPar > 0) {
                console.log('Nice try, '+ userName+ '! Your total par was: '+ totalPar+'.');
            } else {
                console.log('Good game, '+ userName+ '! Your total par was: 0.');
            }
        }

    }

    const prompts = [
        `Hi, ${userName}! Would you like to play 3 or 6 holes?`,
        'How many putts for hole 1? (par: 3)',
        'How many putts for hole 2? (par: 3)',
        'How many putts for hole 3? (par: 3)',
        'How many putts for hole 4? (par: 3)',
        'How many putts for hole 5? (par: 3)',
        'How many putts for hole 6? (par: 3)',
        ''
    ];

    userInput.value = '';
    userPrompts.innerText = prompts[promptIndex];
    promptIndex += 1;

}