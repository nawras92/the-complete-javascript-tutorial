import { NextResponse } from 'next/server';
import articles from '../../data/articles';
import { backendUrl } from '../../website-config';

// Get Articles and Single Articles
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id) {
    // Process the get request in the backend
    const response = await fetch(backendUrl + '/api/articles.php?id=' + id);
    const result = await response.json();
    if (result['status'] === 'success') {
      return NextResponse.json({
        ok: true,
        data: result['data'],
      });
    } else {
      return NextResponse.json({
        ok: false,
        code: result?.error?.code,
        message: `Backend Error (${result?.error?.code}): ${result?.error?.message}`,
      });
    }
  } else {
    // All articles
    // Fetch from PHP backend
    const response = await fetch(backendUrl + '/api/articles.php');
    const result = await response.json();
    //status, data, message, error
    if (result['status'] === 'success') {
      return NextResponse.json({
        ok: true,
        data: result['data'],
      });
    } else {
      return NextResponse.json({
        ok: false,
        code: result?.error?.code,
        message: `Backend Error (${result?.error?.code}): ${result?.error?.message}`,
      });
    }
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
        title: dataReceived.title,
        content: dataReceived.content || '',
        description: dataReceived.description || '',
        author_id: dataReceived.author_id || 1,
        keywords: dataReceived.keywords || '',
        category: dataReceived.category || '',
      };
      const response = await fetch(backendUrl + '/api/articles.php', {
        method: 'POST',
        body: JSON.stringify(newArticle),
      });
      const data = await response.json();
      return NextResponse.json(data);
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
    const response = await fetch(backendUrl + '/api/articles.php?id=' + id, {
      method: 'DELETE',
    });
    const data = await response.json();
    return NextResponse.json({ success: true, message: data?.message });
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
    const dataReceived = await request.json();
    const response = await fetch(backendUrl + '/api/articles.php?id=' + id, {
      method: 'PUT',
      body: JSON.stringify(dataReceived),
    });
    const data = await response.json();
    return NextResponse.json(data);
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
