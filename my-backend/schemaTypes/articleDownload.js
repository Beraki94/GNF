export default {
    name: 'articleDownload',
    title: 'Article Download',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title of the Article',
        type: 'string'
      },
      {
        name: 'author',
        title: 'Author Name',
        type: 'string'
      },
      {
        name: 'file',
        title: 'Upload PDF or DOC file',
        type: 'file',
        options: {
          accept: '.pdf,.doc,.docx' // restrict upload to PDF or Word documents
        }
      }
    ]
  }
  