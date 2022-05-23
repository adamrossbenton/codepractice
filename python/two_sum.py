# Not done, need to fix this

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)-1):
            for j in range(i+1,len(nums)):
                print(i)
                print(j)
                print(i+j)
                if i+j == target:
                    return [i,j]
                else:
                    continue