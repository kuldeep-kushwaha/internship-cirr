

//var goodUsers = [{ id: 1 },{ id: 2 },{ id: 3 }]

//testAllValid([{ id: 2 },{ id: 1 }])


function checkUsersValid(goodUsers) {
  
  return function allUsersValid(submittedUsers) {
    var exist;
    var res=0;
        goodUsers.map(function(a){
          exist=false;
              submittedUsers.map(function(b){
                (a['id']==b['id'])?(exist=true):(exist=false);
                (exist)?(res++,exist=false):(0);
            }); 
        });   

        return (res==submittedUsers.length)?true:false;
  };
}

//var testAllValid = checkUsersValid(goodUsers)

//console.log(testAllValid([{ id: 4 },{ id: 3 }]));
module.exports = checkUsersValid

