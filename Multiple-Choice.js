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
let currentanswer=''
const randomquestion=()=>{
    randomIndex=Math.floor(Math.random()*questions.length);
    currentquestion=questions[randomIndex].question;
    currentanswer=questions[randomIndex].correctanswer
}
randomquestion();
console.log(currentquestion);
//function for scoring
let score=0;
const scoredmarks=(answer)=>{
    if(answer===currentanswer){
        console.log('correct!');
        score+=2;
        
    }
    else{
        console.log('incorrect!')
        score=score;
    }
}
scoredmarks();
console.log(`you scored: ${score} marks`);



    


