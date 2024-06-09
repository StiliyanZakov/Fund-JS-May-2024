function printDNA(length) {
    const sequence = 'ATCGTTAGGG';
    let sequenceIndex = 0;

    for (let i = 0; i < length; i++) {
        switch (i % 4) {
            case 0:
                console.log(`**${sequence[sequenceIndex % sequence.length]}${sequence[(sequenceIndex + 1) % sequence.length]}**`);
                break;
            case 1:
                console.log(`*${sequence[sequenceIndex % sequence.length]}--${sequence[(sequenceIndex + 1) % sequence.length]}*`);
                break;
            case 2:
                console.log(`${sequence[sequenceIndex % sequence.length]}----${sequence[(sequenceIndex + 1) % sequence.length]}`);
                break;
            case 3:
                console.log(`*${sequence[sequenceIndex % sequence.length]}--${sequence[(sequenceIndex + 1) % sequence.length]}*`);
                break;
        }
        sequenceIndex += 2;
    }
}

// Test the function with provided examples
//printDNA(4);
// Output:
// **AT**
// *C--G*
// T----T
// *A--G*

//printDNA(10);
// Output:
// **AT**
// *C--G*
// T----T
// *A--G*
// **GG**
// *A--T*
// C----G
// *T--T*
// **AG**
// *G--G*