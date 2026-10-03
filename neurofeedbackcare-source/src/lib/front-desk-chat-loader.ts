/**
 * Front Desk AI chat widget — shared constants + mount logic.
 * Mirrors https://book.frontdesk.care/chat-widget.js (practice id from embed).
 *
 * ---------------------------------------------------------------------------
 * STATUS (2026-08-04) — LEAVE INTEGRATION IN PLACE
 * ---------------------------------------------------------------------------
 * Official embed from Front Desk AI:
 *   <script src="https://book.frontdesk.care/chat-widget.js"
 *           data-frontdesk-chat="7i5hlps1" async></script>
 *
 * Site integration is intentional and SPA-safe:
 * - SSR bootstrap via TanStack ScriptOnce in src/routes/__root.tsx
 * - Defensive client mount via src/components/front-desk-chat-widget.tsx
 * - Mobile offset for #frontdesk-chat-frame in src/styles.css
 *
 * Local/build preview has loaded chat-widget.js + iframe#frontdesk-chat-frame
 * successfully. If the bubble still does not appear on the live Netlify demo,
 * treat that as a possible incomplete/unfinished vendor feature (or domain
 * allowlist on their side), not necessarily a bug in our embed.
 *
 * DO NOT rip this out without a deliberate decision. Prefer leaving the code
 * so when Front Desk AI finishes the product (or allowlists the domain), the
 * bubble can start working without another multi-day integration.
 *
 * FUTURE CORRECTION CHECKLIST (if bubble still missing after vendor is ready):
 * 1. Confirm practice id 7i5hlps1 is still correct in Front Desk dashboard.
 * 2. Network tab: chat-widget.js 200? iframe …/7i5hlps1/chat-widget 200?
 * 3. DOM: single #frontdesk-chat-frame; no CSP blocking book.frontdesk.care.
 * 4. Ask vendor whether production domains (*.netlify.app, later
 *    neurofeedbackcare.com) must be allowlisted.
 * 5. Re-fetch chat-widget.js — their loader may change; update this file to
 *    match (currentScript vs data attribute remains the main SPA pitfall).
 * 6. Toggle off: remove ScriptOnce from __root.tsx, FrontDeskChatWidget from
 *    site-shell.tsx, and (optionally) this module — keep call/text Front Desk.
 * ---------------------------------------------------------------------------
 */
export const FRONT_DESK_CHAT = {
  practiceId: "7i5hlps1",
  origin: "https://book.frontdesk.care",
  scriptSrc: "https://book.frontdesk.care/chat-widget.js",
  scriptId: "frontdesk-chat-loader",
  frameId: "frontdesk-chat-frame",
  dataAttr: "data-frontdesk-chat",
} as const;

/**
 * Inline bootstrap string for TanStack ScriptOnce (SSR HTML).
 * Loads the official chat-widget.js with data-frontdesk-chat set, then falls
 * back to mounting the iframe the same way the official loader does if the
 * script does not create a frame (SPA / currentScript edge cases).
 */
export function getFrontDeskChatBootstrapScript(): string {
  const { practiceId, origin, scriptSrc, scriptId, frameId, dataAttr } =
    FRONT_DESK_CHAT;
  // Minified-friendly IIFE — no template dependency on React.
  return `(()=>{try{var P=${JSON.stringify(practiceId)},O=${JSON.stringify(origin)},SID=${JSON.stringify(scriptId)},FID=${JSON.stringify(frameId)},ATTR=${JSON.stringify(dataAttr)},SRC=${JSON.stringify(scriptSrc)};if(document.getElementById(FID))return;function mountFrame(){if(document.getElementById(FID))return;var C={width:"170px",height:"72px"},E={width:"400px",height:"640px"},M=16,f=document.createElement("iframe");f.id=FID;f.title="Book an appointment";f.src=O+"/"+encodeURIComponent(P)+"/chat-widget";f.setAttribute("allow","clipboard-write");f.style.cssText="position:fixed;bottom:"+M+"px;right:"+M+"px;width:"+C.width+";height:"+C.height+";max-width:100vw;max-height:100vh;border:0;background:transparent;z-index:2147483640;transition:width .25s ease,height .25s ease;color-scheme:normal";function pos(p,ox,oy){var x=M+(Number(ox)||0),y=M+(Number(oy)||0);f.style.bottom=y+"px";if(p==="bottom-left"){f.style.left=x+"px";f.style.right="auto"}else{f.style.right=x+"px";f.style.left="auto"}}function resize(open){var s=open?E:C;if(open&&window.innerWidth<480){f.style.width="calc(100vw - 24px)";f.style.height="calc(100vh - 24px)"}else{f.style.width=s.width;f.style.height=s.height}}window.addEventListener("message",function(ev){if(ev.origin!==O)return;var d=ev.data;if(!d||d.source!=="frontdesk-chat")return;if(d.type==="resize")resize(!!d.open);else if(d.type==="position")pos(d.position,d.offsetX,d.offsetY)});if(document.body)document.body.appendChild(f);else document.addEventListener("DOMContentLoaded",function(){document.body.appendChild(f)})}if(!document.getElementById(SID)&&!document.querySelector("script["+ATTR+'="'+P+'"]')){var s=document.createElement("script");s.id=SID;s.setAttribute(ATTR,P);s.async=true;s.src=SRC;s.onload=function(){setTimeout(function(){if(!document.getElementById(FID))mountFrame()},800)};s.onerror=function(){mountFrame()};(document.body||document.documentElement).appendChild(s);setTimeout(function(){if(!document.getElementById(FID))mountFrame()},2500)}else{setTimeout(function(){if(!document.getElementById(FID))mountFrame()},1200)}}catch(e){}})()`;
}

