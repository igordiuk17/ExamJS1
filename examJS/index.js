let users=fetch(' https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users=> {
    for ( const user of users) {
        let userInfoDiv=document.createElement('div');
        let h2=document.createElement('h2');
        h2.innerText = user.id;
        let p=document.createElement('p');
        p.innerText = user.name;
        userInfoDiv.append(h2,p);
        document.body.appendChild(userInfoDiv);
        let userButton =document.createElement('button')

        userButton.onclick=function (){

        };

        document.body.appendChild(userButton);
        let a = document.createElement('a');
            a.innerText = user.name + user.id;
            a.href = "user-details.html" ;

        userButton.append(a);


    }

})

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//
//         for (const post of value) {
//             let a = document.createElement('a');
//             a.innerText = 'show post ' + post.id;
//             a.href = 'details.html?data=' + JSON.stringify(post);
//             a.style.display = 'block';
//             document.body.appendChild(a);
//
//         }

// typicode