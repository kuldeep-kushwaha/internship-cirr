


    function countWords(inputWords) {
        var ob={};   
        inputWords.reduce(function(acc,curr){
            (curr in ob)?( ob[curr]++):(ob[curr]=1);
        },0);
     return ob;
    }
      
      module.exports = countWords
  

  //  var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

      
   // countWords(inputWords);