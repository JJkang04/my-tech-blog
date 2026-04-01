"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function WritePage() {
    const [formData, setFormData] = useState({title: '', content: '',
        category: '', description: '',password: ''});
        const router = useRouter();

        const handleSubmit = async (e:React.FormEvent) => {
            e.preventDefault();
            const res = await fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            if(res.ok){
                alert('글 등록 성공. 잠시 후 깃허브 배포가 완료되면 확인 가능합니다.');
                router.push('/');
            } else {
                alert('등록 실패');
            }
        };

    return (
    <div className="py-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">새 글 작성하기 </h1>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
        <input 
          className="p-3 border rounded dark:bg-zinc-900 dark:border-zinc-800"
          placeholder="제목" 
          onChange={(e) => setFormData({...formData, title: e.target.value})} 
        />
        <input 
          className="p-3 border rounded dark:bg-zinc-900 dark:border-zinc-800"
          placeholder="카테고리" 
          onChange={(e) => setFormData({...formData, category: e.target.value})} 
        />
        <input 
          className="p-3 border rounded dark:bg-zinc-900 dark:border-zinc-800"
          placeholder="짧은 설명" 
          onChange={(e) => setFormData({...formData, description: e.target.value})} 
        />
        <textarea 
          className="p-3 border rounded h-64 dark:bg-zinc-900 dark:border-zinc-800"
          placeholder="본문 내용을 마크다운으로 작성하세요" 
          onChange={(e) => setFormData({...formData, content: e.target.value})} 
        />
        <input 
          type="password"
          className="p-3 border rounded dark:bg-zinc-900 dark:border-zinc-800"
          placeholder="관리자 비밀번호" 
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
        />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700">
          글 등록하기
        </button>
      </form>
    </div>

    );
}