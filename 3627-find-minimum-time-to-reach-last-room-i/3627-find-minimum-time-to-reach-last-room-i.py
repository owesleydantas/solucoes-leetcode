class Solution:
    def minTimeToReach(self, moveTime: List[List[int]]) -> int:
        m, n = len(moveTime), len(moveTime[0])
        dist = [[float('inf')] * n for _ in range(m)]
        dist[0][0] = 0
        heap = [(0,0,0)]

        while heap:
            time, r, c = heapq.heappop(heap)
            if (r, c) == (m - 1, n - 1):
                return time
            
            for dr, dc in [(-1, 0), (1,0), (0,-1), (0,1)]:
                nr, nc = r +dr, c + dc
                if 0 <= nr < m and 0 <= nc < n:
                    waitTime = max(time, moveTime[nr][nc]) + 1
                    if waitTime < dist[nr][nc]:
                        dist[nr][nc] = waitTime
                        heapq.heappush(heap, (waitTime, nr, nc))
        return -1