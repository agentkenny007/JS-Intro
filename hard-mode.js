// Write a function that takes three parameters x, y, and z.
// It should return the sum of the squares of the two largest numbers.

function squareTheGreatest(x, y, z){
    var nums = [x, y, z].sort(); nums.shift();
    return numsSqd = nums[0] * nums[0] + nums[1] * nums[1];
}
