// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

const commentsCollection = defineCollection();
const lyricsCollection = defineCollection();
const teamCollection = defineCollection();
const blogCollection = defineCollection();

export const collections = {
  'comments': commentsCollection,
  'lyrics': lyricsCollection,
  'team': teamCollection,
  'blog': blogCollection,
};