/** Client-side mount: official script first, iframe fallback matching vendor loader. */
export function ensureFrontDeskChatWidget(): void {
  if (typeof document === "undefined") return;
  const { practiceId, origin, scriptSrc, scriptId, frameId, dataAttr } =
    FRONT_DESK_CHAT;

  if (document.getElementById(frameId)) return;

  const mountFrame = () => {
    if (document.getElementById(frameId)) return;

    const COLLAPSED = { width: "170px", height: "72px" };
    const EXPANDED = { width: "400px", height: "640px" };
    const BASE_MARGIN = 16;

    const iframe = document.createElement("iframe");
    iframe.id = frameId;
    iframe.title = "Book an appointment";
    iframe.src = `${origin}/${encodeURIComponent(practiceId)}/chat-widget`;
    iframe.setAttribute("allow", "clipboard-write");
    iframe.style.cssText = [
      "position:fixed",
      `bottom:${BASE_MARGIN}px`,
      `right:${BASE_MARGIN}px`,
      `width:${COLLAPSED.width}`,
      `height:${COLLAPSED.height}`,
      "max-width:100vw",
      "max-height:100vh",
      "border:0",
      "background:transparent",
      "z-index:2147483640",
      "transition:width .25s ease,height .25s ease",
      "color-scheme:normal",
    ].join(";");

    const applyPosition = (
      position?: string,
      offsetX?: number,
      offsetY?: number,
    ) => {
      const x = BASE_MARGIN + (Number(offsetX) || 0);
      const y = BASE_MARGIN + (Number(offsetY) || 0);
      iframe.style.bottom = `${y}px`;
      if (position === "bottom-left") {
        iframe.style.left = `${x}px`;
        iframe.style.right = "auto";
      } else {
        iframe.style.right = `${x}px`;
        iframe.style.left = "auto";
      }
    };

    const resize = (open: boolean) => {
      const size = open ? EXPANDED : COLLAPSED;
      if (open && window.innerWidth < 480) {
        iframe.style.width = "calc(100vw - 24px)";
        iframe.style.height = "calc(100vh - 24px)";
      } else {
        iframe.style.width = size.width;
        iframe.style.height = size.height;
      }
    };

    window.addEventListener("message", (event) => {
      if (event.origin !== origin) return;
      const data = event.data as {
        source?: string;
        type?: string;
        open?: boolean;
        position?: string;
        offsetX?: number;
        offsetY?: number;
      } | null;
      if (!data || data.source !== "frontdesk-chat") return;
      if (data.type === "resize") resize(Boolean(data.open));
      else if (data.type === "position")
        applyPosition(data.position, data.offsetX, data.offsetY);
    });

    document.body.appendChild(iframe);
  };

  // Prefer official script tag (exact embed attributes)
  if (
    !document.getElementById(scriptId) &&
    !document.querySelector(`script[${dataAttr}="${practiceId}"]`)
  ) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.setAttribute(dataAttr, practiceId);
    script.async = true;
    script.src = scriptSrc;
    script.onload = () => {
      window.setTimeout(() => {
        if (!document.getElementById(frameId)) mountFrame();
      }, 800);
    };
    script.onerror = () => mountFrame();
    document.body.appendChild(script);
    window.setTimeout(() => {
      if (!document.getElementById(frameId)) mountFrame();
    }, 2500);
    return;
  }

  window.setTimeout(() => {
    if (!document.getElementById(frameId)) mountFrame();
  }, 1200);
}
