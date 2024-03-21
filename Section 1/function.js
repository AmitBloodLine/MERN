function add(a, b){
    var c = a + b;
    return c;
}

const result = add(3, 4);
console.log(result);

const fact = function(n){
    let f = 1;
    for(let i=1; i<=n; i++){
        f *= i;
    }

    return f;
}

const res1 = fact(7);
console.log(res1);

const avg = (x, y, z) => {

    return (x + y + z)/3;
}

const res2 = avg(3, 4, 5);
console.log(res2);