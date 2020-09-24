const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function countLetters (string) {
    let letterQ = 0;
    for (let i = 0; i < string.length; i++) {
        letterQ++
    }
    return letterQ;
}

function getRow(firstRow, secondRow) {
    return countLetters(firstRow) > countLetters(secondRow) ? firstRow : secondRow;
}

console.log(getRow(firstRow, secondRow));
