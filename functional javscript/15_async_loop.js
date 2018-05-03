    function loadUsers(userIds, load, done) {
      var users = []
      console.log(load.toString())
      for (var id = 0; id < userIds.length; id++) {
        load(id,function(us){
            users[id]=us;
        })
      }
      return users
    }    
    module.exports = loadUsers




//     function loadUsers(userIds, load, done) {
//         var completed = 0
//         var users = []
//         userIds.forEach(function(id, index) {
         
//           load(id, function(user) {
//             users[index] = user
//             if (++completed === userIds.length) return done(users)
//           })
        
      
//       })
     
//   }
      
//       module.exports = loadUsers

