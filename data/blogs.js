import fs from 'fs';
import path from 'path';
import { getDateFromPrettyDate, getPrettyDate } from '../src/utils/date';

const pathName = path.join(__dirname, '../../../src/routes/blog');

const filesPromise = fs.readdirSync(pathName)
  .filter(fileName => fileName.endsWith('.svx'))
  .map(async fileName => {
    const filePath = path.join(pathName, fileName);
    const data = await require(filePath);
    console.log({ data })
    return data;
  })

export default Promise.all(filesPromise)