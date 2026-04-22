import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export default function MobileCTABar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A] border-t border-[#C9A961]/20 flex">
      <a
        href={PHONE_TEL}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-[#C9A961] border-r border-[#C9A961]/20 hover:bg-[#1A1A1A] transition-colors font-medium text-sm"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#C9A961] text-[#0A0A0A] hover:bg-[#D4B876] transition-colors font-semibold text-sm"
      >
        <MessageSquare className="w-4 h-4" />
        Get Free Quote
      </Link>
    </div>
  );
}
