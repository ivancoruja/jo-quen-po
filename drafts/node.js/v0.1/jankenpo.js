function setGame() {
  let nmatches = +prompt("Quantas rodadas você quer jogar?");
  while (nmatches == '' || isNaN(nmatches)) {
    alert("Digite apenas números!");
    nmatches = prompt("Quantas rodadas você quer jogar?");
  }
  document.getElementById("matches").innerHTML = nmatches;
  window.listmatches = [];
  for (var match = 1; match < nmatches+1; match++) {
    listmatches.push([match,0,0]);
  }
  return listmatches;
}

function playerChoice(pbutton) {
  let pchoice;
  if (pbutton == 1) {
    pchoice = 1;
  }
  else if (pbutton == 2) {
    pchoice = 2;
  }
  else {
    pchoice = 3;
  }
  for (let match in listmatches) {
    listmatches[match][1] = pchoice;
  }
  return listmatches;
}

function computerChoice() {
  for (let match in listmatches) {
    let cchoice = Math.floor(Math.random() * 3) + 1;
    listmatches[match][2] = cchoice;
  }
  console.log(listmatches);
}

function playGame() {
  setGame();
}