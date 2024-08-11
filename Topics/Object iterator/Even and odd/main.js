function sumTheArrays(naturalNumbers) {
  let result = new Array(naturalNumbers.even.length);
  for (i = 0; i < naturalNumbers.even.length; i++) {
    result[i] = naturalNumbers.even[i] + naturalNumbers.odd[i];
  }
  return result;
}