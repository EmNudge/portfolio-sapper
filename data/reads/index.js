import { getDateFromPrettyDate, getPrettyDate } from '../../src/utils/date';
import reads from './*.toml'

function getCreatedAtDate(userDate) {
  if (!userDate || userDate === 'N/A') return 'N/A';
  return getPrettyDate(userDate, false);
}

const files = reads
  .map(read => {
    const readAt = getPrettyDate(read.readAt, false);
    const createdAt = getCreatedAtDate(read.createdAt, false);

    return {
      ...read,
      readAt,
      createdAt
    }
  })
  .sort((a, b) => {
    const aDate = getDateFromPrettyDate(a.readAt);
    const bDate = getDateFromPrettyDate(b.readAt);
    return bDate - aDate;
  });

export default files;
