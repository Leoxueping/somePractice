class Sort {
    constructor(arr=[1,3,546,324,3242,13,44,32,21,1,233,4,32], smallToBig=true) {
        this.arr = arr;
        this.smallToBig = smallToBig;
        this._length = arr.length;
    }

    bubble() {
        const _length = this._length,
            arr = this.arr,
            smallToBig = this.smallToBig;
        for(let i = 0; i < _length - 1; i ++) {
            for(let j = i + 1; j < _length; j ++) {
                if (smallToBig ? arr[i] > arr[j] : arr[i] < arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    choose() {
        const _length = this._length,
            arr = this.arr,
            smallToBig = this.smallToBig;
        for(let i = 0; i < _length - 1; i ++) {
            let changIndex = i;
            for(let j = i + 1; j < _length; j ++) {
                if (smallToBig ? arr[j] < arr[changIndex] : arr[j] > arr[changIndex]) {
                    changIndex = j;
                }
            }
            if (changIndex !== i) {
                const temp = arr[i];
                arr[i] = arr[changIndex];
                arr[changIndex] = temp;
            }
        }
        return arr;
    }

    insert() {
        const _length = this._length,
            arr = this.arr,
            smallToBig = this.smallToBig;

        for(let i = 1; i < _length; i ++) {
            let j = i - 1,
                k = arr[i];
            while (j > -1 && (smallToBig ? k < arr[j] : k > arr[j])) {
                arr[j + 1] = arr[j];
                j --;
            }
            arr[j+1] = k;
        }
        return arr;
    }

    quick() {
        const sort = (arr, length, smallToBig) => {
            if (length <= 1) {
                return arr;
            }
            const middle = Math.floor(length/2),
                base = arr.splice(middle, 1)[0];

            const left = [],
                right = [];

            for(let i = 0; i < length - 1; i ++) {
                (smallToBig ? arr[i] <= base : arr[i] >= base) ? left.push(arr[i]) : right.push(arr[i]);
            }

            return [...sort(left, left.length, smallToBig), base, ...sort(right, right.length, smallToBig)];
        }

        return sort(this.arr, this._length, this.smallToBig);
    }

    merge() {
        
    }
}

const sort = new Sort();
const res = sort.quick();
console.log(res);