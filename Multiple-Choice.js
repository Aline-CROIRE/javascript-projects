var questions=[
    {
        question: 'What is capital city of Rwanda?',
        answers: ['paris','NYC','Kigali'],
        correctanswer: 'Kigali'
    },
    {
        question: 'Who is presedint of Rwanda',
        answers: ['Charis','peter','KAGAME Paul'],
        correctanswer: 'KAGAME Paul'
    },
    {
        question: 'How many Provinces Rwanda has?',
        answers: [2,3,4,5],
        correctanswer: 5
    },
]

//Function to display a random quiz question and answer
let currentquestion='';
let currentanswer='';
let remainigquestion=[...questions];
const randomquestion=()=>{
    randomIndex=Math.floor(Math.random()*questions.length);
    currentquestion=questions[randomIndex].question;
    currentanswer=questions[randomIndex].correctanswer;
    remainigquestion.splice(randomIndex, 1);
}
randomquestion();
//Displaying the Question
console.log(`The question is: ${currentquestion}`);
console.log(`choose the right answer in the following ${questions[randomIndex].answers}`);
//function for scoring
let score=0;
const scoredmarks=(answer)=>{
    console.log(`You answered: "${answer}"`)
    if(answer===currentanswer){
        console.log('correct! You did it!!' );
        score+=2;
       
    }
    else{
        console.log(`Incorrect! the correct answer is: " ${currentanswer}"`);
        score=score;
    }
    console.log(`you scored: ${score} marks`);
    randomquestion();
}
scoredmarks('Peter');



    



