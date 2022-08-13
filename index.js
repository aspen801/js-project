import normalize from './normalize.js';
import compareObjects from './compare.js';
import getDomainInfo from './domain.js';
import countWords from './words.js';

const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ колек',
};

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };

const company3 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company4 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };

console.log(compareObjects(company1, company2));
console.log(compareObjects(company3, company4));

normalize(lesson)
console.log(lesson);
console.log(getDomainInfo('http://github.com/aspen801/js-project/blob/main/domain.js'));
console.log(countWords('lorem LOrEm  ipsum   forem aren    gobel    IpSuM   gObel     GobEl'))


