/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if  (!list2) return list1;

    let res: ListNode;

    if (list1.val < list2.val) {
        res = new ListNode(list1.val, mergeTwoLists(list1.next, list2));
    } else {
        res = new ListNode(list2.val, mergeTwoLists(list1, list2.next));
    }

    return res;
};