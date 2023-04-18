function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        let product = num * i;
        console.log(`${num} x ${i} = ${product}`);
    }
}

multiplicationTable(5); // Generates the multiplication table for 5
multiplicationTable(7); // Generates the multiplication table for 7
multiplicationTable(3); // Generates the multiplication table for 3
