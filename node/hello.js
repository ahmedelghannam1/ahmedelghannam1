const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is your name? ', (answer) => {
      console.log(`Wlecome ${answer}`)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('what is your age ', (age) => {
        age=Number(age);
        if (age<16){
            console.log('You’re not allowed to drive in Iowa.');
       }
       else{
            console.log('You’re allowed to get a drivers license in Iowa.');
        }
     
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()
  rl.close()
}

main()