const baseUrl = 'https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main';

const header = {
        "Content-type": "application/json; charset=UTF-8"
    }
    

const addNodeBtn = document.querySelector('#addNode');

addNodeBtn.addEventListener('click', addNewNode );

async function addNewNode(){
    const url = baseUrl + '.json';

    const newNode = {
        claraleivas: {
            default: 'default'
        }
    };

    const options = {
        method: 'PATCH',
        body: JSON.stringify(newNode),
        headers: header
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

}