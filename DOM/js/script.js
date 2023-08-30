const h1 = document.querySelector('h1');//Hämtar det första h-elementet
h1.innerText = 'Hello, world!';
// h1.innerHTML = 


const allP = document.querySelectorAll('p');
// console.log(typeof allP);

for(const p of allP){
    p.innerText = 'Heja, Clara!'
}


const div = document.querySelector('div');

// div.innerHTML = '<a href=#> länk </a>';

const a = document.createElement('a');
div.appendChild(a);
a.innerText = 'länk';
a.href = '#';

const a2 = div.querySelector('a');
console.log(a2);