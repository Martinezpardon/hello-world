function multiples(Num) {
    if (typeof Num !== "number" || isNaN(Num)) {
        console.log("Invalid input");
        return;
    }

    let sumMultiples = 0;
    for (let i = 0; i < Num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumMultiples += i;
        }
    }
    console.log(sumMultiples);
}
multiples(10);
multiples(11);
module.exports = { multiples };