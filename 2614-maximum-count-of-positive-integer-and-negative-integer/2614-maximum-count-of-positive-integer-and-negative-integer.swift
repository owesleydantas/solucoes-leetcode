class Solution {
    func maximumCount(_ nums: [Int]) -> Int {
        let pos = nums.filter { $0 > 0 }.count
        let neg = nums.filter { $0 < 0 }.count

        return max(pos, neg)
    }
}