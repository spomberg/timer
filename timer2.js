const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

const timer = () => {
  rl.question("Please input your command\n", (input) => {
    if (input === 'b') {
      process.stdout.write('\x07');
      timer();
    }else if (input >= 1 && input <= 9) {
      console.log(`Setting timer for ${input} second`);
      setTimeout(() => {
        process.stdout.write('\x07');
        timer();
      }, input * 1000);
    } else {
      console.log(`Invalid input`);
      timer();
    }
  });
};

timer();
rl.on('SIGINT', () => {
  console.log(`Thanks for using me, ciao!`);
  rl.close();
});