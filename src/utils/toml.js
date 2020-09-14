import path from 'path';
import toml from 'toml';

export default () => ({
  transform(file, id) {
    // only work for toml files
    if (path.extname(id) !== '.toml') return null;
    const data = toml.parse(file);

    return {
      code: `export default ${JSON.stringify(data)}`,
      map: { mappings: '' },
    };
  },
});