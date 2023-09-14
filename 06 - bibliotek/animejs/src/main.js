import anime from "animejs";

// anime({
//     targets: 'div',
//     backgroundColor: 'hsl(0, 70%, 50%)',
//     borderRadius: '50%',
//     rotate: 360,
//     duration: 1000,
//     easing: 'easeInOutBounce',
//     direction: 'alternate',
//     loop: true
// });


/* läs dokumentationen och
    - flytta divarna till höger 400px, 
    - det ska ta två sekunder

    - om du lyckats, testa fler saker att animera
*/

anime({
    targets: 'div',
    translateX: 400,
    delay: 2000
})
