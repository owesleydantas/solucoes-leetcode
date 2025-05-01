from collections import deque

class Solution:
    def maxTaskAssign(self, tasks: List[int], workers: List[int], pills: int, strength: int) -> int:
        tasks.sort()
        workers.sort()

        def canAssign(k: int) -> bool:
            boosted = deque()
            worker = len(workers) - 1
            usedPills = pills

            for task in reversed(tasks[:k]):
                if boosted and boosted[0] >= task:
                    boosted.popleft()
                elif worker >= 0 and workers[worker] >= task:
                    worker -= 1
                else:
                    while worker >= 0 and workers[worker] + strength >= task:
                        boosted.append(workers[worker])
                        worker -= 1
                    
                    if not boosted or usedPills == 0:
                        return False
                    boosted.pop()
                    usedPills -= 1
            return True
        
        l, r = 0, min(len(tasks), len(workers))
        while l < r:
            m = r - (r - l) // 2
            if canAssign(m):
                l = m
            else:
                r = m - 1
        return l