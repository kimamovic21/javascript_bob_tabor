// let name = 'bob';
// console.log(`hi ${name}`);

// let sentece = `Lorem ipsum dolor sit amet,
//         consectetur adipiscing elit. Vestibulum 
//         viverra metus vitae enim aliquet consequat.
//         Pellentesque aliquet tempor pharetra.
//         Fusce non commodo lorem, a tincidunt massa.
//         Sed quis consequat ligula.`;

// console.log(sentece);


function getReasonCount() {
    return 1;
}

let interpolation = `Give me ${ (getReasonCount() == 1) ? 
                    'one good reason' :
                    'a few reasons' } to try this.`

console.log(interpolation);
