# Environment Variables Setup

This project requires the following environment variables to be set in your `.env` file:

## Notion API Configuration
- `NOTION_API_KEY`: Your Notion API integration key
- `NOTION_DATABASE_ID`: The ID of your Notion database containing job listings

## Webhook URLs
- `PUBLIC_WEBHOOK_URL`: Webhook URL for the general contact form (`/contact`)
- `PUBLIC_JOB_WEBHOOK_URL`: Webhook URL for job application forms (`/jobs/[slug]`)

## Note
- Environment variables prefixed with `PUBLIC_` are exposed to the client-side code
- Make sure to never commit your actual `.env` file to version control
- Add `.env` to your `.gitignore` file 