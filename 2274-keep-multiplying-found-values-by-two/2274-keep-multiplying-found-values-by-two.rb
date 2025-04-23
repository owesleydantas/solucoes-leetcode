# @param {Integer[]} nums
# @param {Integer} original
# @return {Integer}
def find_final_value(nums, original)
    while nums.include?(original)
        original *= 2
    end
    return original
end