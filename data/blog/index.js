import { getDateFromPrettyDate, getPrettyDate } from '../../src/utils/date';
import posts from './*.md';

posts
  .sort((a, b) => {
    const aDate = getDateFromPrettyDate(a.date);
    const bDate = getDateFromPrettyDate(b.date);

    return bDate - aDate;
  });

export default posts;
