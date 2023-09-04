const baseUrl = `https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main/clara`;

async function getAllNodes(){
    const newUrl = baseUrl+`.json`;

    const response = await fetch(newUrl);
    const allNodes = await response.json();
    
    console.log(allNodes);
    return allNodes;
}

function displayAllNodes(nodesObj){
    // Loopa igenom varje egenskap i nodesObj
    for(const node in nodesObj){
        
        //Om egenskapen innehåller ett objekt skapas en div
        if(typeof nodesObj[node] == 'object'){
            const nodeObj = nodesObj[node];
            console.log(nodeObj);

            //En div per nod i databasen
            const div = document.createElement('div');
            div.id = node;
            document.body.append(div);

            div.addEventListener('click', ()=>{
                deleteNode(node);
                console.log(node);
            })

            // Loopa igenom egenskaperna i objektet nodesObj[node]
            for(const propertyName in nodeObj){
                console.log(propertyName, nodeObj[propertyName]);

                const p = document.createElement('p');
                p.innerText = nodeObj[propertyName];
                div.append(p);

            }
        }
    }
}

async function deleteNode(id){
    const newUrl = baseUrl + `/${id}.json`;

    const response = await fetch(newUrl, {method: 'DELETE'});
    const data = await response.json();
    console.log(data);

    location.reload();
}

getAllNodes().then( displayAllNodes );