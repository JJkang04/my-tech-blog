import { getPostData } from "../../../lib/posts";
import Comments from "../../components/comments";

interface PostProps {
  params: Promise<{ id: string }>;
}

export default async function Post({ params }: PostProps) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <article className="py-10">
      {/* (A) 제목 섹션 - Frontmatter의 title을 사용 */}
      <header className="mb-10 pb-5 border-b border-gray-200 dark:border-zinc-800">
        <h1 className="text-4xl font-black mb-3 dark:text-white">
          {postData.title}
        </h1>
        <p className="text-gray-500">{postData.date}</p>
      </header>

      {/* (B) 본문 섹션 - 변환된 HTML 사용 */}
      <div 
        className="prose dark:prose-invert lg:prose-xl max-w-none prose-pre:p-0"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />
      <Comments />
    </article>
  );
}

