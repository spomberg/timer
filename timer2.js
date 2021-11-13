const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const { time } = require('console');
const rl = readline.createInterface({ input, output });

const timer = () => {
  rl.question("Please enter your input\n", (input) => {
    if (input === 'b') {
      process.stdout.write('\x07');
      timer();
    }
    if (input >= 1 && input <= 9) {
      console.log(`Setting timer for ${input} seconds`);
      setTimeout(() => {
        process.stdout.write('\x07');
        timer();
      }, input * 1000);
    } else {
      console.log(`Invalid input`);
      timer();
    }
    rl.on('SIGINT', () => {
      console.log(`Thanks for using me, ciao!`);
      rl.close();
    });
  });
};

timer();