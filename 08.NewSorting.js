function newSorting(array) {
    let sorted = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });



    console.log(sorted);
}
newSorting(['Miroslav',
    'Tzarev',
    'Milena',
    'Baicheva',
    'Daniel', `Tzarev`]
)