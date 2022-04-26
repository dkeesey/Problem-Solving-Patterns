// user defined class node
class Node {
    //constructor 
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() 
    {
        this.head = null;    
        this.size = 0;
    }
    
    /* functions to be implemented
    add(element)
    insertAt(element,location)
    remmoveFrom(location)
    remove(element)

    Helper functions
    isEmpty()
    size_of_List(element)
    PrintList()

    */

    //add element to the end of the list

    add(element){
        //create a new node
        var node = new Node(element);
        //to store current node
        var current;
        //if this is the first node, add element and make it head
        if (this.head === null) {
            this.head = node;
            // this.size += 1; 
        } else {
            current = this.head;
            //iterate to the end of the list
            while (current.next) {
                current = current.next;
            }
            //add element
            current.next = node;
        }

        this.size =+ 1;

    }

    //insert element at the given location
    insertAt(element, index){
        //create a new node
        if (index < 0 || index > this.size) {
            return console.log("Index is out of bounds; either less than 0, or greater than the size of the list");
        } 
        var node = new Node(element);
        var current, previous;
        current = this.head; //initialize current to head

        //if index is 0, it should be the new head; previous head will be next
        //always change the existing node first, then assign the new node 
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } 
        else { //iterate to the node at index position
            current = this.head;
            var i = 0;
            while (i < index) { //stop iterating at index -1
                // the new node becomes the new entry at index, 
                // previous entry at index becomes the next
                previous = current;
                current = current.next;
                i++;
            }
            //assign the new node
            node.next = current; // node.next is assigned to current 
            previous.next = node; // previous.next is assigned to the new node
        }
        this.size += 1;
    }


    //remove element at a given index 
    removeIndex(index){
        if (index < 0 || index >= this.size) { // catch illegal index
            return console.log("index is out of bounds, either less than 0 or greater than the size of the list");
        }
        var current, previous, it = 0; 
        current = this.head;
        previous = current; // both are initialized at Head

        if(index === 0){ //delete node at index 0; so head should point to current.next 
            this.head = current.next
        }
        else {
            //iterate over the list to just before the index and remove the node at index 
            while (it < index){
                it++; //advance the counter once 
                previous = current;
                current = current.next;
            }
            //remove the element
            previous.next = current.next; //previous.next is assigned to current.next,
            //which skips the current node. 
        }
        this.size -= 1; //size is reduced by 1

        //return the element removed
        return current.element;
    } 

    //remove a given element value  from the list 
    removeElement(element)
    {
        var current = this.head;
        var previous = null; 

        //iterate over the list 
        while (current != null) {
            //if current element is the element to be removed
            if (current.element === element) {
                //if current is the head
                if (previous == null) {
                    this.head = current.next; //make current.next the new head
                } else { //if current is not the head
                    previous.next = current.next; //make previous.next the current.next 
                    // bypassing current
                }
                this.size -= 1; //decrease size
                return current.element; //return the element removed
            }
            //iterate forward 
            previous = current; 
            current = current.next;
        }
        return -1; //return -1 if element is not found
    }

// finds the index of element
    indexOf(element)
    {
        var count = 0;
        var current = this.head;

        // iterate over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }


    // checks the list for empty
    isEmpty()
    {
        return this.size == 0;
    }

    // gives the size of the list
    size_of_list()
    {
        console.log(this.size);
    }

    // prints the list items
    printList()
    {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

}

// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// // adding element to the list
ll.add(10);

// // prints 10
ll.printList();

// // returns 1
// console.log(ll.size_of_list());

// // adding more elements to the list
// ll.add(20);
// ll.add(30);
// ll.add(40);
// ll.add(50);

// // returns 10 20 30 40 50
// ll.printList();

// // prints 50 from the list
// console.log("is element removed ?" + ll.removeElement(50));

// // prints 10 20 30 40
// ll.printList();

// // returns 3
// console.log("Index of 40 " + ll.indexOf(40));

// // insert 60 at second position
// // ll contains 10 20 60 30 40
// ll.insertAt(60, 2);

// ll.printList();

// // returns false
// console.log("is List Empty ? " + ll.isEmpty());

// // remove 3rd element from the list
// console.log(ll.removeIndex(3));

// // prints 10 20 60 40
// ll.printList();
