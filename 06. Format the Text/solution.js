function solve() {
  let myText = document.getElementById('input').value;
  let sents = myText.split(". ").filter(s => s !== '');
  let target = document.getElementById("output");
  let len = sents.length;
  let i = 0;
  while (i < len) {
      if (len - i > 3) {
          let currPar = "";
          currPar += sents[i] + ". " + sents[i+1] + ". " + sents[i+2];
          if (currPar[currPar.length -1] !== ".") {
              currPar += ".";
          }
          let paragraph = document.createElement("p");
          paragraph.textContent = currPar;
          target.appendChild(paragraph);
          i += 2;
      } else {
          let currPar = [];
          for (let k = i; k < len; k ++) {
              currPar.push(sents[k]);
              i ++;
          }
          let newPar = currPar.join(". ");
          if (newPar[newPar.length -1] !== ".") {
              newPar += ".";
          }
          let paragraph = document.createElement("p");
          paragraph.textContent = newPar;
          target.appendChild(paragraph);

      }
      i ++;
  }
}