import Image from "next/image";
import Link from "next/link";

const BlogPostGrid = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post) => (
      <article
        key={post.slug}
        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group flex flex-col"
      >
        <Link
          href={`/blog/${post.slug}/`}
          className="relative w-full h-56 overflow-hidden bg-white flex items-center justify-center"
        >
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
            {post.category && <span className="uppercase tracking-wide">{post.category}</span>}
            {post.date && <span>{post.date}</span>}
          </div>
          <Link href={`/blog/${post.slug}/`}>
            <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#306777] transition-colors">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
          <div className="mt-auto flex items-center justify-between">
            {post.readTime && <span className="text-sm text-gray-500">{post.readTime}</span>}
            <Link href={`/blog/${post.slug}/`} className="text-[#306777] font-semibold hover:underline">
              Read more →
            </Link>
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default BlogPostGrid;
