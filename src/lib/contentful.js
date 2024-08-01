import contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const { createClient } = contentful;

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchJobs() {
  const entries = await contentfulClient.getEntries({ content_type: 'job' });
  return entries.items.map((entry) => ({
    id: entry.fields.id,
    title: entry.fields.title,
    company: entry.fields.company,
    description: documentToHtmlString(entry.fields.description),
    area: entry.fields.area,
    salary: entry.fields.salary,
    dormitory: documentToHtmlString(entry.fields.dormitory),
    interviewday: documentToHtmlString(entry.fields.interviewday),
  }));
}

export async function fetchJobById(id) {
  const entries = await contentfulClient.getEntries({
    content_type: 'job',
    'fields.id': id,
  });
  const job = entries.items[0];
  return job ? {
    id: job.fields.id,
    title: job.fields.title,
    company: job.fields.company,
    description: documentToHtmlString(job.fields.description),
    area: job.fields.area,
    salary: job.fields.salary,
    dormitory: documentToHtmlString(job.fields.dormitory),
    interviewday: documentToHtmlString(job.fields.interviewday),
  } : null;
}