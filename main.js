//
const countIt = (str) => {
    str = str.toLowerCase().replace(/[\.\s]/g, '');
    const storage = {}
    str.split("").forEach(letter => {
      if(storage[letter]){
        storage[letter]++;
      }else if(storage[letter[""]]){
        storage[letter] = 0;
      }else{
        storage[letter] = 1;
      }
    })
    return storage;
    console.log(str);
  }
  
  //{d:1 e:1 h:1 l:3 o:2 r:1 w:1}
  
  countIt("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.");
  
  /*
  1. In HTML - Create UI
  2. Create form
  3. Create input inside form - "str" for countIt will be value of input
  4. Create submit button, add event listener, on-click at event listener
  5. Gon' want seperate div to display result
  6. Create "on submit" function - Call the countIt function
  */