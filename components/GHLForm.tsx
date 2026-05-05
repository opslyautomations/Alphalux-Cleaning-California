"use client";

import { useEffect, useRef, useState } from "react";

const FORM_ID = "Q6zPRF4U3Tx3H9TjW0le";
const DEFAULT_HEIGHT = 1464;

export default function GHLForm({ className = "" }: { className?: string }) {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (!data) return;
        // GHL sends: { type:"resize", height:"1200", id:"..." }
        // or: { message:"resize", height:1200 }
        const isForThisForm =
          !data.id || data.id === FORM_ID || data["form-id"] === FORM_ID;
        if (!isForThisForm) return;
        const h = Number(data.height ?? data.frameHeight);
        if (h > 100) setHeight(h);
      } catch {
        // ignore non-JSON messages
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <iframe
        ref={iframeRef}
        src={`https://api.opslyautomations.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="House Cleaning Lead Generation"
        data-height={DEFAULT_HEIGHT}
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title="House Cleaning Lead Generation"
        loading="lazy"
      />
    </div>
  );
}
