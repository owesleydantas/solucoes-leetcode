# @param {Integer[][]} grid
# @return {Integer}
def count_negatives(grid)
    grid.sum { |i| i.count { |j| j < 0 }}
end