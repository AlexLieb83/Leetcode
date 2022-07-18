// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

//Using HashMap
var twoSum = function (nums, target) {
  //create our map to hold our number and index pairs
  //{2: 1, 3: 0, 4: 2, 10: 3}
  let map = {};
  //iterate over our num array
  for (let i = 0; i < nums.length; i++) {
    //store current value
    let value = nums[i];
    //we are looking for the compliment to our current value
    let compliment = target - value;
    //check if compliment is in our map
    if (map[compliment] !== undefined) {
      //if it is, return the index of compliment and i
      return [map[compliment], i];
    } else {
      //if the compliment is not found, then store current index into i
      map[value] = i;
    }
  }
};

//Brute Force
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
//   return null;
// };

console.log(twoSum([3, 2, 4, 10, 30], 40));
