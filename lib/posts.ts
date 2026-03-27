import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// posts 폴더의 경로를 잡아줍니다. (프로젝트 루트/posts)
const postsDirectory = path.join(process.cwd(), 'posts');

// 모든 게시글의 데이터를 가져오는 함수
export function getSortedPostsData() {
  // posts 폴더 안의 모든 파일 이름을 읽어옵니다. (예: ['my-first-post.md'])
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    // 파일 이름에서 '.md'를 제거해서 id로 씁니다. (예: 'my-first-post')
    const id = fileName.replace(/\.md$/, '');

    // 파일의 전체 경로를 만들고, 파일 내용을 문자열로 읽어옵니다.
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter를 사용해 파일 메타데이터(제목, 날짜 등)를 파싱합니다.
    const matterResult = matter(fileContents);

    // 데이터들을 하나로 묶어서 반환합니다.
    return {
      id,
      ...(matterResult.data as { title: string; date: string; description: string }),
    };
  });

  // 날짜순으로 내림차순 정렬 (최신 글이 먼저 오도록)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

import { remark } from 'remark';
import html from 'remark-html';

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...(matterResult.data as {date: string;title: string}),
    };
}