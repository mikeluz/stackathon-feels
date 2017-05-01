function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function findValueOfWords(str) {
  var arrOfWords = str.split(" ");
  var arrOfFreq = arrOfWords.map(word => {
    for (let i = 0; i < word.length; i++) {
      let sum = 0;
    	sum += (word.charCodeAt(i) * (Math.random() * 10) + arrOfWords.length);
    	return sum;
    }
  })
  return arrOfFreq;
}

function reduceValues(freqs) {
      var feels = freqs.reduce((acc, curr) => {
          return acc.concat(curr);
      });
  var masterFreq = feels.reduce((acc, curr, i) => {
    return acc + curr;
  });
  return (masterFreq / feels.length);
}

// module.exports = {findValueOfWords, reduceValues};