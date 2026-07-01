import type {MetadataRoute} from 'next'; import {getSiteUrl} from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{const base=getSiteUrl();return ['','/analyze','/launch-check','/dashboard','/methodology'].map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path?'monthly':'weekly',priority:path?0.7:1}))}
