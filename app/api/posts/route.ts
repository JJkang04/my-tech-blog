import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {title, content, category, password, description} = await request.json();

    //비밀번호 틀리면 거절
    if (password != process.env.ADMIN_PASSWORD) {
        return NextResponse.json({message: '비밀번호가 틀렸습니다'},{status: 401});
    }

    const fileName = `${title.replace(/\s+/g, '-').toLowerCase()}.md`;
    const date = new Date().toISOString().split('T')[0];

    //md 파일 내용 새엉
    const fileContent = `--- 
title: "${title}"
date: "${date}"
description: "${description}"
category: "${category}"
---

${content}`;

    //깃허브 api로 파일 생성 요청

    const response = await fetch(
        `https://api.github.com/repos/${process.env.GITHUB_REPO}/contents/posts/${fileName}`,
        {
            method: 'PUT',
            headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: `Add new post: ${title}`,
                content: Buffer.from(fileContent).toString('base64'),
            }),
        }
    );

    if(response.ok) {
        return NextResponse.json({message: '등록되었습니다.'});

    } else{
        const error = await response.json();
        return NextResponse.json({message: 'Github API 에러'}, {status:500});
    }
}