const BACKEND_URL = 'https://script.google.com/macros/s/AKfycbxLom2azjH_kR-5k1T9aMdxGxl9NoF7sbqY1rIxbXWZsDK4v33yub7Ru1TkbGgPF-E9/exec';

module.exports = async function handler(request, response) {
  if (request.method !== 'GET') {
    response.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const upstream = await fetch(`${BACKEND_URL}?action=public`, {
      headers: { accept: 'application/json' },
      redirect: 'follow',
    });
    const body = await upstream.text();
    response.status(upstream.status).setHeader('content-type', 'application/json; charset=utf-8').send(body);
  } catch (error) {
    console.error('Public data proxy failed', error);
    response.status(502).json({ error: 'Backend data unavailable' });
  }
}
