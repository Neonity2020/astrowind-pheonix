import { getHighlighter } from 'shiki';

export const shikiConfig = {
  theme: 'github-dark',
  langs: (await getHighlighter()).getLoadedLanguages(),
  wrap: true,
  transformers: [
    {
      name: 'line-numbers',
      options: { showLineNumbers: true },
    },
  ],
};
