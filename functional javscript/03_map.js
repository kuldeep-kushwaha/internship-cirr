function doubleAll(numbers) {
    var result = []
    numbers.map((a)=>{ result.push(a * 2)});
    return result
  }
  
  module.exports = doubleAll
