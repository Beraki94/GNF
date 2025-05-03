import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'GodLight Nigeria Foundation',

  projectId: '6g8fr8st',
  dataset: 'godlight_project',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
