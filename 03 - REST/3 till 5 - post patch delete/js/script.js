//OBS!! Byt ut 'clara' i urlen till ditt namn som du la till i databasen
const baseUrl = 'https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main/clara';

const header = {
        "Content-type": "application/json; charset=UTF-8"
    }
    
const patchBtn = document.querySelector('#patch');
patchBtn.addEventListener('click', ()=>{
    patchProp('-NdUqrja1f0IJJ8tGb4S');
})

async function patchProp(id){
    const newUrl = baseUrl + `/${id}.json`;

    const newProp = {
        likes: 9999 //Stavar man fel eller om egenskapen inte finns i databasen kommer den läggas till som en ny nod
    }

    const options = {
        method: 'PATCH',
        body: JSON.stringify(newProp),
        headers: header
    }

    const response = await fetch(newUrl, options);
    const data = await response.json();
    console.log(data);
}

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', ()=>{
    deleteNode('-NdUqrja1f0IJJ8tGb4S/likess');
} );

async function deleteNode(id){
    const newUrl = baseUrl + `/${id}.json`;

    const response = await fetch(newUrl, {method: 'DELETE'});
    const data = await response.json();
    console.log(data);
}


const postBtn = document.querySelector('#post');
postBtn.addEventListener('click', postNewNode );

async function postNewNode(){
    const url = baseUrl + '.json';

    const newNode = {
        userName: 'test',
        likes: 0,
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(newNode),
        headers: header
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

}

