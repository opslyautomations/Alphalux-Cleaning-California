import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL, SERVICES, ALL_CITIES } from "@/lib/constants";
import type { ServiceEntry } from "@/lib/serviceTypes";

// Per-page layout components
import StandardCleaningLayout from "@/components/service/layouts/StandardCleaning";
import DeepCleaningLayout from "@/components/service/layouts/DeepCleaning";
import MoveOutCleaningLayout from "@/components/service/layouts/MoveOutCleaning";
import RecurringCleaningLayout from "@/components/service/layouts/RecurringCleaning";
import AirbnbCleaningLayout from "@/components/service/layouts/AirbnbCleaning";
import OneTimeCleaningLayout from "@/components/service/layouts/OneTimeCleaning";
import VacationRentalLayout from "@/components/service/layouts/VacationRental";
import PostConstructionLayout from "@/components/service/layouts/PostConstruction";

// Layout dispatch map
type LayoutComponent = React.ComponentType<{ data: ServiceEntry; slug: string }>;

const LAYOUTS: Record<string, LayoutComponent> = {
  "standard-cleaning": StandardCleaningLayout,
  "deep-cleaning": DeepCleaningLayout,
  "move-out-cleaning": MoveOutCleaningLayout,
  "recurring-cleaning": RecurringCleaningLayout,
  "airbnb-cleaning": AirbnbCleaningLayout,
  "one-time-cleaning": OneTimeCleaningLayout,
  "vacation-rental-cleaning": VacationRentalLayout,
  "post-construction-cleaning": PostConstructionLayout,
};

