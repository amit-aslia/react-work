
var runningSum = function(nums) {
    let sum = 0;
    const output = nums.map((num, index) => {
        
        const outputSum =  sum + num;
        sum = outputSum;
        return outputSum
    })
    
    return output;
};

console.log(runningSum([1,2,3,4]));