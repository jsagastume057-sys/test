interface NightCheckInCardProps {
  nightMustDoDone: boolean;
  nightRoomReset: boolean;
  onToggleNightMustDo: (value: boolean) => void;
  onToggleNightRoomReset: (value: boolean) => void;
}

function ToggleRow({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(!checked)}
      className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-left"
    >
      <span className="text-xs text-slate-700">{label}</span>
      <span
        className={`inline-flex h-5 w-5 items-center justify-center rounded-full border text-xs ${
          checked ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 text-transparent"
        }`}
      >
        ✓
      </span>
    </button>
  );
}

export function NightCheckInCard({
  nightMustDoDone,
  nightRoomReset,
  onToggleNightMustDo,
  onToggleNightRoomReset,
}: NightCheckInCardProps) {
  return (
    <section className="rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Night check-in</p>
      <div className="mt-2 space-y-2">
        <ToggleRow
          label="Did I do the must-do?"
          checked={nightMustDoDone}
          onToggle={onToggleNightMustDo}
        />
        <ToggleRow
          label="Did I reset my room/space?"
          checked={nightRoomReset}
          onToggle={onToggleNightRoomReset}
        />
      </div>
    </section>
  );
}
