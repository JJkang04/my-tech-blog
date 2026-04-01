import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'posts');

// 목록 가져오기
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
  .filter((fileName) => fileName.endsWith('.md'))
  .map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { title: string; date: string; description: string; category:string }),
    };
  })
  .filter((post) => post.title != undefined);
  
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 상세 데이터 가져오기
// lib/posts.ts

export async function getPostData(id: string) {
  // 1. decodeURIComponent를 사용해 암호화된 URL(%EA%B8...)을 다시 한글로 바꿉니다.
  const decodedId = decodeURIComponent(id); 

  // 2. 디코딩된 한글 이름으로 파일 경로를 만듭니다.
  const fullPath = path.join(postsDirectory, `${decodedId}.md`);
  
  // 3. 이제 파일을 읽습니다.
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // 4. 메타데이터와 본문 분리
  const { data, content } = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki, {
      theme: 'github-dark',
    })
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    id: decodedId, // 반환할 때도 한글 ID를 넘겨주면 좋습니다.
    contentHtml,
    ...(data as { date: string; title: string }),
  };
}

export function getAllCategories() {
  const allPosts = getSortedPostsData();
  const categories = allPosts.map(post => post.category).filter(Boolean);
  return Array.from(new Set(categories))
}

export function getPostsByCategory(category:string) {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => post.category === category);
}