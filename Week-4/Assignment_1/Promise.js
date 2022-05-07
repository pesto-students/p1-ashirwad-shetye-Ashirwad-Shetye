
const STATE = {
    FULLFILLED: 'fullfilled',
    REJECTED: 'rejected',
    PENDING: 'pending'
}

class poly_Promise {
    #then_callback = []                                 
    #catch_callback = []                                 //storing callback for further use
    #state = STATE.PENDING                              //initial state of promise
    #value
    #onSuccessBinded = this.#onSuccessBinded.bind(this)
    #onFailureBinded = this.#onFailureBinded.bind(this)

    constructor(callback) {
        try {
            callback(this.#onSuccess, this.#onFailureBind)
        } catch (error) {
            this.#onFailure(error)
        }
    }

    #runCallback(){                                     //running all callbacks
        if (this.#state === STATE.FULLFILLED) {         //when successful
            this.#then_callback.forEach(callback => {
                callback(this.#value)                   //promise is saving a value in a state as fullfilled.
                                                        // we take that value to call all of our .then()
            })

            this.#then_callback = []                    //clearing previous callbacks when multiple .then() are called
        }

        if (this.#state === STATE.REJECTED) {           //when failed
            this.catch_callback.forEach(callback => {
                callback(this.#value)                   //promise is saving a value in a state as rejected.
                                                        // we take that value to call all of our .then()
            })

            this.#catch_callback = []                    //clearing previous callbacks when multiple .then() are called
        }

    }

    #onSuccess(value) {
        if(this.#state !== STATE.PENDING) return
        this.#value = value
        this.#state = STATE.FULLFILLED
        this.#runCallback()
    }

    #onFailure(value){
        if(this.#state !== STATE.PENDING) return
        this.#value = value
        this.#state = STATE.REJECTED
        this.#runCallback()
    }

    then(callback){
        if (then_callback != null) this.#then_callback.push(callback) 
        if (catch_callback != null) this.#catch_callback.push(callback)

       this.#runCallback()                              //to immediately run the callback when .then() is called

    }

    catch(callback){
        this.then(undefined, callback)
    }

    finally(callback){
        this.#finally_callback.push(callback)
    }
}




//--------------------------------------------------------------------//

const p = new poly_Promise((resolve, reject) =>{
    //code
    resolve("Hello")
    reject("Error")
}).then(() => {

}).catch(() => {

})
