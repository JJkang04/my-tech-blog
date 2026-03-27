import { getPostData } from "../../../lib/posts";

// Next.js 15에서는 params가 Promise 형태이므로 타입을 이렇게 잡아줘야 합니다.
interface PostProps {
  params: Promise<{ id: string }>;
}

export default async function Post({ params }: PostProps) {
  // 1. params가 도착할 때까지 기다립니다(await).
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 2. 알아낸 id로 게시글 데이터를 가져옵니다.
  const postData = await getPostData(id);

  return (
    <article className="py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-black mb-2">{postData.title}</h1>
        <p className="text-gray-500">{postData.date}</p>
      </header>

      {/* 마크다운 본문 */}
      <div 
        className="prose lg:prose-xl prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />
    </article>
  );
}