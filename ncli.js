const { Client } = require('@notionhq/client');
require('./next.config.js')

const notion = new Client({ auth: process.env.NOTION_API_KEY });

console.log('notion_api_key: ', process.env.NOTION_API_KEY);

(async () => {
  const response = await notion.search({
    query: '22',
    sort: {
      direction: 'ascending',
      timestamp: 'last_edited_time',
    },
  });
  console.log(JSON.stringify(response,null,4));
})();

