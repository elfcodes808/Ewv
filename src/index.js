export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // This catches the Discord bot path and sends the token text
    if (url.pathname === '/.well-known/discord') {
      return new Response('dh=cb9c650c1f53824a85b37cfb18e2de8e8ae5e5d5', {
        headers: { 'content-type': 'text/plain' },
      });
    }

    // This is what shows up on your main homepage
    return new Response('Goodcord Test Site is Live!', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
