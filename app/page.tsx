// app/page.tsx
import { getSortedPostsData,getAllCategories } from "../lib/posts";
import { PostList } from "./components/post-list"; // 새로 만들 컴포넌트
import { FadeIn } from "./components/motion-wrapper";
import Link from "next/link";

export default function Home() {
  const allPostsData = getSortedPostsData(); // 서버에서 안전하게 데이터를 가져옴
  const categories = getAllCategories();

  return (
    <FadeIn>
      <div className="py-10">
        <h1 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">예비 개발자의 기술 블로그입니다</h1>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat:string) => (
            <Link
              key={cat}
              href={`/categories/${cat}`}
              className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400
              rounded-full text-sm hover:bg-blue-500 hover:text-white transition-colors duration-300">
                #{cat}
              </Link>
          ))}
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">최근 게시글 </h2>
          {/* 애니메이션이 필요한 리스트 부분만 클라이언트 컴포넌트로 전달 */}
          <PostList posts={allPostsData} />
        </section>
      </div>
    </FadeIn>
  );
}