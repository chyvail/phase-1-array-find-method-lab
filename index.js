// code your solution here

const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

const isWinner = (obj) => {
  if (obj.result === "W") {
    let year = obj.year;
    return year;
  }
};

const superbowlWin = (obj) => {
  let winner = obj.find(isWinner);
  if (winner) {
    return winner.year;
  }
};

console.log(superbowlWin(record));

/* const superbowlWin = (obj) => {
  let winner = obj.find((winner) => winner.result === "W");
  if (winner) {
    return winner.year;
  }
};

superbowlWin(record);
 */
