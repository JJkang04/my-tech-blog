import Link from "next/link";
import { getSortedPostsData } from "../lib/posts"; // 아까 만든 함수를 불러옵니다!

export default function Home() {
  // 함수를 실행해서 마크다운 파일 데이터들을 배열로 가져옵니다.
  const allPostsData = getSortedPostsData();
  
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-4">예비 개발자의 기술 블로그입니다. 반갑습니다</h1>
      <p className="text-gray-600">입대 전 제가 공부한 CS 지식과 개발 기록을 남기는 공간입니다.</p>

      <section>
        <h2 className="text-2xl font-semibold mb-4">최근 게시글</h2>
        {/* 게시글 목록을 보여주는 부분 */}
        <ul className="space-y-4">
          {allPostsData.map(({ id, title, date, description})=> (
            <li key={id} className="border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition">
               {/* 나중에 만들 '글 상세 페이지'로 넘어갈 링크입니다 */}
               <Link href={`/posts/${id}`} className="block">
                  <h3 className="text-xl font-bold text-blue-600 hover:text-blue-800 transtion">{title}</h3>
                  <small className="text-gray-500">{date}</small>
                  <p className="mt-2 text-gray-700">{description}</p>
                </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}