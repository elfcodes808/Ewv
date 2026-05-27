export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // This intercepts the specific Discord verification path
    if (url.pathname === '/.well-known/discord') {
      return new Response('dh=cb9c650c1f53824a85b37cfb18e2de8e8ae5e5d5', {
        headers: { 'content-type': 'text/plain' },
      });
    }

    // Default response for your homepage/other paths
    return new Response('Goodcord Test Worker is Live!', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
