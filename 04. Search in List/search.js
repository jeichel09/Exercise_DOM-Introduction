function search() {
   let target = document.getElementById('searchText').value;
   let townList = document.querySelectorAll("ul#towns li");
   let towns = [];

   for (let i = 0; i < townList.length; i ++) {
       towns.push(townList[i].textContent);
   }

   let counter = 0;
   for (let j = 0; j < towns.length; j++) {
       if (towns[j].includes(target)) {
           counter ++;
           townList[j].style.textDecoration = "underline";
           townList[j].style.fontWeight = "bold";
       }
   }
   document.getElementById('result').textContent = `${counter} matches found`;
}
