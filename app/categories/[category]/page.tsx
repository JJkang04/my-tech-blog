import { getPostsByCategory } from "../../../lib/posts";
import { PostList } from "../../components/post-list";
import { FadeIn } from "../../components/motion-wrapper";

interface CategoryProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryProps) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category); // URL 인코딩 대응
  const posts = getPostsByCategory(decodedCategory);

  return (
    <FadeIn>
      <div className="py-10">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">
          <span className="text-blue-600">#{decodedCategory}</span> 글 목록
        </h1>
        <PostList posts={posts} />
      </div>
    </FadeIn>
  );
}