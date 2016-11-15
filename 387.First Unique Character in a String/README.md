# First Unique Character in a String

找寻第一个指出现一次的字符，解法复杂度为$O(n ^ 2)$，循环遍历字符串，从当前下一个位置找寻有无相同字符，有责将其记录在`cache`中；反之，返回当前位置。