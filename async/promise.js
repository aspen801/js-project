import fs from 'fs';
const { promises: fsp } = fs;

const reverse = (filePath) => {
    fsp.readFile(filePath, 'utf-8')
        .then((data) => data.split("").reverse().join(""))
        .then((data) => fsp.writeFile(filePath, data))
}

reverse('testfile');