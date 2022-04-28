
let promise = (execute) => {
    let onResolve;
    let onReject;
    let isFulfilled = false;
    let isRejected = false;
    let isCalled = false;
    let value;
    let reason;

    function resolve(val) {
        isFulfilled = true;
        value = val;
        if (typeof onResolve === 'function' && !isCalled) {
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(error) {
        isRejected = true;
        reason = error;
        if (typeof onReject === 'function' && !isCalled) {
            onReject(error);
            isCalled = true;
        }
    }

    this.then = function(thenHandler) {
        onResolve = thenHandler;
        if (isFulfilled && !isCalled) {
            onResolve(value);
            isCalled = true;
        }
        return this;
    }

    this.catch = function(catchHandler) {
        onReject = catchHandler;
        if (isRejected && !isCalled){
            onReject(error);
            isCalled = true;
        }
        return this;
    }

    function resolve(value) { }
    function reject(reason) { }

    execute(resolve, reject);
}