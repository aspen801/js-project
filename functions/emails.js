// chaining of .filter, .map and .reduce 

import _ from 'lodash';

const freeEmailDomains = ['gmail.com', 'yandex.ru', 'hotmail.com'];

const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];

const getFreeDomainsCount = (emails) => {
  const freeDomainsList = emails
    .filter((email) => freeEmailDomains.includes(email.split('@')[1]))
    .map((email) => email.split('@')[1])
    .reduce((accumulator, email) => {
      if (_.get(accumulator, email) === undefined) {
        accumulator[email] = 0;
      }
      accumulator[email] += 1;
      return accumulator;
    }, {});

  console.log(freeDomainsList);
};

getFreeDomainsCount(emails);
