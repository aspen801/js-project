import _ from 'lodash';

const countWords = (sentence) => {
    const result = {};
    
    var words = sentence.toLowerCase();
    words = _.words(words);

    for(const word of words){
        result[word] = (result[word] ?? 0) + 1;
    }

    return result;
}

export default countWords;