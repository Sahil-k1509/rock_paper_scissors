// Catching the dump
let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const result_div_head = document.querySelector('.result > h4');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const last_img_usr_div = document.getElementById('last-choice-user');
const last_img_comp_div = document.getElementById('last-choice-comp');

function getCompInput(){
        const choices = ['r', 'p', 's'];
        const choice = Math.floor(Math.random()*3);
        return choices[choice];
}

function convertToWord(shortHand){
        switch (shortHand){
                case 'r':
                        return 'rock';
                        break;
                case 's':
                        return 'scissors';
                        break;
                case 'p':
                        return 'paper';
                        break;
                default:
                        return 'Invalid';
        }
}

function user_win(user, comp){
        userScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = computerScore;
        let comp_small = 'Comp'.sub().fontsize(3);
        let user_small = 'User'.sub().fontsize(3);
        let string = `${convertToWord(user)}${user_small} - ${convertToWord(comp)}${comp_small}`;
        result_div.innerHTML = string;
        result_div_head.innerHTML = 'You won! Hurray!!!  :-)';
        document.getElementById(user).classList.add('green-glow');
        setTimeout(function(){ document.getElementById(user).classList.remove('green-glow') }, 300 );
}

function user_lose(user, comp){
        computerScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = computerScore;
        let comp_small = 'Comp'.sub().fontsize(3);
        let user_small = 'User'.sub().fontsize(3);
        let string = `${convertToWord(user)}${user_small} - ${convertToWord(comp)}${comp_small}`;
        result_div.innerHTML = string;
        result_div_head.innerHTML = 'You lost! Hard luck! :-(';
        document.getElementById(user).classList.add('red-glow');
        setTimeout(function(){ document.getElementById(user).classList.remove('red-glow') }, 300 );
}

function user_draw(user, comp){
        let comp_small = 'Comp'.sub().fontsize(3);
        let user_small = 'User'.sub().fontsize(3);
        let string = `${convertToWord(user)}${user_small} - ${convertToWord(comp)}${comp_small}`;
        result_div.innerHTML = string;
        result_div_head.innerHTML = 'Game drawn!';
        document.getElementById(user).classList.add('grey-glow');
        setTimeout(function(){ document.getElementById(user).classList.remove('grey-glow') }, 300 );
}

function render_image(user_input, move){

        
}


function game(user_input){
        // Game functionality. compare to computer
        const comp_choice = getCompInput();
        //console.log('User: '+user_input, '\nComputer: '+comp_choice);
        switch (user_input + comp_choice){
                case 'rs':
                case 'pr':
                case 'sp':
                        console.log('User wins');
                        user_win(user_input, comp_choice);
                        break;
                case 'sr':
                case 'ps':
                case 'rp':
                        console.log('User loses');
                        user_lose(user_input, comp_choice);
                        break;
                default:
                        console.log('Game drawn');
                        user_draw(user_input, comp_choice);
                        break;
        }
        var img =  document.createElement("img");
        var img2 = document.createElement('img');
        switch (user_input){
                case 'r':
                        img.src = './rock.png' ;
                        break;
                case 'p':
                        img.src = './paper.png';
                        break;
                case 's':
                        img.src = './scissors.png';
                        break;
        }
        switch (comp_choice){
                case 'r':
                        img2.src = './rock.png' ;
                        break;
                case 'p':
                        img2.src = './paper.png';
                        break;
                case 's':
                        img2.src = './scissors.png';
                        break;
        }

        last_img_usr_div.innerHTML='<img src="'+img.src+'" />';
        last_img_comp_div.innerHTML='<img src="'+img2.src+'" />';
}

function main(){
        rock_div.addEventListener('click', function(){
                // rock functionality
                console.log("Rock hit");
                game("r");
        })

        paper_div.addEventListener('click', function(){
                // paper functionality
                console.log("Paper hit");
                game("p");
        })

        scissors_div.addEventListener('click', function(){
                // scissors functionality
                console.log("Scissors hit");
                game("s");
        })
}

main();