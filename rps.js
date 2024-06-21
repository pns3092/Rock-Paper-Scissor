let userscore=0;
let compscore=0;

//Acess Choices 

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const genCompChoice = () => { //Genrated Computer Choice using Math.random() function
    //rock .paper.scissor  random genreration
    const options =["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];


};

const drawGame =() =>{ //Draw condition FUnction 
       // console.log("Game was draw");
        msg.innerText = "Game was Draw.Play Again";
        msg.style.backgroundColor = "blue";
};

const shoWinner =(userWin,userChoice,CompChoice)=>{ //Conditions for winning 
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        //console.log("You win");
        msg.innerText = `You win!! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
       // console.log("You lose");
        msg.innerText = `You lose!! ${CompChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}


const playgame = (userChoice)=>{
    //console.log("User choice = ",userChoice)

    //Genrate Computer Choice
    const CompChoice = genCompChoice();
    //console.log("Comp choice = ",CompChoice);


    if(userChoice==CompChoice)
    {
        drawGame();
        //Draw Condition 
    }
    else{
        let userWin = true;
        if(userChoice=="rock"){
            //scissor,paper
            userWin=CompChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            //rock,scissor
            userWin=CompChoice=="scissor"?false:true;
        }
        else {
            //rock,paper
            userWin=CompChoice=="rock"?false:true;

        }
        shoWinner(userWin,userChoice,CompChoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
       // console.log("Choice was clicked",userChoice);
        playgame(userChoice);

    });
});