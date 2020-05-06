/**
 * 题目：Two Sum
 * 有一个整型数组，找出和为target的两个数字。
 *
 * 举例：nums = [2, 7, 11, 15], target = 9
 * 返回: [0, 1]
 */
export default function(nums, target) {
  const dict = Object.create(null);

  for (let i = 0, len = nums.length; i < len; i++) {
    const another = target - nums[i];
    if (another in dict) {
      return [i, dict[another]];
    }
    dict[nums[i]] = i;
  }

  return [];
}
