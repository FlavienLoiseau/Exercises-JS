let answer = "";
answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
answer = Number(answer);

function pyramid(height) {
  for(let line = 1; line <= height; line++){
    let string = "";
    for(let spaces = 0; spaces <= height - line - 1; spaces++){
      string = string + " ";
    }
    for(let blocks = 0; blocks <= line - 1; blocks++){
      string = string + "#";
    }
    console.log(string)
  }
}

pyramid(answer);