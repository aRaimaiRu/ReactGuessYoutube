const createNumeralArray = (n) => [...Array(n).keys()];
const uniqueArray = items =>  [...new Set(items)]
const jsonObjectTolist = n => Object.values(n)
const filterByVote = (t) => {
  //    console.log( Object.keys( t.key ).length ) ;
  //    console.log(t.vote1)

  const filterKeyArray = createNumeralArray(Object.keys(t.vote1).length).reduce(
    (sum, c) => (t.vote1[c] > 16 ? [...sum, c] : sum),
    []
  );
  //console.log(filterKeyArray)
  const newKey = filterKeyArray.map((i) => t.key[i]);
  const newName = filterKeyArray.map((i) => t.name[i]);
  const newVote1 = filterKeyArray.map((i) => t.vote1[i]);
  const newVote2 = filterKeyArray.map((i) => t.vote2[i]);
  const newYear = filterKeyArray.map((i) => t.year[i]);
  console.log({
    key: newKey,
    name: newName,
    vote1: newVote1,
    vote2: newVote2,
    year: newYear,
  });
  return {
    key: newKey,
    name: newName,
    vote1: newVote1,
    vote2: newVote2,
    year: newYear,
  };
};

export { filterByVote, createNumeralArray,jsonObjectTolist ,uniqueArray};
