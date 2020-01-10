function reverseVowels (string) {
  const isVowel = char => (/^[aeiou]$/i).test(char)
  const array = string.split('');
  const vowels = array.filter(char => isVowel(char));
  const reducer = (acc, cv) => isVowel(cv) ? acc + vowels.pop() : acc + cv;
  return array.reduce(reducer, '');
}

module.exports = reverseVowels