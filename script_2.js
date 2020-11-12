let answer = "";
answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
answer = Number(answer);

function factorialize(number) {
  let result = number;
  if (number === 0 || number === 1) 
    return 1; 
  while (number > 1) { 
    number--;
    result *= number;
  }
  return result;
}

console.log("Le résultat est : " + factorialize(answer));