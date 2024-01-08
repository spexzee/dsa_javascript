var createCounter = function (init) {
    return {
        value: init,
        increment: function () {
            return ++this.value;
        },
        reset: function () {
            return this.value = init;
        },
        decrement: function () {
            return --this.value;
        }
    };
};


const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
