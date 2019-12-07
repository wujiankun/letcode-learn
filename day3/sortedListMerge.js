//https://leetcode-cn.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 思路：死循环中同时遍历两个有序单链表，直到其中一个遍历完成后退出死循环；
    循环过程中以第一个链表为基准，找到合适的位置插入第一个node，然后两表依次向后遍历，同时在适当位置插入表二的数据；
    如果表一先遍历完毕，则直接从表二的当前遍历位置插入表一末尾，然后返回表一；
    如果表二先遍历完毕，则直接返回表一；
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2;
    }else if(!l2) {
        return l1;
    }
    
    var prevNodeOfL1 = null;
    var currNodeOfL1 = l1,head1 = l1;

    //先进行一次比较，目的是初始化 prevNodeOf1 和 head1
    if(l1.val>l2.val){
        //表二中第一个node插入到表一最前面
        var tempNode = l2.next;
        l2.next = l1;
        head1 = l2;
        prevNodeOfL1 = head1;
        l2 = tempNode;
        if(!l2){
            //l2遍历完毕
            return head1;
        }
    }else{
        if(!(l1.next)){
            //l1遍历完毕
            l1.next = l2;
            return l1;
        }else{
            prevNodeOfL1 = l1;
            currNodeOfL1 = l1.next;
        }
    }

    


    while(true){
        if(currNodeOfL1.val>l2.val){
            var tempNode2 = l2.next;
            prevNodeOfL1.next = l2;
            l2.next = currNodeOfL1;
            prevNodeOfL1 = prevNodeOfL1.next;
            l2 = tempNode2;
            if(!l2){
                //l2遍历完毕
                return head1;
            }
        }else{
            //继续寻找合适位置
            if(!(currNodeOfL1.next)){
                //l1遍历完毕
                currNodeOfL1.next = l2;
                return head1;
            }else{
                prevNodeOfL1 = currNodeOfL1;
                currNodeOfL1 = currNodeOfL1.next;
            }
        }


        let t  = head1;

        do{
            console.log(t.val)
        }while(( t = t.next)==null){
            console.log(t.val)
        }


    }    
    
};

let t1 = {val:5,next:null}
let t22 = {val:4,next:null}
let t21 = {val:2,next:t22}
let t2 = {val:1,next:t21}



let t  = mergeTwoLists(t1,t2);
console.log('result')
do{
    console.log(t.val)
    t = t.next;
}while(t !==null);