const countIt = () => {
    let input = document.getElementById("input").value;
    input = input.toLowerCase().match(/[a-z]/g).sort();
    let storage = {}
   
    input.forEach(letter => {
        
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
  document.getElementById("final").innerHTML = finalCount;
  document.getElementById("converted").value = input;
  document.getElementById("input").value = "";
}
  