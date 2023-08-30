const form = document.querySelector('form');

form.addEventListener('submit', 
    event => {
        event.preventDefault();
        
        const input = document.querySelector('input');
        // console.log( input.value );

        const h1 = document.querySelector('h1');
        h1.innerText = input.value;
    }
)