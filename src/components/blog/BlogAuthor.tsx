import { IBlog } from "../../types/blog.type";

const BlogAuthor = ({
  author,
  authorRole,
  authorImage,
  date,
  readTime,
}: Partial<IBlog>) => {
  return (
    <div className="flex items-center">
      <img
        src={authorImage || "/placeholder.svg"}
        alt={author}
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <p className="font-medium text-gray-800">{author}</p>
        <p className="text-sm text-gray-500">{authorRole}</p>
      </div>
      <div className="ml-auto flex items-center text-sm text-gray-500">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{readTime}</span>
      </div>
    </div>
  );
};

export default BlogAuthor;