function stripHtml(s: string): string {
  return s
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

const SERVICE_DATA: Record<string, ServiceEntry> = {
  "standard-cleaning": {
    name: "Standard Cleaning",
    h1: "Standard House Cleaning That Keeps a Clean Home Clean",
    metaTitle: "Standard House Cleaning Service | AlphaLux Clean",
    metaDescription:
      "Reliable standard house cleaning with non-toxic products across TX & CA. Know exactly what's included before you book. Get a free 60-second quote today.",
    serviceType: "House Cleaning",
    lead: "A standard clean is maintenance, not rescue. It is built for a home that's already in decent shape and needs to stay that way — the weekly or bi-weekly reset that handles the dirt you actually generate living your life. Knowing exactly where a standard clean starts and stops is the difference between being happy with the result and being surprised by it, so this page lays out the full scope before you ever request a quote.",
    sections: [
      {
        h2: "What a Standard Clean Covers",
        html: `<p>Every AlphaLux standard visit follows a fixed room-by-room sequence so nothing gets skipped:</p>
<ul>
  <li><strong>Kitchen:</strong> counters and backsplash wiped, exterior of appliances, stovetop, sink scrubbed and shined, cabinet fronts spot-cleaned, floors vacuumed and mopped, trash out.</li>
  <li><strong>Bathrooms:</strong> toilet, tub/shower, sink, mirror, counters, and chrome cleaned and disinfected; floors done last.</li>
  <li><strong>Bedrooms &amp; living areas:</strong> dusting of reachable surfaces, sills, and fixtures; mirrors and glass; beds made (linens changed if left out); floors vacuumed/mopped.</li>
  <li><strong>Whole home:</strong> light switches, doorknobs, and other high-touch points wiped; cobwebs cleared; visible surfaces tidied.</li>
</ul>`,
      },
      {
        h2: "What Standard Doesn't Include",
        html: `<p>Standard skips the slow, detailed work: inside the oven and fridge, interior windows, baseboards and trim scrubbing, grout, behind/under heavy furniture and appliances, and wall washing. Those belong to a <a href="/services/deep-cleaning">deep cleaning</a>. If it's your first time with us or the home hasn't had a professional clean in a while, we'll usually recommend starting with a deep clean so standard visits can keep pace afterward.</p>`,
      },
      {
        h2: "A Predictable Baseline, Every Visit",
        html: `<p>The point of standard cleaning isn't a one-time wow — it's never having to think about it again. A consistent crew, a fixed checklist, and non-toxic products mean the home stays at a predictable baseline week after week, and you get your weekends back.</p>`,
      },
      {
        h2: "Non-Toxic, Family-Safe Products",
        html: `<p>We clean with biodegradable, non-toxic products — no bleach or ammonia — so the home is safe for kids, pets, and anyone sensitive to harsh fumes the moment we leave.</p>`,
      },
      {
        h2: "Related Services",
        html: `<p>Need a one-time reset before starting standard visits? See <a href="/services/deep-cleaning">deep cleaning</a>. Want standard service on an automatic schedule with a discount? That's <a href="/services/recurring-cleaning">recurring cleaning</a>. Just need a single visit with no commitment? See <a href="/services/one-time-cleaning">one-time cleaning</a>.</p>`,
      },
      {
        h2: "Where We Serve",
        html: `<p>We run standard cleaning across all 17 cities we serve, including <a href="/locations/tx/dallas">Dallas</a>, <a href="/locations/tx/austin">Austin</a>, and <a href="/locations/ca/los-angeles">Los Angeles</a>.</p>`,
      },
    ],
    faqs: [
      {
        q: "What's the difference between standard and deep cleaning?",
        a: "Standard cleaning maintains a home that's already in good shape — surfaces, floors, kitchen, and bathrooms on a routine basis. Deep cleaning adds the heavy, detailed work that builds up over time: inside appliances, baseboards, grout, window interiors, and behind furniture. Most homes start with one deep clean, then keep it up with standard visits.",
      },
      {
        q: "How long does a standard cleaning take?",
        a: "For an average home, a standard clean usually runs about 1.5 to 3 hours depending on size, number of bathrooms, and how many cleaners we send. Larger homes or homes with pets take longer. Because we work from a fixed checklist, the time goes to the work — not to figuring out what to do next.",
      },
      {
        q: "Do I need to be home during the cleaning?",
        a: "No. Most clients give us entry instructions and go about their day. If you'd rather be home, that's completely fine too. Either way, our teams are background-checked, insured, and uniformed, so you can trust who's in your home whether you're there or not.",
      },
      {
        q: "Do you bring your own supplies and equipment?",
        a: "Yes. We arrive with all cleaning products and equipment, including our non-toxic, biodegradable cleaners. You don't need to provide anything. If you have a specific product you'd like us to use instead — say, for a delicate surface — just leave it out and let us know.",
      },
      {
        q: "How often should I schedule a standard cleaning?",
        a: "Most households land on weekly or bi-weekly. Weekly suits busy families, homes with pets, or anyone who wants it consistently spotless. Bi-weekly is the most popular middle ground. If you want a set schedule with a discount, recurring cleaning is the better fit.",
      },
      {
        q: "What's not included in a standard clean?",
        a: "Standard skips the deep-detail tasks: inside the oven and refrigerator, interior windows, scrubbing baseboards and grout, wall washing, and moving heavy furniture or appliances. Those are part of a deep clean. We'll always tell you up front if your home would be better served by a deep clean first.",
      },
      {
        q: "Can I customize what gets cleaned?",
        a: "Yes. The checklist is the baseline, not a cage. If you want us to skip a room, prioritize the kitchen, or add a focus area, just tell us when you book. We'll note it on your account so every visit matches your preferences.",
      },
      {
        q: "Do you do dishes and laundry?",
        a: "Loading or unloading a dishwasher and a quick sink of dishes can usually be folded in if you ask ahead. Full laundry isn't part of standard cleaning, though we handle linens for short-term rentals under our Airbnb and vacation rental services.",
      },
      {
        q: "Are your products safe for children and pets?",
        a: `Yes. We use biodegradable, non-toxic products with no bleach or ammonia, chosen so your family and pets are safe the moment we finish. If you want to confirm what to look for, the <a href="https://www.epa.gov/saferchoice" target="_blank" rel="noopener noreferrer">EPA's Safer Choice program</a> certifies cleaning products that meet strict human-health and environmental criteria.`,
      },
      {
        q: "How many cleaners will come?",
        a: "It depends on the size of the home and your schedule. Smaller homes typically get one cleaner; larger homes or tighter time windows get a team of two or more so we're in and out efficiently without rushing the checklist.",
      },
    ],
  },

  "deep-cleaning": {
    name: "Deep Cleaning",
    h1: "Deep Cleaning That Reaches Everything Routine Cleaning Skips",
    metaTitle: "Deep Cleaning Service | Non-Toxic | AlphaLux Clean",
    metaDescription:
      "Top-to-bottom deep cleaning that reaches what routine cleaning misses — grout, baseboards, inside appliances. Non-toxic, TX & CA. Get a free quote today.",
    serviceType: "House Cleaning",
    lead: "A deep clean is the full reset. It's the one that gets the grout you stopped looking at, the grease film on top of the cabinets, the baseboards, the buildup behind the toilet, and the dust on the blinds — the slow accumulation that a weekly tidy never touches. It's not a bigger standard clean; it's a different job with a different checklist and a different amount of time on the clock.",
    sections: [
      {
        h2: "What Deep Cleaning Reaches",
        html: `<p>On top of everything in a standard clean, a deep clean adds the detail work:</p>
<ul>
  <li><strong>Kitchen:</strong> inside the oven and microwave, exterior + reachable interior of the fridge, degreasing the range hood and backsplash, cabinet fronts hand-wiped, small appliances detailed.</li>
  <li><strong>Bathrooms:</strong> grout and tile scrubbed, soap scum and hard-water buildup broken down, fixtures descaled, behind and around the toilet base.</li>
  <li><strong>Whole home:</strong> baseboards, trim, and door frames hand-wiped; window sills and tracks; blinds and reachable vents dusted; light fixtures and ceiling fans; switch plates; spot-cleaning of doors and walls; detailed edge-vacuuming along floors.</li>
</ul>`,
      },
      {
        h2: "The Time Reality",
        html: `<p>A professional deep clean of an average home typically runs four to eight hours, because the work is hands-on and detailed rather than fast and surface-level. Homes with heavy buildup, pets, or a long gap since the last professional clean sit at the top of that range. We'd rather quote it honestly than under-book and rush it.</p>`,
      },
      {
        h2: "The Value of a Full Reset",
        html: `<p>A deep clean does two things: it makes the home feel genuinely new again, and it resets the baseline so ongoing <a href="/services/standard-cleaning">standard</a> or <a href="/services/recurring-cleaning">recurring</a> visits can actually keep up. Skip the reset and routine cleaning is always playing catch-up.</p>`,
      },
      {
        h2: "Problems We Solve",
        html: `<p>Hard-water scale on glass and fixtures, baked-on oven grease, grout that's gone gray, dust in places you can't easily reach, and that "clean but not really clean" feeling after a long stretch without detailed attention. Deep cleaning is built specifically for those.</p>`,
      },
      {
        h2: "Non-Toxic Throughout",
        html: `<p>All the detail work is done with non-toxic, biodegradable products — even the heavy degreasing and descaling — so a deep clean doesn't fill the house with fumes.</p>`,
      },
      {
        h2: "Related Services",
        html: `<p>Want this level of clean every time without thinking about it? Set up <a href="/services/recurring-cleaning">recurring cleaning</a> after your deep clean. Moving out and need it deposit-ready? That's a <a href="/services/move-out-cleaning">move out cleaning</a>, which is deep-clean detail aimed at a landlord's inspection.</p>`,
      },
      {
        h2: "Where We Serve",
        html: `<p>Deep cleaning is available across our service area, including <a href="/locations/tx/houston">Houston</a>, <a href="/locations/ca/beverly-hills">Beverly Hills</a>, and <a href="/locations/ca/irvine">Irvine</a>.</p>`,
      },
    ],
    faqs: [
      {
        q: "What's included in a deep clean that a standard clean doesn't cover?",
        a: "Inside the oven, microwave, and reachable parts of the fridge; degreasing the range hood; scrubbing grout and breaking down soap scum and hard-water buildup; hand-wiping baseboards, trim, and door frames; window sills and tracks; blinds, vents, and ceiling fans. It's the detailed, hands-on work that routine cleaning leaves alone.",
      },
      {
        q: "How long does a deep cleaning take?",
        a: "On average, four to eight hours for a typical home. The range depends on square footage, number of bathrooms, how much buildup there is, and whether pets are in the picture. We size the crew to the job so it gets done thoroughly in one visit rather than rushed.",
      },
      {
        q: "How often do I actually need a deep clean?",
        a: "If you keep up with standard or recurring cleaning, once or twice a year is plenty. Homes with pets, kids, or allergy concerns often do it quarterly. If it's been a long time since a professional clean, start with one now and maintain from there.",
      },
      {
        q: "Do you clean inside the oven and refrigerator?",
        a: "Yes — interior oven and microwave are part of a standard deep clean, and we wipe the exterior plus reachable interior shelving of the fridge. For a full empty-and-detail of a heavily loaded fridge or a self-clean oven cycle, just flag it ahead so we budget the time.",
      },
      {
        q: "Should my first cleaning be a deep clean?",
        a: "Usually, yes. A first deep clean resets the home to a true baseline so that ongoing standard or recurring visits can maintain it efficiently. Starting with a standard clean on a home that's overdue tends to leave the detailed buildup untouched.",
      },
      {
        q: "Do you move furniture to clean behind and under it?",
        a: "We move light furniture and clean what's reachable safely. We don't move heavy pieces, appliances, or anything that risks damage or injury, but we'll vacuum and wipe right up to and around them. If you can pull a heavy piece out beforehand, we'll get behind it.",
      },
      {
        q: "Do you scrub grout and remove hard-water stains?",
        a: "Yes, both are part of a deep clean. Grout gets scrubbed, and we break down soap scum and hard-water scale on glass, tile, and fixtures with non-toxic products. Severe, long-set staining may not return fully to white, and we'll tell you honestly what's realistic when we see it.",
      },
      {
        q: "Is a deep clean safe for homes with pets and allergies?",
        a: "Yes. We use non-toxic, biodegradable products throughout — including the degreasers and descalers — so there's no harsh chemical residue. Deep cleaning also removes built-up dust and dander in hard-to-reach spots, which often helps allergy-sensitive households.",
      },
      {
        q: "Can a deep clean be split across more than one visit?",
        a: "For very large homes or heavy-buildup situations, yes — we can phase it so the work is thorough rather than rushed. We'll map out what gets done in each visit when we quote it, so there are no surprises.",
      },
    ],
  },

  "move-out-cleaning": {
    name: "Move Out Cleaning",
    h1: "Move Out Cleaning Built to Pass the Inspection",
    metaTitle: "Move Out Cleaning Service | AlphaLux Clean",
    metaDescription:
      "Move out cleaning built to pass a landlord's inspection and protect your deposit. Empty-unit deep detail, TX & CA. Get a free quote in 60 seconds.",
    serviceType: "House Cleaning",
    lead: "A move-out clean has exactly one job: get the unit back to the condition the lease demands so you keep your deposit instead of losing it to \"cleaning fees.\" Consider that only 41% of renters get their full security deposit back — and cleaning deductions are one of the most common reasons it gets withheld. This clean is aimed squarely at the landlord's checklist, not at general tidiness.",
    sections: [
      {
        h2: "Who This Is For",
        html: `<p>End-of-lease tenants who want their deposit back, and realtors, landlords, and property managers who need a unit turn-ready for the next occupant or a listing. Same detailed clean, two audiences.</p>`,
      },
      {
        h2: "The Move-Out Checklist",
        html: `<p>Move-out cleaning is deep-clean detail performed on an empty (or near-empty) unit, focused on the areas inspectors actually check:</p>
<ul>
  <li><strong>Kitchen:</strong> inside and outside of all appliances (oven, fridge, microwave, dishwasher), inside cabinets and drawers, degreased range hood, scrubbed sink, wiped counters and backsplash.</li>
  <li><strong>Bathrooms:</strong> descaled and disinfected tub/shower, toilet, sink, and fixtures; scrubbed grout; mirrors; inside cabinets and drawers.</li>
  <li><strong>Whole unit:</strong> baseboards, trim, door frames, and doors wiped; switch plates and outlet covers; window interiors, sills, and tracks; closets and shelving; spot-cleaned walls; cobwebs; full floor vacuum and mop edge to edge.</li>
</ul>`,
      },
      {
        h2: "Why an Empty Unit Matters",
        html: `<p>Move-out cleaning works best on an empty unit — furniture and boxes hide exactly the spots inspectors check. Schedule the clean after the movers are out and before your final walk-through. If utilities are still on (you'll need water and lights for the clean), keep them active through cleaning day.</p>`,
      },
      {
        h2: "Protecting Your Deposit",
        html: `<p>The math is simple: the cost of a professional move-out clean is almost always a fraction of a withheld deposit or a landlord's tacked-on cleaning charge — and it removes the single most-cited reason deposits get docked. You're buying back your deposit and your move-week sanity at the same time.</p>`,
      },
      {
        h2: "Related Services",
        html: `<p>Moving <em>in</em> rather than out? We do the same detailed clean on the new place so you start fresh — just request move-in cleaning when you book. Want the home maintained after you're settled? See <a href="/services/recurring-cleaning">recurring cleaning</a>. Not a lease turnover, just need detail? That's a <a href="/services/deep-cleaning">deep cleaning</a>.</p>`,
      },
      {
        h2: "Where We Serve",
        html: `<p>Move out cleaning is available throughout our service area, including <a href="/locations/tx/fort-worth">Fort Worth</a>, <a href="/locations/ca/santa-monica">Santa Monica</a>, and <a href="/locations/ca/sacramento">Sacramento</a>.</p>`,
      },
    ],
    faqs: [
      {
        q: "Will a move-out clean get my full security deposit back?",
        a: "It removes the most common reason deposits get docked — cleaning. We clean to the areas landlords inspect: inside appliances, bathrooms, baseboards, and floors. We can't control deductions for actual damage beyond normal wear, but a documented professional clean is your strongest case at the walk-through.",
      },
      {
        q: "What's the difference between move-out and move-in cleaning?",
        a: "The checklist is nearly identical — both are empty-unit deep cleans. Move-out aims at a landlord's exit inspection to protect your deposit; move-in gets your new place spotless and sanitized before your things arrive. Tell us which one you need when you book.",
      },
      {
        q: "Should the unit be empty before you clean?",
        a: "Ideally yes. Move-out cleaning is most effective on an empty or near-empty unit, because furniture and boxes hide the exact spots inspectors check. Schedule us after the movers finish and before your final walk-through for the best result.",
      },
      {
        q: "Do you clean inside the oven, fridge, and cabinets?",
        a: "Yes. For a move-out, inside the oven, refrigerator, microwave, dishwasher, and the insides of cabinets and drawers are all standard — those are high on every landlord's list. Empty units let us reach all of it.",
      },
      {
        q: "How long does a move-out clean take?",
        a: "It runs like a deep clean — roughly four to eight hours depending on the unit's size, number of bathrooms, and condition. An empty unit can actually go faster since there's nothing to clean around. We'll give you a realistic window when we quote it.",
      },
      {
        q: "Do I need to keep the utilities on?",
        a: "Yes. We need running water and electricity to clean properly, so keep them active through cleaning day and schedule any shut-off for afterward. A unit with the water already off can't be fully cleaned.",
      },
      {
        q: "Do realtors and property managers use this service?",
        a: "Often. We turn units between tenants and prep listings so they show and photograph well. If you manage multiple units, we can set up a repeatable turn process so each one gets the same standard.",
      },
      {
        q: "Can you guarantee I'll pass inspection?",
        a: "We guarantee the clean — if something was missed against our checklist, tell us and we'll come back and make it right. We can't guarantee a landlord's subjective call or deductions for damage, but we clean to the standard inspections are based on.",
      },
      {
        q: "When should I book a move-out clean?",
        a: "Book it for after your belongings are out and before your scheduled walk-through, ideally with a day of buffer. During busy moving windows (end of month, end of lease season) book early — those dates fill up fast.",
      },
      {
        q: "Do you remove trash and leftover items?",
        a: "We handle normal cleaning debris and bagged trash. Large amounts of left-behind furniture, junk, or hazardous items aren't part of a cleaning service — clear those beforehand, or let us know in advance so we can advise on the right haul-away option.",
      },
    ],
  },

  "recurring-cleaning": {
    name: "Recurring Cleaning",
    h1: "Recurring Cleaning That Runs on Autopilot",
    metaTitle: "Recurring Cleaning Service | Weekly & Bi-Weekly",
    metaDescription:
      "Recurring house cleaning on your schedule — weekly, bi-weekly, or monthly — at a discounted rate, same trusted crew. Non-toxic, TX & CA. Free quote today.",
    serviceType: "House Cleaning",
    lead: "Recurring cleaning is the same thorough work as a standard clean, set on a repeating schedule you don't have to think about — and priced lower per visit because you're committing to a rhythm. It's the difference between \"I should book a cleaner\" living rent-free in your head and a clean home simply happening on the same days every month.",
    sections: [
      {
        h2: "How the Schedule Works",
        html: `<p>You pick the cadence; we lock the rhythm:</p>
<ul>
  <li><strong>Weekly</strong> — the home never drifts; best for busy families, pet households, and anyone who wants it consistently spotless. Lowest per-visit effort, so the most consistent result.</li>
  <li><strong>Bi-weekly</strong> — the most popular cadence and the best balance of cost and cleanliness for most homes.</li>
  <li><strong>Monthly</strong> — a lighter touch for tidy, low-traffic homes or solo households that just want a periodic reset.</li>
</ul>
<p style="margin-top:0.75rem;">We aim to send the same crew each visit so they learn your home and your preferences, and you keep the same time slot. Skipping, pausing, or rescheduling a visit is easy — there's no long lock-in contract, just a standing schedule you control.</p>`,
      },
      {
        h2: "Why Recurring Costs Less Per Visit",
        html: `<p>A home cleaned on a schedule never accumulates the heavy buildup that makes one-off cleans slow and expensive. Less buildup per visit means less time per visit — so recurring earns a discounted rate compared to booking the same clean as a series of one-offs.</p>`,
      },
      {
        h2: "Starting With a Clean Baseline",
        html: `<p>If your home is overdue, we usually start with a one-time <a href="/services/deep-cleaning">deep clean</a> to set the baseline, then recurring visits maintain it. Starting recurring on a home with months of buildup means the early visits are fighting that backlog instead of maintaining.</p>`,
      },
      {
        h2: "Non-Toxic on Every Visit",
        html: `<p>Every recurring visit uses the same non-toxic, biodegradable products — safe for kids and pets on the same schedule, week after week.</p>`,
      },
      {
        h2: "Related Services",
        html: `<p>Not ready to commit to a schedule? Book a <a href="/services/one-time-cleaning">one-time cleaning</a> and decide after. Need the upfront reset first? See <a href="/services/deep-cleaning">deep cleaning</a>. Want to understand the baseline scope each visit covers? That's <a href="/services/standard-cleaning">standard cleaning</a>.</p>`,
      },
      {
        h2: "Where We Serve",
        html: `<p>Recurring cleaning is available across all 17 cities we serve, including <a href="/locations/tx/san-antonio">San Antonio</a>, <a href="/locations/ca/glendale">Glendale</a>, and <a href="/locations/ca/pasadena">Pasadena</a>.</p>`,
      },
    ],
    faqs: [
      {
        q: "How is recurring cleaning priced compared to a one-time clean?",
        a: "Recurring visits are discounted per visit versus the same clean booked one-off. A home on a schedule never builds up heavy grime, so each visit takes less time — and that efficiency is passed back to you as a lower per-visit rate. Request a quote and we'll size it to your home and cadence.",
      },
      {
        q: "Weekly, bi-weekly, or monthly — which should I choose?",
        a: "Weekly suits busy families, pet homes, and anyone who wants it consistently spotless. Bi-weekly is the most popular and the best cost-to-cleanliness balance for most homes. Monthly works for tidy, low-traffic or solo households wanting a periodic reset. You can change cadence as your needs change.",
      },
      {
        q: "Will I get the same cleaner every time?",
        a: "That's the goal. We aim to send the same crew to each recurring visit so they learn your home, your layout, and your preferences — which makes every clean faster and more consistent. If a regular is ever out, we brief the replacement on your account notes.",
      },
      {
        q: "Am I locked into a contract?",
        a: "No long lock-in. Recurring is a standing schedule you control — you can skip, pause, reschedule, or change frequency. We just ask for reasonable notice on changes so we can adjust the crew's route.",
      },
      {
        q: "Do I need a deep clean before starting recurring service?",
        a: "If the home is overdue for detailed cleaning, yes — we usually start with one deep clean to set the baseline, then recurring visits maintain it. If the home is already in good shape, you can start recurring straight away.",
      },
      {
        q: "What's done on each recurring visit?",
        a: "Each visit covers the full standard checklist — kitchen, bathrooms, dusting, floors, and high-touch points. For longer cadences or by request, we can rotate detail tasks (like baseboards or interior windows) across visits so the whole home stays even over time.",
      },
      {
        q: "Can I skip or reschedule a visit if I'm traveling?",
        a: "Yes. Just give us a heads-up and we'll move or skip the visit. Many clients pause during travel and resume on return — no penalty, just notice so we can plan the route.",
      },
      {
        q: "Do I have to be home for recurring visits?",
        a: "No. Most recurring clients set up entry instructions once and let the cleans happen while they're out. Because we send the same vetted, insured crew to your standing slot, you get the trust of a familiar team in your home even when you're not there.",
      },
      {
        q: "Can I customize the recurring checklist?",
        a: "Yes. Tell us your priorities — focus the kitchen, skip a guest room, add a regular focus area — and we'll save it to your account so every visit matches. Your preferences travel with your schedule.",
      },
    ],
  },

  "airbnb-cleaning": {
    name: "Airbnb Cleaning",
    h1: "Airbnb Turnover Cleaning That Protects Your 5-Star Streak",
    metaTitle: "Airbnb Cleaning Service | Same-Day Turnovers",
    metaDescription:
      "Same-day Airbnb turnover cleaning that keeps your 5-star reviews coming — linens, restock, reset. Non-toxic, TX & CA. Get a free quote in 60 seconds.",
    serviceType: "Short-Term Rental Turnover Cleaning",
    lead: "For an Airbnb host, the clean is the product. One stray hair in a checkout photo or a missed bathroom and a five-star streak takes a one-star hit that follows the listing for months. AlphaLux runs fast, checklist-driven turnovers timed to your booking calendar so the next guest walks into a reset, restocked, guest-ready space every single time.",
    sections: [
      {
        h2: "What a Turnover Includes",
        html: `<p>A turnover is not a house clean — it's a hotel-grade reset between guests:</p>
<ul>
  <li><strong>Linens &amp; laundry:</strong> strip beds, launder or swap sheets and towels, remake beds to a crisp standard.</li>
  <li><strong>Bathrooms &amp; kitchen:</strong> disinfect and shine; clear the dishwasher; check the fridge for left-behind food.</li>
  <li><strong>Restock consumables:</strong> toilet paper, paper towels, soap, coffee, trash bags, and your welcome items (you supply or we coordinate).</li>
  <li><strong>Reset &amp; stage:</strong> trash out, surfaces wiped, the space staged back to listing-photo condition.</li>
  <li><strong>Damage check:</strong> we flag anything broken, stained, or missing so you can address it before the next check-in.</li>
</ul>`,
      },
      {
        h2: "Same-Day and Next-Day Turnovers",
        html: `<p>We offer same-day and next-day turnovers to fit tight checkout-to-check-in windows, and we sync to your calendar so back-to-back bookings don't catch you out. A standard turnover typically takes one and a half to three hours depending on the property.</p>`,
      },
      {
        h2: "Host Economics",
        html: `<p>Since April 2025, Airbnb folds the cleaning fee into the nightly price guests see in search, so a reliable, well-priced turnover keeps your total display competitive while protecting your standards. A consistent cleaner is also what separates Superhosts from the rest — guests notice consistency, and the algorithm rewards the reviews that follow.</p>`,
      },
      {
        h2: "Related Services",
        html: `<p>Own or manage more than one unit, or a larger property with mid-stay needs? See <a href="/services/vacation-rental-cleaning">vacation rental cleaning</a>, which is built for portfolios and property managers. Need a one-off deep reset between seasons? Book a <a href="/services/deep-cleaning">deep cleaning</a>.</p>`,
      },
      {
        h2: "Where We Serve",
        html: `<p>We turn over Airbnb listings across our service area, including <a href="/locations/tx/austin">Austin</a>, <a href="/locations/ca/hollywood">Hollywood</a>, and <a href="/locations/ca/long-beach">Long Beach</a>.</p>`,
      },
    ],
    faqs: [
      {
        q: "How quickly can you clean after a guest checks out?",
        a: "We offer same-day and next-day turnovers and schedule around your checkout-to-check-in window. Sync your calendar with us and we'll slot each turnover automatically, including tight same-day flips between back-to-back bookings.",
      },
      {
        q: "How long does an Airbnb turnover take?",
        a: "Typically one and a half to three hours, depending on the size of the unit, the number of bathrooms, and how much laundry is involved. Studios and one-bedrooms are on the faster end; multi-bedroom homes take longer, especially with full linen service.",
      },
      {
        q: "Do you handle linens and laundry?",
        a: "Yes. We strip beds, launder or swap sheets and towels, and remake beds to a crisp, hotel-style standard. If you keep backup linen sets on-site, we'll rotate them so the unit is ready faster between same-day bookings.",
      },
      {
        q: "Do you restock supplies like toilet paper and coffee?",
        a: "Yes. We replenish consumables — toilet paper, paper towels, soap, coffee, trash bags — and set out your welcome items. You can stock the supplies on-site or we can coordinate restocking; just tell us your preference.",
      },
      {
        q: "Can you sync with my booking calendar?",
        a: "Yes. We coordinate turnovers around your reservation schedule so cleans happen in the checkout window without you having to message us each time. For hosts with frequent bookings, this keeps the listing guest-ready on autopilot.",
      },
      {
        q: "What happens if a guest leaves damage or something's missing?",
        a: "We check the unit during every turnover and flag anything broken, stained, or missing, with notes so you can act before the next check-in. Catching it at turnover — not when the next guest complains — is what protects your reviews.",
      },
      {
        q: "Do you bring cleaning supplies?",
        a: "Yes, we bring all cleaning products and equipment, including our non-toxic, biodegradable cleaners — safer for back-to-back guests with allergies or sensitivities. You only need to supply consumables and linens (or let us coordinate them).",
      },
      {
        q: "Can you handle weekend and holiday turnovers?",
        a: "Those are peak booking times for short-term rentals, so yes — we schedule weekend and holiday turnovers. Book recurring turnover support and we'll prioritize your calendar during the busy windows when guest-ready timing matters most.",
      },
      {
        q: "Do you offer ongoing turnover pricing for hosts?",
        a: "Yes. Most hosts set up ongoing turnover service rather than booking each clean separately, which keeps scheduling automatic and the per-turnover rate consistent. Request a quote with your property details and typical booking frequency.",
      },
    ],
  },

  "one-time-cleaning": {
    name: "One-Time Cleaning",
    h1: "One Clean, No Commitment, All the Shine",
    metaTitle: "One-Time Cleaning Service | No Commitment",
    metaDescription:
      "One-time house cleaning with zero commitment — perfect before guests, after events, or a seasonal reset. Non-toxic, TX & CA. Get a free 60-second quote.",
    serviceType: "House Cleaning",
    lead: "Sometimes you don't need a cleaning plan — you need one great clean, right now, with nothing to sign up for. A one-time clean is exactly that: a single visit, booked for a specific moment, with no schedule and no strings. You decide whether it's a light standard refresh or a full deep clean, and we show up and handle it.",
    sections: [
      {
        h2: "When People Book a One-Time Clean",
        html: `<ul>
  <li><strong>Before company arrives</strong> — parents, in-laws, or a dinner party, and you want the place to look effortless.</li>
  <li><strong>After an event or party</strong> — the cleanup nobody wants to do the morning after.</li>
  <li><strong>Catching up</strong> — life got busy, the house got away from you, and you want a single reset to get back to zero.</li>
  <li><strong>Seasonal refresh</strong> — a spring or holiday top-to-bottom without a standing commitment.</li>
  <li><strong>Trying us out</strong> — many clients book a one-time clean first, then decide whether to continue.</li>
</ul>`,
      },
      {
        h2: "Standard or Deep — You Choose",
        html: `<p>A one-time clean can be booked at either scope. Pick a <strong>standard</strong> clean if the home is already in decent shape and just needs a refresh; pick a <strong>deep</strong> clean if it's overdue, hosting a big occasion, or hasn't had professional attention in a while. Not sure? Tell us the situation when you request a quote and we'll recommend the right one.</p>`,
      },
      {
        h2: "Freedom and No Commitment",
        html: `<p>The whole point is freedom: no subscription, no contract, no obligation. You get a professional result for one specific need — and if you love it, turning it into ongoing service is a single conversation away.</p>`,
      },
      {
        h2: "Loved the Result? Keep It Going",
        html: `<p>Loved the result and want it to keep happening? You can roll a one-time clean into discounted <a href="/services/recurring-cleaning">recurring cleaning</a> — but only if you want to. There's no upsell pressure; the one-time clean stands completely on its own.</p>`,
      },
      {
        h2: "Non-Toxic From the First Visit",
        html: `<p>Same non-toxic, biodegradable products as every AlphaLux clean — safe for kids and pets from a single visit, no harsh fumes left behind for your event or your guests.</p>`,
      },
      {
        h2: "Where We Serve",
        html: `<p>One-time cleaning is available across all 17 cities we serve, including <a href="/locations/tx/dallas">Dallas</a>, <a href="/locations/ca/anaheim">Anaheim</a>, and <a href="/locations/ca/huntington-beach">Huntington Beach</a>.</p>`,
      },
    ],
    faqs: [
      {
        q: "Is a one-time clean a standard clean or a deep clean?",
        a: "It can be either — you choose. Book a standard clean for a home that's already in good shape and needs a refresh, or a deep clean if it's overdue or you're prepping for a big occasion. If you're unsure, describe the situation in your quote request and we'll recommend the right scope.",
      },
      {
        q: "Do I have to sign up for anything?",
        a: "No. A one-time clean is a single visit with zero commitment — no subscription, no contract, no obligation to continue. You book the one clean you need and that's it.",
      },
      {
        q: "What occasions is a one-time clean good for?",
        a: "Common ones: before guests or a party, the morning-after cleanup, catching up after a busy stretch, a seasonal top-to-bottom, prepping a home for sale photos, or simply trying our service before deciding on anything ongoing.",
      },
      {
        q: "How far in advance should I book?",
        a: "The more notice the better, especially for weekends and around holidays when demand spikes. We do accommodate shorter-notice requests when we can — submit a quote with your ideal date and we'll confirm availability quickly.",
      },
      {
        q: "How long does a one-time clean take?",
        a: "It depends on the scope you choose. A standard refresh runs about 1.5 to 3 hours; a deep clean runs four to eight. Home size, number of bathrooms, and condition all factor in. We'll confirm the expected window when you request your quote.",
      },
      {
        q: "Can a one-time clean turn into regular service?",
        a: "Yes, if you want it to. If you love the result, we can roll it into discounted recurring cleaning on whatever cadence suits you. But there's no pressure — the one-time clean is complete on its own.",
      },
      {
        q: "Do you bring supplies, and are they safe?",
        a: "Yes. We bring everything, including our non-toxic, biodegradable products — no bleach or ammonia — so the home is safe for kids, pets, and guests right after we finish. You don't need to provide anything.",
      },
      {
        q: "Do I need to be home?",
        a: "No. You can provide entry instructions and go about your day, or be home if you prefer. Every cleaner we send is insured and background-screened, so the choice is purely about your convenience.",
      },
    ],
  },

  "vacation-rental-cleaning": {
    name: "Vacation Rental Cleaning",
    h1: "Vacation Rental Cleaning Built for Owners and Managers",
    metaTitle: "Vacation Rental Cleaning Service | TX & CA",
    metaDescription:
      "Vacation rental cleaning for owners & property managers — consistent turnovers, mid-stay cleans, damage & safety reporting across your portfolio. Free quote.",
    serviceType: "Short-Term Rental Cleaning",
    lead: "When you manage vacation rentals — one large home or a dozen units across VRBO, Booking.com, and Airbnb — the cleaning problem isn't a single turnover, it's consistency at scale. Every property has to hit the same standard on every checkout, with reliable reporting so you're never blindsided by a damaged unit or a missing inventory item. AlphaLux runs vacation-rental cleaning as an operations partner, not just a clean.",
    sections: [
      {
        h2: "What Sets PM-Grade Cleaning Apart",
        html: `<p>Beyond a standard guest-ready turnover, vacation rental service adds the parts owners and managers actually need:</p>
<ul>
  <li><strong>Mid-stay cleans</strong> for longer bookings (typically 5+ nights) — towel and linen refresh, trash, light surface reset — positioned as a guest-experience upsell on premium stays.</li>
  <li><strong>Inventory &amp; restock tracking</strong> — we replenish consumables and note what's running low so you reorder before it's a problem.</li>
  <li><strong>Damage &amp; maintenance reporting</strong> — we document anything broken, stained, or worn after each stay, with photos, so claims and repairs happen fast.</li>
  <li><strong>Safety-device checks</strong> — confirm smoke and carbon-monoxide detectors are present and functioning, a check that protects guests and your liability.</li>
  <li><strong>Portfolio consistency</strong> — the same checklist and standard applied across every property, so a guest's experience doesn't depend on which unit they booked.</li>
</ul>`,
      },
      {
        h2: "Seasonal Deep Cleans",
        html: `<p>On top of between-guest turnovers, we schedule periodic deep cleans — typically quarterly or seasonally — for carpets, upholstery, appliances, and the buildup that frequent turnovers don't reach. That keeps a high-traffic rental from quietly degrading over a busy season.</p>`,
      },
      {
        h2: "The Revenue Case",
        html: `<p>Cleanliness is the single biggest lever on rental reviews, and reviews drive revenue. Industry data from AirDNA found listings rated 4.9 stars or higher saw nearly 10% higher occupancy, charged about 7.7% more per night, and earned over 18% more revenue than lower-rated rentals. Consistent professional cleaning is how you defend that rating across every unit you operate.</p>`,
      },
      {
        h2: "Related Services",
        html: `<p>Running a single Airbnb listing and mainly need fast same-day flips? The <a href="/services/airbnb-cleaning">Airbnb cleaning</a> page is built for that. Need a one-off detailed reset on a unit between seasons? Book a <a href="/services/deep-cleaning">deep cleaning</a>.</p>`,
      },
      {
        h2: "Where We Serve",
        html: `<p>We service vacation rentals across our coverage area, including <a href="/locations/tx/houston">Houston</a>, <a href="/locations/ca/brentwood">Brentwood</a>, and <a href="/locations/ca/santa-monica">Santa Monica</a>.</p>`,
      },
    ],
    faqs: [
      {
        q: "How is this different from your Airbnb cleaning service?",
        a: "Airbnb cleaning is built for a single host who mainly needs fast same-day turnovers. Vacation rental cleaning is built for owners and property managers running multiple or larger units across platforms — adding mid-stay cleans, inventory and damage reporting, safety-device checks, and consistent standards across a portfolio.",
      },
      {
        q: "Do you clean rentals listed on VRBO and Booking.com, not just Airbnb?",
        a: "Yes. VRBO and Booking.com don't provide cleaning — arranging it is the owner's responsibility — so we service rentals on any platform. We apply the same turnover and reporting standard regardless of where the property is listed.",
      },
      {
        q: "What is a mid-stay clean and when is it worth it?",
        a: "A mid-stay clean is a light refresh during a longer booking — typically 5+ nights — covering linens, towels, trash, and surfaces without disrupting the guest. On premium or long stays it's a strong guest-experience upsell and protects your review on extended bookings.",
      },
      {
        q: "Do you report damage and maintenance issues?",
        a: "Yes, after every stay. We document anything broken, stained, worn, or missing, with photos, so you can file claims or schedule repairs before the next guest arrives. Catching issues at turnover is what keeps small problems from becoming bad reviews.",
      },
      {
        q: "Can you keep cleaning consistent across multiple properties?",
        a: "That's the core of this service. We run the same checklist and standard on every unit so a guest's experience doesn't depend on which property they booked. For managers, consistency across the portfolio is usually the whole reason to bring in a professional team.",
      },
      {
        q: "Do you check smoke and carbon-monoxide detectors?",
        a: "Yes. As part of the turnover we confirm smoke and CO detectors are present and functioning and flag any that need batteries or replacement. It's a small step that protects guests and reduces your liability exposure.",
      },
      {
        q: "How do you handle restocking and supplies?",
        a: "We replenish consumables each turnover and track what's running low so you can reorder ahead of a shortage. You can stock supplies on-site or we can coordinate restocking — whichever fits your operation. Laundry can be handled on-site or off-site by arrangement.",
      },
      {
        q: "How often should a vacation rental get a deep clean?",
        a: "On top of between-guest turnovers, plan a deep clean quarterly or seasonally depending on traffic. That handles carpets, upholstery, appliances, and buildup that turnovers don't reach, and keeps a busy rental from degrading over a high-occupancy stretch.",
      },
      {
        q: "Can you scale with my portfolio as I add units?",
        a: "Yes. We set up a repeatable process per property and add new units to the same standard and reporting workflow as you grow. Share your property list and typical booking patterns in a quote request and we'll map the coverage.",
      },
    ],
  },

  "post-construction-cleaning": {
    name: "Post Construction Cleaning",
    h1: "Post-Construction Cleaning That Removes What You Can't See",
    metaTitle: "Post Construction Cleaning Service | TX & CA",
    metaDescription:
      "Post-construction & post-renovation cleaning — HEPA fine-dust removal, 3-phase detail, new-finish protection. Non-toxic, TX & CA. Get a free quote today.",
    serviceType: "Post-Construction Cleaning",
    lead: "After a build or remodel, the visible mess is the easy part. The real problem is the fine construction dust — drywall, wood, and silica particles — that settles into every surface, vent, and crevice and keeps recirculating for days. Post-construction cleaning is a specialized job with its own equipment, its own phases, and its own safety considerations. It is not a deep clean with a bigger checklist.",
    sections: [
      {
        h2: "The 3-Phase Process",
        html: `<p>Post-construction cleaning is done in stages as a project finishes:</p>
<ul>
  <li><strong>Phase 1 — Rough clean:</strong> clear large debris, packaging, drywall scraps, and stickers; remove nails and sharps; sweep and HEPA-vacuum the heavy dust layer; wipe surfaces top-down to make the detail phase efficient.</li>
  <li><strong>Phase 2 — Detail / light clean:</strong> the precision pass — HEPA-vacuum every surface, hidden cavity, and vent; microfiber-wipe walls, doors, trim, and cabinetry; polish fixtures and hardware; clean appliances; streak-free interior windows, sills, and tracks.</li>
  <li><strong>Phase 3 — Final clean:</strong> the move-in-ready pass just before occupancy — polish, glass, floors, and a final detail so the space looks fully finished.</li>
</ul>`,
      },
      {
        h2: "Why Timing Matters",
        html: `<p>Fine construction dust stays airborne for 24 to 48 hours after the detail pass, so rushing the final clean means dust resettles after you've cleaned. We sequence the phases so the final pass happens after the air has cleared — that's the difference between "looks clean today" and "still clean next week." Dust also infiltrates HVAC ductwork and can recirculate for months if vents aren't addressed, which is why vent cleaning is part of the process.</p>`,
      },
      {
        h2: "Why Regular Cleaning Can't Do This",
        html: `<p>A standard household vacuum without HEPA filtration recirculates fine dust straight back into the air. Proper post-construction work uses HEPA-filtered vacuums that capture 99.97% of particles 0.3 microns and larger — including drywall and silica dust — plus the right PPE and methods to protect both the crew and your new, easily-scratched finishes.</p>`,
      },
      {
        h2: "Safety and Health Considerations",
        html: `<p>Construction dust isn't just messy — respirable crystalline silica is a recognized health hazard, which is why OSHA sets a workplace exposure limit of 50 µg/m³ averaged over an eight-hour day and requires dust controls and respirators. We clean with that hazard in mind, using HEPA capture and damp methods rather than dry sweeping that throws particles back into the air.</p>`,
      },
      {
        h2: "Protecting New Finishes",
        html: `<p>Brand-new floors, cabinetry, glass, and fixtures scratch and haze easily, and the wrong product or pad can leave permanent marks. We use finish-appropriate, non-toxic products and techniques chosen to clean construction residue without damaging the surfaces you just paid for.</p>`,
      },
      {
        h2: "Related Services",
        html: `<p>Already moved in and just need ongoing upkeep? Set up <a href="/services/recurring-cleaning">recurring cleaning</a>. Renovated one room rather than the whole home, with no heavy construction dust? A <a href="/services/deep-cleaning">deep cleaning</a> may be all you need — tell us the scope and we'll point you to the right one.</p>`,
      },
      {
        h2: "Where We Serve",
        html: `<p>Post-construction cleaning is available across our service area, including <a href="/locations/tx/austin">Austin</a>, <a href="/locations/ca/los-angeles">Los Angeles</a>, and <a href="/locations/tx/fort-worth">Fort Worth</a>.</p>`,
      },
    ],
    faqs: [
      {
        q: "What's the difference between post-construction cleaning and a deep clean?",
        a: "A deep clean tackles household buildup. Post-construction cleaning removes fine construction dust — drywall, wood, and silica particles — that settles everywhere and recirculates for days. It uses HEPA-filtered equipment, runs in phases, addresses HVAC vents, and follows safety precautions a normal deep clean doesn't.",
      },
      {
        q: "Why can't I just use a regular cleaner or my own vacuum?",
        a: "A standard vacuum without HEPA filtration just pushes fine construction dust back into the air. We use HEPA-filtered equipment rated to trap particles down to 0.3 microns — including drywall and silica — along with damp wiping and PPE, so the dust leaves the building instead of resettling on your new finishes.",
      },
      {
        q: "What are the three phases of post-construction cleaning?",
        a: "Rough clean (debris, sharps, and heavy dust removal), detail/light clean (HEPA-vacuuming every surface and vent, microfiber wipe-down, fixtures, windows), and final clean (the polished, move-in-ready pass just before occupancy). Phasing it makes each stage effective rather than fighting the last one.",
      },
      {
        q: "How long after construction should the final clean happen?",
        a: "After the detail pass, fine dust stays airborne for 24 to 48 hours, so we time the final clean for after the air has settled — otherwise dust resettles on freshly cleaned surfaces. We sequence the phases around the project timeline so the result actually lasts.",
      },
      {
        q: "Do you clean construction dust out of the HVAC vents?",
        a: "Yes, vents are part of the process. Construction dust infiltrates ductwork and can recirculate through the building for months if it's ignored, so we address reachable vents and registers as part of the detail phase to keep the dust from coming back.",
      },
      {
        q: "Is construction dust actually dangerous?",
        a: `Yes. Respirable crystalline silica from cutting concrete, drywall, brick, and stone is a recognized health hazard — <a href="https://www.osha.gov/silica-crystalline/construction" target="_blank" rel="noopener noreferrer">OSHA sets a workplace exposure limit</a> of 50 µg/m³ over an eight-hour day and requires dust controls. We use HEPA capture and damp methods rather than dry sweeping, which protects both our crew and your household.`,
      },
      {
        q: "Will you scratch or damage my new finishes?",
        a: "That's a core concern and we clean accordingly. New floors, cabinetry, glass, and fixtures haze and scratch easily, so we use finish-appropriate, non-toxic products and the right pads and techniques to remove residue without marking the surfaces you just installed.",
      },
      {
        q: "Do you handle both residential and commercial post-construction work?",
        a: "Yes — new builds, remodels, and renovations, residential or commercial. Larger or multi-room projects take longer and may run across more than one day; we'll scope the phases and timeline when we quote it so it lines up with your handover date.",
      },
      {
        q: "How long does a post-construction clean take?",
        a: "It depends on square footage, how many phases you need, and the amount of dust and debris. A small space might be a day; a large or multi-floor project runs several. We size the crew and schedule to your timeline so the space is ready when you need it.",
      },
      {
        q: "When should I schedule it relative to the trades finishing?",
        a: "Book the rough clean as the trades wrap, and the final clean for just before occupancy after the air has cleared. If you tell us your project timeline, we'll fit the phases around it so there's no rushed final pass and no resettled dust on move-in day.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICE_DATA[slug];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `${BASE_URL}/services/${slug}` },
    openGraph: {
      type: "website",
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${BASE_URL}/services/${slug}`,
      siteName: "AlphaLux Cleaning",
      locale: "en_US",
      images: [
        {
          url: `${BASE_URL}/og/services-${slug}.png`,
          secureUrl: `${BASE_URL}/og/services-${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${data.name} — AlphaLux Cleaning`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [`${BASE_URL}/og/services-${slug}.png`],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    other: { "theme-color": "#253858" },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = SERVICE_DATA[slug];
  if (!data) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    serviceType: data.serviceType,
    description: data.lead,
    provider: {
      "@type": "HouseCleaningService",
      name: "AlphaLux Cleaning",
      url: BASE_URL,
    },
    url: `${BASE_URL}/services/${slug}`,
    areaServed: ALL_CITIES.map((c) => ({ "@type": "City", name: c.name })),
    offers: { "@type": "Offer", description: "Free quote available", priceCurrency: "USD" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(f.a) },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: data.name, item: `${BASE_URL}/services/${slug}` },
    ],
  };

  const Layout = LAYOUTS[slug];
  if (!Layout) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Layout data={data} slug={slug} />
    </>
  );
}
