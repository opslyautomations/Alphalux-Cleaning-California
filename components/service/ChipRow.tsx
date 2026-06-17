type ChipRowProps = {
  chips: string[];
  dark?: boolean;
};

/** Horizontal row of pill/chip labels */
export function ChipRow({ chips, dark = false }: ChipRowProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <span
          key={chip}
          className={
            dark
              ? "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-white/25 text-white/80 bg-white/10"
              : "chip"
          }
        >
          {chip}
        </span>
      ))}
    </div>
  );
}
