import 'dotenv/config'
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getJobsFromNotion() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  return response.results.map((page) => {
    return {
      id: page.id,
      title: page.properties['No.']?.title?.[0]?.plain_text || '求人タイトルなし',
      company: page.properties['会社名']?.rich_text?.[0]?.plain_text || '',
      location: page.properties['営業所（勤務地）']?.rich_text?.[0]?.plain_text || '',
      group: page.properties['グループ']?.multi_select?.map(opt => opt.name) || [],
      status: page.properties['募集状況']?.select?.name || '',
      dispatchApps: page.properties['配車アプリ・無線']?.multi_select?.map(opt => opt.name) || [],
      headOffice: page.properties['本社']?.rich_text?.[0]?.plain_text || '',
      notionUrl: page.public_url || page.url,
    };
  });
}