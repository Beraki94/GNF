import PageHeader from '@/components/pageHeader/PageHeader'
import React from 'react'
import BlogPost from './BlogPost'
import "./blog.css"

const page = () => {
  return (
    <div className='learn__page'>
        <PageHeader title="News & Stories" pageImage={"/page4.jpg"}/>
        <BlogPost/>
    </div>
  )
}

export default page