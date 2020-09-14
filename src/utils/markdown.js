// CREDIT: https://github.com/Charca/sapper-blog-template/blob/master/src/utils/markdown.js

import path from 'path';
import prism from 'prismjs';
import marked from 'marked';
import matter from 'gray-matter';
import { getPrettyDate } from './date';

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text);

  // Do not open internal links on new tab
  if (href.startsWith('/')) return html;

  // Handle hash links to internal elements
  if (href.startsWith('#')) {
    const html = linkRenderer.call(renderer, 'javascript:;', title, text);
    return html.replace(
      /^<a /,
      `<a onclick="document.location.hash='${href.substr(1)}';" `
    );
  }

  return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
};

renderer.code = (code, language) => {
  const parser = prism.languages[language] || prism.languages.html;
  const highlighted = prism.highlight(code, parser, language);
  return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer });

export default () => ({
  transform(md, id) {
    // only work for markdown files
    if (path.extname(id) !== '.md') return null;

    const fileName = path.basename(id);
    const slug = fileName.split('.')[0];
    
    // retrieve frontmatter and everything else using gray-matter
    const { data, content } = matter(md);
    // format date and split up tags
    const date = getPrettyDate(data.date);
    const tags = data.tags.split(/\s*,\s*/);

    const html = marked(content);

    // reading time estimation set at 200wpm 
    const minutes = Math.floor(content.split(/\s+/).length / 200);

    const exportFromModule = JSON.stringify({
      slug,
      html,
      ...data,
      date,
      tags,
      minutes,
    });

    return {
      code: `export default ${exportFromModule}`,
      map: { mappings: '' },
    };
  },
});