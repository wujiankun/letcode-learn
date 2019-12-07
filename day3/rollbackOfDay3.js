/*合并两个有序单链表*/
//https://leetcode-cn.com/problems/merge-two-sorted-lists/

/*
* 思路:新建一个headNode,headNode.next指向l1和l2二者之中较小者,headNode 的作用是便于最后结果的返回
* 这里假定headNode.next = l1;设置prev变量保存结果链表最后的node
* prev = l1
* l1 = l1.next
* 再对l1 和 l2 进行比较 ,prev.next 指向其中较小者,
* 循环直到l1或者l2为null
*
* */
function mergeLinkList(l1, l2) {

    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }

    let headNode = {};
    let prev = headNode;

    do {
        if (l1.val > l2.val) {
            prev.next = l2;
            l2 = l2.next;
        } else {
            prev.next = l1;
            l1 = l1.next;
        }
        prev = prev.next;
    } while (!!l1 && !!l2);

    if (!l1) {
        prev.next = l2;
    } else if (!l2) {
        prev.next = l1;
    }

    return headNode;
}