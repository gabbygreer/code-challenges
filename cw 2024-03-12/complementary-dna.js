// <!-- Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input -> output)

// "ATTGC" -> "TAACG"
// "GTAT" -> "CATA" -->

function dnaStrand(dna){
  let result = ''
  for(i = 0; i < dna.length; i++) {
    switch (dna[i]) {
        case 'A':
          result = result + 'T';
          break;
        case 'T':
          result = result + 'A';
          break;
        case 'C':
          result = result + 'G';
          break;
        case 'G':
          result = result + 'C';
          break;
        default:
          return "This is not DNA"
    }
  }
  return result
}

//p: a DNA sequence
//r: complimentary DNA sequence

//steps:
//replace DNA symbols with their complimentary symbols