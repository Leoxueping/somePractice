/*
    一个简单的promise实现
    思路：
    1.首先执行传入的函数，并传入两个函数作为参数，第一个函数把 resolve 函数的参数压入队列，并调用resolve函数
    第二个函数把 reject 函数的参数压入相应队列，并调用resolve函数(这里参数压入队列的作用是方便同步Promise时
    then 方法直接执行回调函数)。
    2.在 resolve 中把状态变为 RESOLVE，并按序取出在 then 中存入队列的 RESOLVE 态的回调函数及传入的参数进行执行
    reject 同上
    3.在 then 方法中先查看状态，若是 RESOLVE 则直接执行回调函数(同步Promise)，否则把回调函数压入队列。
*/
class PromiseMy {
    constructor(fun) {
        this.STATUS = {
            PENDING: 0,
            RESOLVE: 1,
            REJECT: 2
        }
        this.succArgs = undefined;
        this.failArgs = undefined;
        this.succCbs = [];
        this.failCbs = [];
        this._status = this.STATUS.PENDING;
        this._execFun(fun);
    }

    _execFun(fun) {
        const that = this;
        if(this._isFun(fun)) {
            /*这里不能使用箭头函数，不然取不到arguments*/
            fun(function() {
                that.succArgs = [].slice.apply(arguments);
                that.resolve.apply(that ,arguments);
            },function() {
                that.failArgs = [].slice.apply(arguments);
                that.reject.apply(that, arguments);
            })
        }else {
            setTimeout(() => {
                that.resolve(fun);
            })
        }
    }

    _isFun(fun) {
        return Object.prototype.toString.call(fun) === '[object Function]';
    }

    resolve() {
        this._status = this.STATUS.RESOLVE;
        let ret,
            callBack = this.succCbs.shift();
        if(this._isFun(callBack)) {
            ret = callBack.apply(callBack, arguments);
            if (!(ret instanceof PromiseMy)) {
                let _ret = ret;
                ret = new PromiseMy((resolve, reject) => {
                    setTimeout(() => {
                        resolve(_ret);
                    });
                });
            }
            ret.succCbs = this.succCbs.slice();
        }
    }

    reject() {
        this._status = this.STATUS.REJECT;
        var ret, 
            args = arguments,
            callBack = this.failCbs.shift();
        if(this._isFun(callBack)) {

            ret = callBack.apply(callBack, args);
            if (!(ret instanceof PromiseMy)) {
                var _ret = ret;
                ret = new PromiseMy((resolve, reject) => {
                    setTimeout(() => {
                        reject(_ret);
                    });
                });
            }
            ret.failCbs = this.failCbs.slice();
        }
    }

    then(succCb, failCb) {
        if (succCb) {
            if(this._status === this.STATUS.RESOLVE) {/*同步Promise时会直接在这调用回调*/
                succCb.apply(succCb, this.succArgs);
            }else {
                this.succCbs.push(succCb);
            }
        }
        
        if(failCb) {
            if(this._status === this.STATUS.REJECT) {/*同步Promise时会直接在这调用回调*/
                failCbs.apply(failCbs, this.failArgs);
            }else {
                this.failCbs.push(failCb);
            }
        }
        
        return this;
    }

    catch(failCb) {
        if(failCb) {
            if(this._status === this.STATUS.REJECT) {/*同步Promise时会直接在这调用回调*/
                failCbs.apply(failCbs, this.failArgs);
            }else {
                this.failCbs.push(failCb);
            }
        }
        
        return this;
    }
}

let a = new PromiseMy((resolve, reject) => {
    setTimeout(() => {
        resolve(' first');
    }, 200)
})

a.then(function (e) {
    console.log(e)
    return 'second'
}).then(function (e) {
    console.log(e)
    return 'thrid'
}).then(function (e) {
    console.log(e)
}).catch(function(e) {
    console.log(e)
    return 55
})

let b = new PromiseMy((resolve, reject) => {
    setTimeout(() => {
        reject(' fail');
    }, 300)
})

b.then(function (e) {
    console.log(e)
    return 'second'
}).then(function (e) {
    console.log(e)
    return 'thrid'
}).then(function (e) {
    console.log(e)
}).catch(function(e) {
    console.log(e)
})

let c = new PromiseMy('not function')
c.then((e) => console.log(e))