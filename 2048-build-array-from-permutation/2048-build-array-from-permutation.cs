public class Solution {
    public int[] BuildArray(int[] nums) {
        return nums.Select(i => nums[i]).ToArray();
    }
}