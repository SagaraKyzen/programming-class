class TreeNode {
    constructor(value) {
        this.value = value; // Nilai yang disimpan di node
        this.left = null;   // Pointer ke anak kiri
        this.right = null;  // Pointer ke anak kanan
    }
}

// Kelas untuk merepresentasikan Binary Search Tree (BST)
class BinarySearchTree {
    constructor() {
        this.root = null; // Akar dari pohon, awalnya null
    }

    // Metode untuk menambahkan nilai baru ke dalam BST
    insert(value) { 
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                // Jika nilai lebih kecil, pergi ke kiri
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left; // Pindah ke anak kiri
            } else {
                // Jika nilai lebih besar atau sama, pergi ke kanan
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right; // Pindah ke anak kanan
            }
        }
    }

    // Metode untuk mencari nilai dalam BST
    find(value) { 
        if (this.root === null) {return false;}

        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true; // Nilai ditemukan
            } else if (value < currentNode.value) {
                currentNode = currentNode.left; // Cari di kiri
            } else {
                currentNode = currentNode.right; // Cari di kanan
            }
        }
        return false; // Nilai tidak ditemukan
    }

    // In-order Traversal (Kiri -> Node -> Kanan) - Mengembalikan nilai terurut untuk BST
    inOrderTraversal(node = this.root, result = []) { 
        if (node) {
            this.inOrderTraversal(node.left, result); // Kunjungi anak kiri
            result.push(node.value); // Kunjungi node
            this.inOrderTraversal(node.right, result); // Kunjungi anak kanan
        }
        return result;
    }

    // Pre-order Traversal (Node -> Kiri -> Kanan)
    preOrderTraversal(node = this.root, result = []) { 
        if (node) {
            result.push(node.value); // Kunjungi node
            this.preOrderTraversal(node.left, result); // Kunjungi anak kiri
            this.preOrderTraversal(node.right, result); // Kunjungi anak kanan
        }
        return result;
    }

    // Post-order Traversal (Kiri -> Kanan -> Node)
    postOrderTraversal(node = this.root, result = []) { 
        if (node) {
            this.postOrderTraversal(node.left, result); // Kunjungi anak kiri
            this.postOrderTraversal(node.right, result); // Kunjungi anak kanan
            result.push(node.value); // Kunjungi node
        }
        return result;
    } 

    // Breadth-First Search (BFS) - Menjelajahi level per level
    bfs() { 
        const result = [];
        const queue = [];
        if (this.root) queue.push(this.root);

        while (queue.length) {
            const currentNode = queue.shift(); // Ambil node dari depan antrian
            result.push(currentNode.value); // Kunjungi node

            // Tambahkan anak kiri dan kanan ke antrian
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return result;
    }
}
const bst = new BinarySearchTree();
bst.insert(10).insert(5).insert(15).insert(2).insert(7).insert(12).insert(17);
console.log("BST:", bst);
console.log("Find 7:", bst.find(7));
console.log("Find 100:", bst.find(100));
console.log("In-order:", bst.inOrderTraversal());
