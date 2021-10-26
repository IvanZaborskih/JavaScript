function DNAStrand(dna) {
    let dnaArray = dna.split('');

    for (let i = 0; i < dnaArray.length; i++) {
        switch (dnaArray[i]) {
            case 'T':
                dnaArray[i] = 'A';
                break;
            case 'A':
                dnaArray[i] = 'T';
                break;
            case 'C':
                dnaArray[i] = 'G';
                break;
            case 'G':
                dnaArray[i] = 'C';
                break;
        }
    }

    return dnaArray.join('');
}

console.log(DNAStrand("ATTGC"));

// C -> G
// A -> T
// T -> A
// G -> C