const nums = [34, 89, 284, 275, 39, 53, 92];

// q1. find sum of all elements

let sum = 0;
for( let i=0; i<nums.length; i++ ){
    console.log( nums[i] );
    sum+=nums[i];
}
console.log(sum);
console.log('-----------------');

let sum2 = 0;
nums.forEach( ( n, i ) => { sum2 += n; console.log(i, n); } );
console.log(sum2);

// find sum of all elements at even index