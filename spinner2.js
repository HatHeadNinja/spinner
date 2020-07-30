const spinnerAngle = ['\r|   ', '\r/   ', '\r-   ','\r\\   '  ];
let timeOutInterval = 100;
const rotations = 10;
let animationDone = 0

for (let r = 0; r < rotations; r++) {
  for (let i = 0; i < spinnerAngle.length; i++) {
    const char = spinnerAngle[i];
    setTimeout(() => {
      process.stdout.write(char);
    }, timeOutInterval);
    timeOutInterval = timeOutInterval + 200;
  }
}
