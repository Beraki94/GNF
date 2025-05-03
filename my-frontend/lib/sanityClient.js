// lib/sanityClient.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '6g8fr8st',         // from sanity.config.ts
  dataset: 'godlight_project',   // from sanity.config.ts
  apiVersion: '2024-05-01',      // today's date or your preferred version
  useCdn: true,                  // faster, but cached
})

