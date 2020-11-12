function getAcid(codon) {
  const serine = ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"];
  const proline = ["CCU", "CCC", "CCA", "CCG"];
  const leucine = ["UUA", "UUG"];
  const phenylalanine = ["UUU", "UUC"];
  const arginine = ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"];
  const tyrosine = ["UAU", "UAC"];

  if (serine.includes(codon)) {
    return "Sérine"
  } else if (proline.includes(codon)) {
    return "Proline"
  } else if (leucine.includes(codon)) {
    return "Leucine"
  } else if (phenylalanine.includes(codon)) {
    return "Phénylalanine"
  } else if (arginine.includes(codon)) {
    return "Arginine"
  } else if (tyrosine.includes(codon)) {
    return "Tyrosinesine"
  } else {
    return "-_-"
  }
}

function getCodonArray(arnArray) {
  let codonArray = [];
  codonArray = arnArray.match(/.{1,3}/g);
  return codonArray
}

function getProteinArray(codonArray) {
  let acidArray = [];
  codonArray.forEach(codon => {acidArray.push(getAcid(codon))});
  proteinArray = acidArray.join("-");
  return proteinArray
}

var myArnArray = [];
var myCodonArray = [];

myArnArray = prompt("Quel ARN veux-tu transcrire en protéine ?");
console.log(`ARN : ${myArnArray}`);
myCodonArray = getCodonArray(myArnArray);
console.log(`=> Protéine : ${getProteinArray(myCodonArray)}`)