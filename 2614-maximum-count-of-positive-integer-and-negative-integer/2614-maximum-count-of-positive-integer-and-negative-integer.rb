# @param {Integer[]} nums
# @return {Integer}
def maximum_count(nums)
    pos = nums.count { |v| v > 0 }
    neg = nums.count { |v| v < 0 }

    [pos, neg].max
end