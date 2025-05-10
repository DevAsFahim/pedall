const BlogDetailContent = ({ content }: {content: string}) => {
  return <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
}

export default BlogDetailContent
