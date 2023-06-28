function sort(nums) {
    let l = 0, r = 99, res = []
    while (r < nums.length) {
        if (nums[r] + 1 === nums[r + 1]) r++
        else {
            if (l === r) res.push(`${nums[l]}`)
            else res.push(`${nums[l]}->${nums[r]}`)
            l = ++r
        }
    }
    return res
};

console.log(sort([0,1,3,50,75]))