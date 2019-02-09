## List

* Linked List 链表
  ![linkedlist](../../asserts/images/linkedlist.jpg)
* Circulate Linked List 循环链表
  * use case: (Josephus problem)
* Doubly linked list 双链表
  ![doublylinkedlist](../../asserts/images/doublylinkedlist.jpg)


### Advantage: insert and delete

![insertdeletelinkedlist](../../asserts/images/insertdeletelinkedlist.jpg)
![arrayvslist](../../asserts/images/arrayvslist.jpg)

### Double Linked List vs Linked List

There are 2 types of delete problem:
1. Delete node by values of the node删除结点中“值等于某个给定值”的结点
2. Delete node according to index 删除给定指针指向的结点

Double Linke List is good at dealing with delete node by index because

When we knows which node we need to delete already.
* the singal linked list doesn't know prev's node, in order to get the prev's node, we need to iterator through and get some `p-> next = q` value to delete the q.
* but in double linked list, I know it prev's node already, I only need to point it next node to prev node in order to delete the node

> LinkedHashMap in java used doubly linked list

Disadvatange of double linked list.(require more memory to store the prev node)

#### space time exchange
double linked list is a example of surrender space in order to get less time.

#### 缓存淘汰算法
* *先进先出策略 FIFO（First In，First Out）
* 最少使用策略 LFU（Least Frequently Used）
* 最近最少使用策略 LRU（Least Recently Used

#### LRU by Linked List:
Solution: we have a single linked link, the tail one is the most earliest data, when new data need to be get, we search it from head to tails(我们维护一个有序单链表，越靠近链表尾部的结点是越早之前访问的。当有一个新的数据被访问时，我们从链表头开始顺序遍历链表。)
1. If the hit the data, we delete the node and insert the data into the head of the list(如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据对应的结点，并将其从原来的位置删除，然后再插入到链表的头部。)
2. If the data not appear in the linked list, there are 2 consequences:(如果此数据没有在缓存链表中，又可以分为两种情况：)
  * If cache is not full, insert the mpde to head directly. (如果此时缓存未满，则将此结点直接插入到链表的头部)
  * If cache is full, delete the taile node and insert the new data to head.(如果此时缓存已满，则链表尾结点删除，将新的数据结点插入链表的头部。)


Complicity: O(n)(因为不管缓存有没有满，我们都需要遍历一遍链表，所以这种基于链表的实现思路，缓存访问的时间复杂度为 O(n))。


## practice:

* [Linked List](linkedlist.js)

## Reference resource：
* [极客时间：算法与数据结构之美](https://time.geekbang.org/column/126)
