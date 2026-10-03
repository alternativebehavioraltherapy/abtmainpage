import { useEffect } from "react";
import { ensureFrontDeskChatWidget } from "@/lib/front-desk-chat-loader";

/**
 * Site-wide Front Desk AI chat bubble (client fallback).
 * Primary SSR path: ScriptOnce in src/routes/__root.tsx.
 * Leave mounted — see STATUS note in src/lib/front-desk-chat-loader.ts.
 */
export function FrontDeskChatWidget() {
  useEffect(() => {
    ensureFrontDeskChatWidget();
  }, []);

  return null;
}
