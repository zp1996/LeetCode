# Populating Next Right Pointers in Each Node

对满二叉树进行变换，利用层次遍历。
```
     1
   /  \
  2    3   
 / \  / \
4  5  6  7
```
变换后：
```
   1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \  / \
4->5->6->7 -> NULL
```