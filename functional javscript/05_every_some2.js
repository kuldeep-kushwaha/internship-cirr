

//var goodUsers = [{ id: 1 },{ id: 2 },{ id: 3 }]

//testAllValid([{ id: 2 },{ id: 1 }])

function checkUsersValid(goodUsers) {
  
    return function allUsersValid(submittedUsers) {
       //console.log(goodUsers)
      //  console.log(submittedUsers)
     return submittedUsers.every((s)=>{
       return goodUsers.some((g)=>{
         return s.id==g.id;
       });
     });
      
    };
  }
 
  //var testAllValid = checkUsersValid(goodUsers)
  module.exports = checkUsersValid