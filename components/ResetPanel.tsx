import { getResetFlow } from "@/lib/resetFlows";
import type { ResetFeeling } from "@/types/dayRecord";

interface ResetPanelProps {
  isOpen: boolean;
  feeling: ResetFeeling | null;
  completedSteps: string[];
  resetCompleted: boolean;
  onClose: () => void;
  onSelectFeeling: (feeling: ResetFeeling | null) => void;
  onToggleStep: (stepId: string) => void;
  onRestart: () => void;
}

const FEELING_OPTIONS: Array<{ key: ResetFeeling; label: string }> = [
  { key: "overwhelmed", label: "Overwhelmed" },
  { key: "avoiding", label: "Avoiding" },
  { key: "tired", label: "Tired" },
  { key: "behind", label: "Behind" },
];

export function ResetPanel({
  isOpen,
  feeling,
  completedSteps,
  resetCompleted,
  onClose,
  onSelectFeeling,
  onToggleStep,
  onRestart,
}: ResetPanelProps) {
  if (!isOpen) {
    return null;
  }

  const flow = getResetFlow(feeling);
  const totalSteps = flow.steps.length;
  const completedCount = flow.steps.filter((step) => completedSteps.includes(step.id)).length;

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-slate-900/30 p-3">
      <section className="max-h-[95vh] w-full overflow-y-auto rounded-3xl bg-white p-4 shadow-xl">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-base font-semibold text-slate-900">Reset when needed.</p>
            <p className="text-sm text-slate-600">What&apos;s happening right now?</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700"
          >
            Close
          </button>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onSelectFeeling(null)}
            className={`rounded-full px-3 py-1.5 text-sm ${
              feeling === null
                ? "bg-slate-900 text-white"
                : "border border-slate-300 bg-white text-slate-700"
            }`}
          >
            Skip for now
          </button>
          {FEELING_OPTIONS.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => onSelectFeeling(option.key)}
              className={`rounded-full px-3 py-1.5 text-sm ${
                feeling === option.key
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mb-4 rounded-2xl bg-slate-100 p-3">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-600">
            <span>Progress</span>
            <span>
              {completedCount}/{totalSteps}
            </span>
          </div>
          <div className="h-2 rounded-full bg-slate-200">
            <div
              className="h-2 rounded-full bg-slate-700 transition-all"
              style={{
                width: `${(completedCount / totalSteps) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="space-y-2">
          {flow.steps.map((step) => {
            const checked = completedSteps.includes(step.id);
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => onToggleStep(step.id)}
                className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left ${
                  checked ? "border-emerald-300 bg-emerald-50" : "border-slate-200 bg-white"
                }`}
              >
                <span
                  className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
                    checked
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-slate-400 text-transparent"
                  }`}
                >
                  ✓
                </span>
                <span className="text-sm text-slate-800">{step.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onRestart}
            className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700"
          >
            Restart reset
          </button>
          {resetCompleted ? (
            <p className="text-sm font-medium text-emerald-700">Nice. You&apos;re back in motion.</p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
