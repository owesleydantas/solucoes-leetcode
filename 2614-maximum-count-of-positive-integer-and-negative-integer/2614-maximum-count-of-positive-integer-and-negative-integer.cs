public class Solution {
    public int MaximumCount(int[] nums) {
        int pos = nums.Count(v => v > 0);
        int neg = nums.Count(v => v < 0);

        return Math.Max(pos, neg);
    }
}