import PageHeader from '@/components/pageHeader/PageHeader'
import React from 'react'
import BlogPost from './BlogPost'

const page = () => {
  return (
    <div>
        <PageHeader title="News & Stories" pageImage={"/page4.jpg"}/>
        <BlogPost/>
    </div>
  )
}

export default page