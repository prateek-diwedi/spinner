//process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   '); 
// }, 900);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r/  '); 
// }, 1100);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r-  '); 
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\  '); 
// }, 1500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|  '); 
// }, 1700);

// // ... fill in the rest yourself ...


const sentence = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|", "\n"];
const typewriter = (s) => {
  for (let i = 0; i < s.length; i++) {
    //process.stdout.write(char);
    setTimeout(() => {
      process.stdout.write("\r" + s[i] + '    '); // print the char here
    }, i * 150) // <= 1s delay to make it noticeable. Can dial it down later.
  }
}
typewriter(sentence);



/* second way


const sentence = '|/-\\'
const typewriter = (s) => {
  for (let i = 0; i < 20; i++) {
    //process.stdout.write(char);
    setTimeout(() => {
      process.stdout.write("\r" + s[i % s.length] + '    '); // print the char here
    }, i * 150) // <= 1s delay to make it noticeable. Can dial it down later.
  }
}
typewriter(sentence);*/