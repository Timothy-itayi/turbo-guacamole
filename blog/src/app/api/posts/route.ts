import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error in API handler:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, content } = await request.json();

    // Input validation
    if (!title || !description || !content) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const newPost = await prisma.post.create({
      data: { title, description, content },
    });
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error in API handler:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
