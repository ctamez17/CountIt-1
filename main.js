
let input = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";

input = input = input.toLowerCase().match(/[a-z]/g).sort();

  const countIt = (str) => {
  let storage = {}
  let count = 0;
  let maxChar = "";
  str.forEach(letter => {

    if(storage[letter]){
        storage[letter]++;
      }else if(storage[letter[""]]){
        storage[letter] = 0;
      }else{
        storage[letter] = 1;
      }
    })
finalCount = '';
for (let items in storage){
  finalCount += items + ':' + storage[items] + ' ';
}
return finalCount
}
countIt(input);



// const countIt = (str) => {
//     let stringOfWords = document.getElementById("dataType").value;
//     stringOfWords.toLowerCase().replace(/[\.\s]/g, '');
//     const storage = {}
//     stringOfWords.split("").forEach(letter => {
//       if(storage[letter]) {
//         document.getElementById("dataShow").innerHTML = storage[letter]++;
//       }
//        else if(storage[letter[""]]){
//         document.getElementById("dataShow").innerHTML = storage[letter] = 0;
//       }else{
//         document.getElementById("dataShow").innerHTML = storage[letter] = 1;
//       }
//     })
//     return document.getElementById("dataShow").innerHTML = storage;
//   }
//   countIt();
//   //{d:1 e:1 h:1 l:3 o:2 r:1 w:1}
  
//   countIt("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.");
  
  /*
  1. In HTML - Create UI
  2. Create form
  3. Create input inside form - "str" for countIt will be value of input
  4. Create submit button, add event listener, on-click at event listener
  5. Gon' want seperate div to display result
  6. Create "on submit" function - Call the countIt function
  */
//   const stringToNum = () => {
//     let str = document.getElementById("stringNum").value
//     stringToNumber = parseInt(str);
//     document.getElementById("numberShow").innerHTML = stringToNumber;
//     console.log(typeof(stringToNumber));
//   }
  
  
  //{d:1 e:1 h:1 l:3 o:2 r:1 w:1}
  
//   countIt("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.");
  
  /*
  1. In HTML - Create UI
  2. Create form
  3. Create input inside form - "str" for countIt will be value of input
  4. Create submit button, add event listener, on-click at event listener
  5. Gon' want seperate div to display result
  6. Create "on submit" function - Call the countIt function
  */