export default {
  async fetch(request) {
    const TARGET_URL = "https://ntfy.sh/whatsapp-status-123"; // Tumhara ntfy topic
    const body = await request.text();

    const resp = await fetch(TARGET_URL, {
      method: "POST",
      body,
      headers: { "Content-Type": "text/plain" }
    });

    return new Response(await resp.text(), { status: resp.status });
  }
};