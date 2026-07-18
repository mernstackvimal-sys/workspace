const gt = require('./export');
// console.log(gt());

let nums = [2,0,2,1,1,0]; 
let target = [0,0,1,1,2,2];

function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while (mid <= high) {
         console.log(nums[low], nums[mid],nums[high])
          console.log("before",nums)
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } 
        else if (nums[mid] === 1) {
            mid++;
        } 
        else { // nums[mid] === 2
            
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
            console.log("trigger");
        }
       
        console.log("after",nums)
    }
    return nums;
}


console.log(sortColors(nums));