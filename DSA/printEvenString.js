let str = "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.";

function printEvenString(str){
    let arr = str.split(" ");
    let evenArr = []
    for (let i = 0; i < arr.length; i++) {
        let condition = arr[i].length % 2 === 0;
        if (condition) {
            evenArr.push(arr[i]);
        }
    }
    return evenArr.join(' ');
}
console.log(printEvenString(str));