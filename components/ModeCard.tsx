import type { Mode } from "@/types/dayRecord";

interface ModeCardProps {
  mode: Mode | null;
  onSelectMode: (mode: Mode) => void;
}

const MODES: Array<{
  key: Mode;
  title: string;
  description: string;
}> = [
  {
    key: "strong",
    title: "Strong",
    description: "Push forward. Do the hard thing first.",
  },
  {
    key: "normal",
    title: "Normal",
    description: "Keep it steady. Focus on what matters.",
  },
  {
    key: "survival",
    title: "Survival",
    description: "Protect the minimum. Keep life together.",
  },
];

export function ModeCard({ mode, onSelectMode }: ModeCardProps) {
  return (
    <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="mb-3">
        <p className="text-sm font-medium text-slate-700">What kind of day is this?</p>
        <p className="text-xs text-slate-500">Choose one mode for today.</p>
      </div>

      <div className="space-y-2">
        {MODES.map((item) => {
          const selected = item.key === mode;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onSelectMode(item.key)}
              className={`w-full rounded-2xl border px-3 py-3 text-left transition-colors ${
                selected
                  ? "border-slate-700 bg-slate-100"
                  : "border-slate-200 bg-white hover:bg-slate-50"
              }`}
            >
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-xs text-slate-600">{item.description}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
