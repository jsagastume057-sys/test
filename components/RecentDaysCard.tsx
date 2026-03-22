import { formatDateLabel } from "@/lib/date";
import type { DayRecord } from "@/types/dayRecord";

interface RecentDaysCardProps {
  days: DayRecord[];
}

export function RecentDaysCard({ days }: RecentDaysCardProps) {
  return (
    <section className="rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Recent days</p>
      {days.length === 0 ? (
        <p className="mt-2 text-xs text-slate-500">Start from today.</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {days.map((day) => (
            <li
              key={day.dateKey}
              className="grid grid-cols-[64px_72px_1fr_40px] items-center gap-2 text-xs text-slate-600"
            >
              <span>{formatDateLabel(day.dateKey)}</span>
              <span className="capitalize">{day.mode ?? "—"}</span>
              <span className="truncate">{day.mustDo || "No must-do set"}</span>
              <span className={day.mustDoDone ? "text-emerald-700" : "text-slate-400"}>
                {day.mustDoDone ? "Done" : "—"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
