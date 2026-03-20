const WHITE_COUNT = 7;
/** ms between each white key’s strike start (left → right) */
const STAGGER_MS = 135;
/** ms each key stays “lit”; must stay below STAGGER_MS so only one key is primary at a time */
const STRIKE_MS = 110;
/** fraction of STRIKE spent solid primary before releasing to gray */
const STRIKE_HOLD = 0.82;
const PAUSE_MS = 520;

/** One shared timeline: sweep ends after last key releases, then pause, then all repeat together */
const SWEEP_MS = (WHITE_COUNT - 1) * STAGGER_MS + STRIKE_MS;
const CYCLE_MS = SWEEP_MS + PAUSE_MS;

/** C–B: black keys after C, D, F, G, A (C♯ D♯ F♯ G♯ A♯) */
const BLACK_AFTER_WHITE = [0, 1, 3, 4, 5] as const;

const unitPct = 100 / WHITE_COUNT;
const blackW = unitPct * 0.52;
const blackHalf = blackW / 2;

const T = CYCLE_MS;

const keyframesCss = Array.from({ length: WHITE_COUNT }, (_, i) => {
  const pHit = (i * STAGGER_MS) / T;
  const pRelease = (i * STAGGER_MS + STRIKE_MS) / T;
  const pHitPct = pHit * 100;
  const pReleasePct = pRelease * 100;
  const pPrimaryPct = i === 0 ? 0.05 : pHitPct + 0.05;
  const strikeSpan = pReleasePct - pPrimaryPct;
  const pHoldPct = pPrimaryPct + strikeSpan * STRIKE_HOLD;

  const whiteBlock =
    i === 0
      ? `0% { background-color: #ffffff; }`
      : `0%, ${pHitPct.toFixed(4)}% { background-color: #ffffff; }`;

  return `@keyframes piano-roll-hit-${i} {
  ${whiteBlock}
  ${pPrimaryPct.toFixed(4)}% { background-color: var(--primary); }
  ${pHoldPct.toFixed(4)}% { background-color: var(--primary); }
  ${pReleasePct.toFixed(4)}% { background-color: #e5e5e5; }
  100% { background-color: #e5e5e5; }
}`;
}).join("\n");

export default function PianoRollLoader({ className }: { className?: string }) {
  return (
    <div
      className={`shrink-0 ${className ?? ""}`}
      role="presentation"
      aria-hidden
    >
      <style dangerouslySetInnerHTML={{ __html: keyframesCss }} />
      {/* Fixed width so keys stay readable; avoids flex parents squishing w-full+max-w */}
      <div className="relative inline-block w-[11rem] shrink-0 md:w-[12rem]">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, transparent 0px, transparent 3px, rgb(212 212 212) 3px, rgb(212 212 212) 4px)",
          }}
        />
        <div className="relative z-[1] flex h-11 md:h-12">
          {Array.from({ length: WHITE_COUNT }, (_, i) => (
            <div
              key={i}
              className="piano-roll-key-cell min-h-0 min-w-[0.625rem] flex-1 border-r border-neutral-300 last:border-r-0"
              style={{
                animation: `piano-roll-hit-${i} ${CYCLE_MS}ms linear infinite`,
              }}
            />
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          aria-hidden
        >
          {BLACK_AFTER_WHITE.map((i) => (
            <div
              key={i}
              className="absolute top-0 bg-neutral-950"
              style={{
                left: `calc(${(i + 1) * unitPct}% - ${blackHalf}%)`,
                width: `${blackW}%`,
                height: "56%",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
