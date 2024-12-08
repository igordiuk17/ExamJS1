let users=fetch(' https://jsonplaceholder.typicode.com/users')

  .then(value => value.json())
  .then(users=>{
      for( const user of users){
          const userDiv = document.createElement('div');
          for (const userKey in user){
              const KeyDiv = document.createElement('div')
              KeyDiv.innerText = `${userKey}:${user[userKey] }  `
              userDiv.appendChild(KeyDiv);

          }
          document.body.appendChild(userDiv);
          let userButton =document.createElement('button')

          userButton.onclick=function (){

          };

          document.body.appendChild(userButton);
          let a = document.createElement('a');
          a.innerText = 'post of current user';
          a.href = " post-details.html" ;

          userButton.append(a);
      }


  })