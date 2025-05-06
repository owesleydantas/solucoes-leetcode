func buildArray(nums []int) []int {
    ans := make([]int, len(nums))
    for idx, val := range nums {
        ans[idx] = nums[val]
    }
    return ans
}