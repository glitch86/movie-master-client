import { Calendar, Eye, Clock, Tag } from "lucide-react";

const BlogCard = ({ blog }) => {
  const {
    title,
    excerpt,
    thumbnail,
    author,
    publishDate,
    readTime,
    views,
    tags,
  } = blog;

  return (
    <div className="group bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="h-52 w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h2 className="text-xl font-bold line-clamp-2">{title}</h2>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar size={16} />
            {publishDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} />
            {readTime}
          </span>
          <span className="flex items-center gap-1">
            <Eye size={16} />
            {views}
          </span>
        </div>

        {/* Excerpt */}
        <p className="text-gray-400 line-clamp-3">{excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-base-200"
            >
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3">
          <span className="text-sm font-medium">By {author}</span>
          <button className="btn btn-sm btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
