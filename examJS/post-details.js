let posts=fetch(' https://jsonplaceholder.typicode.com/users/USER_ID/posts')
    .then(value => value.json())
    .then(posts=>{
        for( const user of posts){
            const userDiv = document.createElement('div');
            for (const postKey in posts){
                const postKeyDiv = document.createElement('div')
                postKeyDiv.innerText = `${postKey}:${posts[postKey] }  `
                userDiv.appendChild(postKeyDiv);
            }

            document.body.append(userDiv);
            let userButton =document.createElement('button')

            userButton.onclick=function (){

            };

            document.body.appendChild(userButton);
            let a = document.createElement('a');
            a.innerText = 'post of current user';
            a.href = " post of current user.html" ;

            userButton.append(a);
        }


    })