const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const header = {
    'Content-type': 'application/json; charset=UTF-8',
}

const getBtn = document.querySelector('#get');
const postBtn = document.querySelector('#post');
const patchBtn = document.querySelector('#patch');
const deleteBtn = document.querySelector('#delete');

getBtn.addEventListener('click', getPosts)
postBtn.addEventListener('click', postPost)
patchBtn.addEventListener('click', patchTitle)
deleteBtn.addEventListener('click', deletePost)



async function getPosts(){
    const response = await fetch(baseUrl);
    const posts = await response.json();

    console.log(posts);
}

async function postPost(){

    const newPost = {
        title: 'Best Movie',
        body: 'Titanic',
        userid: 666
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: header
    }

    const response = await fetch(baseUrl, options);
    const data = await response.json();

    console.log(data);
}

async function patchTitle(){
    const newUrl = baseUrl + '/4';

    const options = {
        method: 'PATCH',
        body: JSON.stringify( {title: 'När är det lunch?'}),
        headers: header
    }

    const response = await fetch(newUrl, options);
    const data = await response.json();
    console.log(data);
}

async function deletePost(){
    const newUrl = baseUrl + '/4';

    const response = await fetch(newUrl, {method: 'DELETE'});
    const data = await response.json();
    console.log(data);

}