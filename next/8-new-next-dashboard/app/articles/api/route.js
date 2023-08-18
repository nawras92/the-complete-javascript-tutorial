import { NextResponse } from 'next/server';
import articles from '../../data/articles';

// Get Articles and Single Articles
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id) {
    // Process the get request in the backend
    const article = articles.find((a) => a.id == id);
    if (article) {
      return NextResponse.json({ article });
    } else {
      return NextResponse.json({ error: 'Article does NOT exist' });
    }
  } else {
    return NextResponse.json({ articles });
  }
}

// Add Single Article
export async function POST(request) {
  try {
    const dataReceived = await request.json();
    if (!dataReceived.title) {
      return NextResponse.json({ error: 'title cannot be empty' });
    } else {
      const newArticle = {
        id: articles.length + 1,
        title: dataReceived.title,
        content: dataReceived.content || '',
        description: dataReceived.description || '',
        author: dataReceived.author || '',
        keywords: dataReceived.keywords || [],
        category: dataReceived.category || '',
        createDate: getCurrentDate(),
        updateDate: getCurrentDate(),
      };
      articles.push(newArticle);
      return NextResponse.json({
        success: 'Article got added successfully',
        newArticle,
      });
    }
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}

// Delete Single Article
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id) {
    // Process the get request in the backend
    const article = articles.find((a) => a.id == id);
    if (article) {
      // Delete Article
      const indexToRemove = articles.findIndex((i) => i.id == article.id);
      articles.splice(indexToRemove, 1);
      return NextResponse.json({
        success: 'Article got deleted successfully.',
      });
    } else {
      return NextResponse.json({ error: 'Article does NOT exist' });
    }
  } else {
    return NextResponse.json({ error: 'ID is NOT provided' });
  }
}

// Update Single Article
export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id) {
    // Process the get request in the backend
    const article = articles.find((a) => a.id == id);
    if (article) {
      // Update Article
      const indexToUpdate = articles.findIndex((i) => i.id == article.id);
      const dataReceived = await request.json();
      articles[indexToUpdate].title =
        dataReceived.title || articles[indexToUpdate].title;
      articles[indexToUpdate].content =
        dataReceived.content || articles[indexToUpdate].content;
      articles[indexToUpdate].keywords =
        dataReceived.keywords || articles[indexToUpdate].keywords;
      articles[indexToUpdate].category =
        dataReceived.category || articles[indexToUpdate].category;
      articles[indexToUpdate].author =
        dataReceived.author || articles[indexToUpdate].author;
      articles[indexToUpdate].updateDate = getCurrentDate();
      return NextResponse.json({
        success: 'Article got updated successfully.',
        updatedArticle: articles[indexToUpdate],
      });
    } else {
      return NextResponse.json({ error: 'Article does NOT exist' });
    }
  } else {
    return NextResponse.json({ error: 'ID is NOT provided' });
  }
}
//
//
//Utility to get the current Date
function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
