type Stat = {
  numeral: string;
  label: string;
  sublabel?: string;
};

type StatRowProps = {
  stats: Stat[];
  /** dark = navy-800 cards, light = paper cards */
  cardTone?: "dark" | "light";
};

/** Row of 2–4 big-numeral stat cards */
export function StatRow({ stats, cardTone = "dark" }: StatRowProps) {
  return (
    <div
      className={`grid gap-6 ${
        stats.length === 2
          ? "sm:grid-cols-2"
          : stats.length === 3
          ? "sm:grid-cols-3"
          : "sm:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {stats.map((stat, i) => (
        <div key={i} className={cardTone === "dark" ? "card--dark" : "card"}>
          <p
            className={`display-numeral ${cardTone === "dark" ? "text-white" : "text-[#253858]"}`}
          >
            {stat.numeral}
          </p>
          <p
            className={`font-semibold mt-2 text-base ${
              cardTone === "dark" ? "text-white/90" : "text-[#0F1626]"
            }`}
          >
            {stat.label}
          </p>
          {stat.sublabel && (
            <p
              className={`text-sm mt-1 leading-relaxed ${
                cardTone === "dark" ? "text-white/65" : "text-[#475873]"
              }`}
            >
              {stat.sublabel}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
