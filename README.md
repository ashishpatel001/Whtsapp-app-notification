
# WhatsApp Online/Offline Tracker

Track multiple WhatsApp contacts and get **online/offline notifications** via the [ntfy](https://ntfy.sh) service.  
This setup bypasses WhatsApp’s CSP (Content Security Policy) restrictions using **Cloudflare Workers**.

---

## Features
- Tracks multiple contacts simultaneously
- Sends real-time notifications via ntfy
- Bypasses CSP using Cloudflare Worker proxy
- Separate **online** and **offline** counters
- Manual and automatic daily counter reset
- Lightweight and works on mobile (Kiwi/Lamour browsers)

---

## Requirements

- **Browser**:  
  - [Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser) or  
  - [Lamour Browser](https://play.google.com/store/apps/details?id=com.lamour.browser)

- **Extensions**:  
  - [Tampermonkey](https://www.tampermonkey.net/)  
  - CSP Unblocker (search in extension store)

- **ntfy App**:  
  - [Download from Play Store](https://play.google.com/store/apps/details?id=io.heckel.ntfy)

- **Cloudflare Account** (free) to create Worker proxy

---

## Setup Instructions

### 1. Install Browser and Extensions
- Install **Kiwi** or **Lamour Browser** on your phone.
- Add two extensions:
  1. **Tampermonkey**
  2. **CSP Unblocker**

---

### 2. Set Up ntfy
1. Download ntfy app from Play Store.
2. Open ntfy → Configure your server (default is `https://ntfy.sh`).
3. Copy your **topic URL** (this is where notifications will be sent).

---

### 3. Create Cloudflare Worker (Proxy)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).  
2. Navigate to **Workers & Pages → Create Worker**.  
3. Replace default code with this Worker script:

```javascript
export default {
  async fetch(request) {
    const ntfyUrl = "https://ntfy.sh/YOUR_TOPIC"; // Replace with your ntfy topic link

    const body = await request.text();

    const resp = await fetch(ntfyUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: body
    });

    return new Response("Notification sent via Worker");
  }
}

4. Deploy the Worker.


5. Copy the Worker URL (e.g., https://yourname.workers.dev/).




---

4. Configure WhatsApp Tracker Script

1. Open Tampermonkey → Create a new script.


2. Paste the tracker script (from tracker.js).


3. Find this line in the script:



const proxyUrl = "https://floral-cell-1a10.ashishsinvns.workers.dev/";

4. Replace it with your Worker URL from Step 3.


5. Save the script.




---

5. Run

Open web.whatsapp.com in Kiwi/Lamour browser.

The script will start tracking your defined contacts.

Notifications will appear via ntfy app.



---

6. Backup Proxy URL

Save your Worker proxy URL in a .txt file for future use.



---

Notes

CSP Unblocker must remain enabled.

WhatsApp tab must stay open for tracking to work.

Modify contacts array in the script to track different names.



---

Credits

Notifications powered by ntfy

CSP bypass using Cloudflare Workers



---
