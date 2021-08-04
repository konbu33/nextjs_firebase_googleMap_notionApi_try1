// export NOTION_KEY=""
// export NOTION_DATABASE_ID=""

curl -X POST https://api.notion.com/v1/pages \
  -H "Authorization: Bearer $NOTION_KEY" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2021-05-13" \
  --data "{
    \"parent\": { \"database_id\": \"$NOTION_DATABASE_ID\" },
    \"properties\": {
      \"title\": {
        \"title\": [
          {
            \"text\": {
              \"content\": \"Yurts in Big Sur, California\"
            }
          }
        ]
      }
    }
  }"

