const chalk=require('chalk');
const readLineSync=require('readline-sync');

  const quiz=[
    {
      questions : ' Who is the First president of INDIA?\n',
      a:'Rajendra Prasad',
      b: 'Pratibha Patil',
      c: 'Vallabhbhai Patel',
      d: 'Neelam Sanjiva Reddy',
      ans:'a'
    },
    {
      questions : '  Who is the First Prime Minister of INDIA?\n',
      a:'Mahatma Gandhi',
      b:'Zakir Hussain',
      c:'Lal Bahadur Shastri',
      d:'Jawaharlal Nehru',
      ans:'d'
    },
    {
      questions : ' Author of \" AUTHOR OF Naa Jeevana Gamanam\"?\n',
      a:'Mahatma Gandhi',
      b:'K.R.Narayan',
      c:'A.P.J.Abdul Kalam',
      d:'Jawaharlal Nehru',
      ans:'c'
     
    },
    {
       questions : 'How many Union Territory are there for India?\n',
       a:'4',  
       b:'5', 
       c:'7',
       d:'8',
       ans:'d'
    },
    {
      
      questions : 'Maximum number of seats in RajyaSabha?\n',
      a:'125',
      b:'250',
      c:'225',
      d:'300',
      ans:'b'
    }
];
function tip(correct)
{
   console.log(chalk.red.bold('\nTip for our side: '));
  if(correct>=4)
    console.log(chalk.yellow.bold('Awesome!!! keep continue in this way'));
  else if(correct>=3)
    console.log(chalk.yellow.bold('Good, Try to give some more time for Books and News papers'));
  else if(correct<3 && correct>=0)
    console.log(chalk.yellow.bold('GK is important in Life,Try to be update with it'));
}
function mainFunction()
{
  let correct=0;
  let next=check();
  if(next==='yes')
  {
  console.log(chalk.red.bold('\nChoose options only [a] or [b] or [c] or [d] \n'));
  for(let i=0;i<quiz.length;i++)
  {
  console.log(chalk.yellow.bold(`Q.${i+1})${quiz[i].questions}`));
  console.log(chalk.red.bold('Options:\n'));
  console.log(chalk.red.bold(`a)${quiz[i].a}\nb)${quiz[i].b}\nc)${quiz[i].c}\nd)${quiz[i].d}\n\n`));
  
  let sol=readLineSync.question(chalk.yellow.bold('Enter your answer: ')).toLowerCase();
  //console.log(sol=="a");
  /*while(Number.isInteger(sol) || sol!=='a' || sol!=='b'||sol!=='c' ||sol!=='d')
  {
    sol=readLineSync.question(chalk.yellow.bold('CHoose options only [a],[b],[c],[d] : '));
  }*/

  if(sol==quiz[i].ans)
  {
    correct++;
    console.log(chalk.red.bold('yes, \'Your answer is correct\'\n\n'));
  }
  else
  {
    console.log(chalk.yellow.bold('\nWRONG Answer\n'));
    console.log(chalk.red.bold(`The Correct Answer is : ${quiz[i].ans}\n`));
  }
  }
  return [correct,next];
  }
  
  return [undefined,undefined];
}
function display(correct,name)
{
   console.log(chalk.yellow.bold('\n---------------------------------'));
   console.log(chalk.yellow.bold(`${name}, your score is ${correct}`));
   console.log(chalk.yellow.bold('---------------------------------\n'));
}
const welcomeName=()=>
{
console.clear();
console.log(chalk.yellow.bold('          welcome to General Knowloege Quiz:    '));
console.log(chalk.yellow.bold('          ==================================    '));

const name=readLineSync.question(chalk.red.bold('\n\nEnter your Name: '));
console.log(chalk.yellow.bold('\nInstructions:'));
console.log(chalk.yellow.bold('There will a four [a],[b],[c],[d]/n/n choose only one option from these from options otherwise it will consider as wrong answer and moves to other question'));
console.log(chalk.yellow.bold('\nIf answer is correct you will be awarded as 1 point'));
return name;
}

const check=()=>{
  const bool= readLineSync.question(chalk.red.bold('Do you want to Test your GK Knowledge?(yes or no): '));

  return bool;
}

const name=welcomeName();

console.log(chalk.yellow.bold(`\n\nHi, ${name}`));

let output=mainFunction();
//console.log(output[0]+" "+output[1]);
if(output[0]!==undefined && output[1]!==undefined)
{
  display(output[0],output[1]);
  tip(output[0]);

}
else
{
   console.log(chalk.yellow.bold(`${name}, Thanks for visiting our page`));
}








