function solve() {
    function binaryCalc(num) {
        let result = "";
        while (num > 0) {
           let currNum = num % 2;
           result = String(currNum) + result;
           num = Math.floor(num/2);
        }
        console.log(result);
        return result;
    }

    function hexaCalc(num) {
        let result = "";
        let hexaBigs = {"10": "A", "11": "B", "12": "C", "13": "D", "14": "E", "15": "F"};
        while (num > 0) {
           let currNum = num % 16;
           if (currNum > 9) {
               let convNum = hexaBigs[String(currNum)];
               result = convNum + result;
           } else {
               result = String(currNum) + result;
           }
           num = Math.floor(num/16);
        }
        console.log(result);
        return result;
    }

   let myNumber = Number(document.getElementById("input").value);
   let choice = document.querySelectorAll("select#selectMenuTo option");
   if (choice[1].selected) {
       binaryCalc(myNumber);
   } else if (choice[2].selected) {
       hexaCalc(myNumber);
   }

   let target = document.getElementById('result').value;
   target = result;

   document.getElementById("input").value = "";
}

   