// lib/imageBuilder.js
import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanityClient'

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
