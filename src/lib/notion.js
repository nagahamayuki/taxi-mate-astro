import 'dotenv/config';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// 求人一覧を取得
export async function getJobsFromNotion() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: '募集状況',
      select: {
        equals: '募集中',
      },
    },
  });

  return response.results.map((page) => {
    return {
      id: page.id,
      title:
        page.properties['No.']?.title?.[0]?.plain_text || '求人タイトルなし',
      company: page.properties['会社名']?.rich_text?.[0]?.plain_text || '',
      location:
        page.properties['営業所（勤務地）']?.rich_text?.[0]?.plain_text || '',
      group:
        page.properties['グループ']?.multi_select?.map((opt) => opt.name) || [],
      status: page.properties['募集状況']?.select?.name || '',
      dispatchApps:
        page.properties['配車アプリ・無線']?.multi_select?.map(
          (opt) => opt.name,
        ) || [],
      headOffice: page.properties['本社']?.rich_text?.[0]?.plain_text || '',
      notionUrl: page.public_url || page.url,
    };
  });
}

// 最新の求人3件を取得
export async function getLatestJobsFromNotion() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: '募集状況',
      select: {
        equals: '募集中',
      },
    },
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
    page_size: 3,
  });

  return response.results.map((page) => {
    return {
      id: page.id,
      title:
        page.properties['No.']?.title?.[0]?.plain_text || '求人タイトルなし',
      company: page.properties['会社名']?.rich_text?.[0]?.plain_text || '',
      location:
        page.properties['営業所（勤務地）']?.rich_text?.[0]?.plain_text || '',
      group:
        page.properties['グループ']?.multi_select?.map((opt) => opt.name) || [],
      status: page.properties['募集状況']?.select?.name || '',
      dispatchApps:
        page.properties['配車アプリ・無線']?.multi_select?.map(
          (opt) => opt.name,
        ) || [],
      headOffice: page.properties['本社']?.rich_text?.[0]?.plain_text || '',
      notionUrl: page.public_url || page.url,
    };
  });
}

// 求人詳細を取得（ID指定）
export async function getJobByIdFromNotion(jobId) {
  const response = await notion.pages.retrieve({
    page_id: jobId,
  });

  return {
    id: response.id,
    title:
      response.properties['No.']?.title?.[0]?.plain_text || '求人タイトルなし',
    company: response.properties['会社名']?.rich_text?.[0]?.plain_text || '',
    location:
      response.properties['営業所（勤務地）']?.rich_text?.[0]?.plain_text || '',
    group:
      response.properties['グループ']?.multi_select?.map((opt) => opt.name) ||
      [],
    status: response.properties['募集状況']?.select?.name || '',
    dispatchApps:
      response.properties['配車アプリ・無線']?.multi_select?.map(
        (opt) => opt.name,
      ) || [],
    headOffice: response.properties['本社']?.rich_text?.[0]?.plain_text || '',
    // 追加項目
    features: response.properties['特徴']?.rich_text?.[0]?.plain_text || '',
    departureTime:
      response.properties['出庫時間']?.rich_text?.[0]?.plain_text || '',
    trainingPeriod:
      response.properties['研修期間について']?.rich_text?.[0]?.plain_text || '',
    workingHours:
      response.properties['隔勤の実働時間']?.rich_text?.[0]?.plain_text || '',
    commuteMethods:
      response.properties['通勤手段']?.multi_select?.map((opt) => opt.name) ||
      [],
    jobName: response.properties['求人名']?.rich_text?.[0]?.plain_text || '',
    salaryGuarantee:
      response.properties['給与保証について']?.rich_text?.[0]?.plain_text || '',
    notionUrl: response.public_url || response.url,
    // タイムスタンプ情報を追加
    created_time: response.created_time,
    last_edited_time: response.last_edited_time,
  };
}
