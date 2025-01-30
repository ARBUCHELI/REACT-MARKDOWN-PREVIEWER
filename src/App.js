import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const contentDefault = `
# Welcome to the React Markdown Previewer!

## This is a sub-heading...

### Here's more cool stuff:

Inline code: \`<div></div>\`

\`\`\`javascript
// Multi-line code example:
function example() {
  console.log("Hello, world!");
}
\`\`\`

**Bold**, _italic_, or **_both_**!

> Block Quotes are fun!

1. Numbered lists.
2. Easy to create.
3. Very useful.

- Bullet points
  - Nested items
    - More nesting

[Visit my portfolio](https://bucheli-web-personal-portfolio-website.netlify.app)

![Sample Logo](https://bucheli-web-personal-portfolio-website.netlify.app/company-logo-6.png)
`;

function App() {
  const [content, setContent] = useState(contentDefault);

  return (
    <div className="app">
      <h1 id="inner_header">REACT MARKDOWN PREVIEWER</h1>
      <div className="markdown-container">
        <textarea
          id="editor"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </div>
    </div>
  );
}

export default App;
