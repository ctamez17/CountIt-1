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
      finialCount = '';
  for (let items in storage){
    finialCount += items + ':' + storage[items] + ' ';
  }
  document.getElementById("finial").innerHTML = finialCount;
  document.getElementById("input").value = "";
  }
  