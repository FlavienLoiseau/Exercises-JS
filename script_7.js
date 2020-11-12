function isQuestion(message) {
  if (message.slice(-1) === "?") {
    return true
  } else {
    return false
  }
}

function isUpperCase(message) {
  let withoutSpaces = message.replace(/ /g,'');
  if (withoutSpaces === withoutSpaces.toUpperCase()) {
    return true
  } else {
    return false
  }
}

function isFortnite(message) {
  if (message.includes("Fortnite")) {
    return true
  } else {
    return false
  }
}

function isEmpty(message) {
  if (message === "") {
    return true;
  } else {
    return false;
  }
}

function chatBot(message) {
  if (isQuestion(message)) {
    console.log("Ouais Ouais...");
  } else if (isEmpty(message)) {
    console.log("t'es en PLS ?");
  } else if (isUpperCase(message)) {
    console.log("Pwa, calme-toi...");
  } else if (isFortnite(message)) {
    console.log("on s' fait une partie soum-soum ?");
  } else {
    console.log("balek.");
  }
}

{
  let message = ""
  while (true) {
    message = prompt("Que veux-tu raconter à cet ado de bot ?");
    chatBot(message);
  }
}