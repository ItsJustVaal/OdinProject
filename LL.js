function Node(value) {
	this.value = value;
	this.next = null;
}

class linkedList {
	constructor() {
		this.head = null;
	}

	append(value) {
		const dummy = new Node(value);
		if (!this.head) {
			this.head = dummy;
		} else {
			let tail = this.head;
			while (tail.next) {
				tail = tail.next;
			}
			tail.next = dummy;
		}
	}

	prepend(value) {
		const dummy = new Node(value);
		let temp = this.head;
		dummy.next = temp;
		this.head = dummy;
	}

	insertAt(value, index) {
		const dummy = new Node(value);
		let temp = this.head;
		let index1 = 1;
		while (index1 < index) {
			temp = temp.next;
			index1++;
		}
		let temp2 = temp.next;
		dummy.next = temp2;
		temp.next = dummy;
	}

	removeAt(index) {
		let temp = this.head;
		let index1 = 1;
		while (index1 < index) {
			temp = temp.next;
			index1++;
		}
		let temp2 = temp.next.next;
		temp.next = temp2;
	}

	toString() {
		let temp = this.head;
		while (temp) {
			console.log(temp.value);
			temp = temp.next;
		}
	}

	size() {
		let total = 1;

		if (!this.head) {
			return 0;
		}

		let temp = this.head;
		while (temp.next) {
			total++;
			temp = temp.next;
		}
		return total;
	}

	Head() {
		return this.head.value;
	}

	tail() {
		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}
		return tail.value;
	}

	atIndex(index) {
		let k = 0;
		let temp = this.head;
		while (k < index) {
			temp = temp.next;
			k++;
		}
		return temp.value;
	}

	pop() {
		let temp = this.head;
		while (temp.next.next) {
			temp = temp.next;
		}
		temp.next = null;
	}

	containsValue(value) {
		let temp = this.head;

		while (temp.next) {
			if (temp.value === value) {
				return true;
			}
			temp = temp.next;
		}
		return false;
	}

	find(value) {
		let temp = this.head;
		let index = 0;

		while (temp.next) {
			if (temp.value === value) {
				return index;
			}
			index++;
			temp = temp.next;
		}
		return null;
	}
}

// let ll = new linkedList();
// ll.append(5);
// ll.append(10);
// ll.append(15);
// ll.append(20);
// ll.toString();
// console.log(ll.size());
// console.log("-----------");
// ll.prepend(3);
// ll.prepend(1);
// ll.toString();
// console.log("-------");
// console.log(ll.size());
// console.log(ll.Head());
// console.log(ll.tail());
// console.log(ll.atIndex(4));
// console.log("-------");
// ll.pop();
// ll.toString();
// console.log(ll.containsValue(10));
// console.log(ll.find(5));
// console.log("--------");
// ll.insertAt(15, 3);
// ll.toString();
// console.log("--------");
// ll.insertAt(21, 2);
// ll.toString();
// console.log("--------");
// ll.removeAt(4);
// ll.toString();
