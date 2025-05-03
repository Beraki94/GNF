export default {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Short Description',
        type: 'text'
      },
      {
        name: 'postedAt',
        title: 'Date Posted',
        type: 'datetime'
      },
      {
        name: 'readCount',
        title: 'Read Count',
        type: 'number',
        initialValue: 0
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Godlight', value: 'godlight' },
            { title: 'Event', value: 'event' },
            { title: 'Video', value: 'video' }
          ]
        }
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        hidden: ({ parent }) => parent?.category === 'video' // Hide cover image if it's a video
      },
      {
        name: 'youtubeUrl',
        title: 'YouTube Video URL',
        type: 'url',
        hidden: ({ parent }) => parent?.category !== 'video' // Only show YouTube URL if it's a video
      },
      {
        name: 'body',
        title: 'Blog Body (Mixed Content)',
        type: 'array',
        of: [
          { type: 'block' }, // normal text, headings
          {
            type: 'image',
            options: { hotspot: true }
          }
        ]
      }
    ]
  }
  