// G -> C
// C -> G
// T -> A
// A -> U

const dnaToRna = (dna) => {
    rna = '';
  
    if (!dna) {
      console.log('Строка пустая!');
    }
    
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] === 'G') {
        rna += 'C';
      } else if (dna[i] === 'C') {
        rna += 'G';
      } else if (dna[i] === 'T') {
        rna += 'A';
      } else if (dna[i] === 'A') {
        rna += 'U';
      } else {
        return null;
      }
  
    }
    return rna;
  };
  
  dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'