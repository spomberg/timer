const input = process.argv.slice(2);

for (let seconds of input) {
  if (seconds > -1) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
}