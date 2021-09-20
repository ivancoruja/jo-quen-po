function setGame() {
  let nmatches = +prompt("Quantas rodadas você quer jogar?");
  while (nmatches == '' || isNaN(nmatches)) {
    alert("Digite apenas números!");
    nmatches = prompt("Quantas rodadas você quer jogar?");
  }
  window.listmatches = [];
  for (var match = 1; match < nmatches+1; match++) {
    listmatches.push([match,0,0]);
  }
  return listmatches;
}

function playerChoice(pbutton) {
  window.pchoice;
  if (pbutton == 1) {
    pchoice = 1;
  }
  else if (pbutton == 2) {
    pchoice = 2;
  }
  else {
    pchoice = 3;
  }
  return pchoice;
}

function playGame() {
  for (let match in listmatches) {
    document.getElementById("matches").innerHTML = listmatches[match][0];
    listmatches[match][1] = pchoice;
    listmatches[match][2] = Math.floor(Math.random() * 3) + 1;
  }
  for (let match of listmatches) {
    console.log(match);
  }
}