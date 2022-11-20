//Create Snake, Water & Gun game in JavaScript.
//The game should ask you to enter S W or G. The computer should be able to randomly generate S, W, OR G and declare win or loss using alert.
//Use alert, prompt and confirm wherever required

let user = prompt("Enter S, P or R");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "P", "R"][cpuI];

const match = (cpu, user) => {
  if (cpu === user) {
    return "The match is tied.";
  } else if (cpu === "S" && user === "P") {
    return "cpu";
  } else if (cpu === "S" && user === "R") {
    return "user";
  } else if (cpu === "P" && user === "R") {
    return "cpu";
  } else if (cpu === "P" && user === "S") {
    return "user";
  } else if (cpu === "R" && user === "S") {
    return "cpu";
  } else if (cpu === "R" && user === "P") {
    return "user";
  }
};
let result = match(cpu, user);
document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result}`);
