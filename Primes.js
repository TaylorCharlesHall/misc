
let x = ' ';
while (x != 'exit') {
console.log("Type a number to factor into primes. Type exit to quit.")
let x = prompt();
let t = 1;
let g = +x;
let z = 0;
let str = '';

while ((x/t) !== 1) {

    for (i=2; i<g; i++) {

        if (g%i===0) {
       
            g = g/i; //keeps reducing to find lowest prime factor
          i = 1; //starts loop to check new multiple
        }
    }
        str += g + ' ';

        t *= g; //t will indicate if full factorization has been reached

        g=x/t;

    }
console.log("The primes are: " + str);
}
console.log("Goodbye!");