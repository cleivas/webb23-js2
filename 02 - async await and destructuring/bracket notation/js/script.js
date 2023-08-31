// const obj = {
//     name: 'Bettina',
//     age: 87,
// };

// const a = 'name'
// console.log(obj.name, obj['name'], obj[a]);

// obj.isStudent = true;
// obj['isHungry'] = true;
// console.log(obj);


// const form = document.querySelector('form');
// form.addEventListener('submit', event=>{
//     event.preventDefault();

//     const formElements = form.children;
//     console.log(formElements)

//     const formInfo = {};

//     for(const element of formElements){
//         if(element.name != ''){
//             console.log(element.name, element.value);
//             formInfo[element.name] = element.value;
//         }
//     }

    
//     console.log(formInfo);
// })

async function getBeer(){
    const url = 'https://api.punkapi.com/v2/beers' ;
    const response = await fetch(url);
    const beers = await response.json();

    const beer = beers[0];

    console.log(beer);

    for(const prop in beer){
        console.log(prop, beer[prop]);
    }
}

getBeer();