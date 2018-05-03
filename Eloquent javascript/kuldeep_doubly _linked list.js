
class Node {
    constructor(val) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }


}
class DLL {
    constructor() {
        this.length = 0;
        this.head = null;
        this.currentNode = null;
        //  console.log("constructor")
    }

    //-----------------------Append--------------------    


    Append(data) {
        if (this.head == null) {
            var node = new Node(data);
            // console.log(node);
            this.head = node;
            this.currentNode = node;
            this.length++;
        }
        else {
            //  console.log("else");
            var node = new Node(data);
            node.prev = this.currentNode;
            this.currentNode.next = node;
            this.currentNode = node;
            this.length++;

        }

    }


    //-----------------------Prepend--------------------    

    Prepend(data) {
        if (this.head == null) {
            var node = new Node(data);
            // console.log(node);
            this.head = node;
            this.currentNode = node;
            this.length++;
        }
        else {
            //  console.log("else");
            var node = new Node(data);
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            this.length++;

        }

    }


    //-----------------------index--------------------    

    Insert_index(data, pos) {

        var node = new Node(data);

        if (this.head == null) {
            // console.log(node);
            this.head = node;
            this.currentNode = node;
            this.length++;
        }
        else {
            if (pos == 0) {
                /*  node.next=this.head;
                this.head.prev=node;
                this.head=node;
                 this.length++; */

                this.Prepend(data);
            }
            else if (pos >= length + 1) {
                /*node.prev=this.currentNode;
                this.currentNode.next=node;
               this.currentNode=node;
               this.length++; */

                this.Append(data);

            }
            else if (pos < (this.length + 1)) {
                var curr = this.head;
                var count = 0;
                let temp_curr = null;
                let temp_prev = null;

                while (curr.data != null) {
                    if (pos == count) {
                        temp_curr = curr;
                        break;
                    }
                    //console.log(curr);
                    //  console.log(curr.data);
                    if (curr.next) {
                        count++;
                        curr = curr.next;
                    }
                    else { break; }
                }
                temp_prev = temp_curr.prev;
                node.next = temp_curr;
                node.prev = temp_prev;
                temp_curr.prev = node;
                temp_prev.next = node;
                this.length++;
                //   console.log(node.next);
            } else {
                console.log("please specify proper value")
            }

        }

    }


    //-----------------get element at index --------

    Get_index(val) {

        // console.log("yoooo");
        var curr = this.head;
        var count = 0;
        while (curr.data != null) {
            if (val == curr.data) {
                // console.log(curr.data);
                //return curr.data;
                return "index is " + count;

                break;
            }
            //console.log(curr);
            //   console.log(curr.data);
            if (curr.next) {
                count++;
                curr = curr.next;
            }
            else { break; }
        }


    }

    //------------- delete element---------------



    Delete_element(val) {

        // console.log("yoooo");
        var curr = this.head;
        var count = 0;
        var n_prev = null;
        var n_nxt = null;
        var n_curr = null;
        let not_found = true;

        while (curr.data != null) {
            if (val == curr.data) {
                n_curr = curr;

                not_found = false;
                break;
            }
            if (curr.next) {
                count++;
                curr = curr.next;
            }
            else { break; }
        }



        if (not_found) {
            console.log("invalid data")
        } else {
            //  console.log("---found--"+n_curr.data);
            n_prev = n_curr.prev;
            n_nxt = n_curr.next;

            if (n_prev != null && n_nxt != null) {
                n_prev.next = n_nxt;
                n_nxt.prev = n_prev;
            }

            else if (n_prev == null && n_nxt != null) {
                this.head = n_nxt;
                this.head.prev = null;
            }

            else if (n_prev != null && n_nxt == null) {
                this.currentNode = n_prev;
                this.currentNode.next = null;
            }


        }

    }



    //-----------------change value of element --------
    Change_value(old_val, new_val) {

        var curr = this.head;
        //  console.log(old_val);
        //   console.log(new_val);
        let not_found = true;
        while (curr.data != null) {
            // console.log(curr);
            //console.log(curr.data);

            if (old_val == curr.data) {
                //console.log("data found ----");
                curr.data = new_val;
                not_found = false;
            }

            if (curr.next) { curr = curr.next; }
            else { break; }
        }

        if (not_found) {
            return "invalid data";
        } else {
            return "data changed successfully!!";
        }
    }

    //-----------------------show--------------------  


    Show() {

        var curr = this.head;
        var arr = [];
        var temp = null;
        console.log("total nodes " + (this.length - 1));
        while (curr.data != null) {
            // console.log(curr);
            //  console.log(curr.data);
            arr.push(curr.data);
            temp += JSON.stringify(curr.data);
            if (curr.next) { curr = curr.next; }
            else { break; }
        }


        console.log(arr);
        // console.log(JSON.stringify(arr));
        // console.log(JSON.stringify(this.head));

    }

    //----------------------- Merge_list --------------------  
    Merge_list(l2) {
        console.log(this.currentNode.data);
        console.log(l2.head.data);

        this.currentNode.next = l2.head;
        l2.head.prev = this.currentNode;
    }

}


var a = new DLL();
a.Append(15);
a.Prepend(14);
a.Append(16);
a.Append(17);
a.Append(18);
a.Prepend(13);
a.Insert_index(50, 0);
a.Insert_index(100, 10);
//a.Get_element(5);  Change_value
console.log(a.Get_index(17));
//console.log(a.Change_value(50,19));
a.Delete_element(14);
a.Delete_element(50);
a.Delete_element(16);


a.Show();


var b = new DLL();
b.Append(55);
b.Append(56);
b.Append(57);

//b.Show();

//a.Merge_list(b);

//a.Show();