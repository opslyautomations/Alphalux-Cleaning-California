import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export default function MobileCTABar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A] border-t border-[#253858]/20 flex">
      <a
        href={PHONE_TEL}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-[#253858] border-r border-[#253858]/20 hover:bg-[#1A1A1A] transition-colors font-medium text-sm"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#253858] text-[#0A0A0A] hover:bg-[#2C4267] transition-colors font-semibold text-sm"
      >
        <MessageSquare className="w-4 h-4" />
        Get Free Quote
      </Link>
    </div>
  );
}
