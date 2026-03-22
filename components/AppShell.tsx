"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ModeCard } from "@/components/ModeCard";
import { MustDoCard } from "@/components/MustDoCard";
import { NightCheckInCard } from "@/components/NightCheckInCard";
import { RecentDaysCard } from "@/components/RecentDaysCard";
import { ResetPanel } from "@/components/ResetPanel";
import { getLocalDateKey } from "@/lib/date";
import { getResetFlow } from "@/lib/resetFlows";
import {
  createEmptyDayRecord,
  getDayRecord,
  listRecentDays,
  saveDayRecord,
} from "@/lib/storage";
import type { DayRecord, Mode, ResetFeeling } from "@/types/dayRecord";

const NORMAL_BASELINE_REMINDERS = ["Water", "Room reset", "Sleep target"];
const SURVIVAL_MINIMUM_REMINDERS = ["Water", "Room reset", "Sleep target"];

export function AppShell() {
  const initialDateKey = getLocalDateKey();
  const [todayKey, setTodayKey] = useState(initialDateKey);
  const [record, setRecord] = useState<DayRecord>(() => {
    if (typeof window === "undefined") {
      return createEmptyDayRecord(initialDateKey);
    }
    return getDayRecord(initialDateKey);
  });
  const [isResetOpen, setIsResetOpen] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    saveDayRecord(record);
  }, [record]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const intervalId = window.setInterval(() => {
      const currentDateKey = getLocalDateKey();
      if (currentDateKey === todayKey) {
        return;
      }

      setTodayKey(currentDateKey);
      setRecord(getDayRecord(currentDateKey));
    }, 60_000);

    return () => window.clearInterval(intervalId);
  }, [todayKey]);

  const updateRecord = (updater: (previous: DayRecord) => DayRecord) => {
    setRecord((previous) => {
      const next = updater(previous);
      return { ...next, dateKey: todayKey };
    });
  };

  const handleModeSelect = (mode: Mode) => {
    updateRecord((previous) => ({ ...previous, mode }));
  };

  const handleMustDoSave = (mustDo: string) => {
    updateRecord((previous) => {
      const changed = previous.mustDo !== mustDo;
      return {
        ...previous,
        mustDo,
        mustDoDone: changed ? false : previous.mustDoDone,
      };
    });
  };

  const handleMustDoDoneToggle = (mustDoDone: boolean) => {
    updateRecord((previous) => ({ ...previous, mustDoDone }));
  };

  const handleSupportTaskSave = (supportTask: string) => {
    updateRecord((previous) => ({ ...previous, supportTask }));
  };

  const handleFeelingSelect = (resetFeeling: ResetFeeling | null) => {
    updateRecord((previous) => {
      const flow = getResetFlow(resetFeeling);
      const keptSteps = previous.resetStepsCompleted.filter((stepId) =>
        flow.steps.some((step) => step.id === stepId),
      );
      return {
        ...previous,
        resetFeeling,
        resetStepsCompleted: keptSteps,
        resetCompleted: keptSteps.length === flow.steps.length && flow.steps.length > 0,
      };
    });
  };

  const handleToggleResetStep = (stepId: string) => {
    updateRecord((previous) => {
      const flow = getResetFlow(previous.resetFeeling);
      if (!flow.steps.some((step) => step.id === stepId)) {
        return previous;
      }

      const hasStep = previous.resetStepsCompleted.includes(stepId);
      const nextSteps = hasStep
        ? previous.resetStepsCompleted.filter((id) => id !== stepId)
        : [...previous.resetStepsCompleted, stepId];

      return {
        ...previous,
        resetStepsCompleted: nextSteps,
        resetCompleted: nextSteps.length === flow.steps.length && flow.steps.length > 0,
      };
    });
  };

  const handleRestartReset = () => {
    updateRecord((previous) => ({
      ...previous,
      resetStepsCompleted: [],
      resetCompleted: false,
    }));
  };

  const handleNightMustDoToggle = (nightMustDoDone: boolean) => {
    updateRecord((previous) => ({ ...previous, nightMustDoDone }));
  };

  const handleNightRoomResetToggle = (nightRoomReset: boolean) => {
    updateRecord((previous) => ({ ...previous, nightRoomReset }));
  };

  const isSurvivalMode = record.mode === "survival";
  const recentDays = useMemo(() => {
    if (typeof window === "undefined") {
      return [record];
    }
    return listRecentDays(todayKey, 5);
  }, [record, todayKey]);

  return (
    <main className="min-h-screen bg-slate-100 px-3 py-5">
      <div className={`mx-auto max-w-md ${isSurvivalMode ? "space-y-3" : "space-y-4"}`}>
        <header className="space-y-1 px-1">
          <h1 className="text-2xl font-semibold text-slate-900">Baseline</h1>
          <p className="text-sm text-slate-600">A planner for bad days, not perfect days.</p>
        </header>

        <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Today</p>
          <div className="mt-2 space-y-2">
            <div>
              <p className="text-xs text-slate-500">Today&apos;s mode</p>
              <p className="text-sm font-medium text-slate-800">
                {record.mode ? record.mode[0].toUpperCase() + record.mode.slice(1) : "Choose one"}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Today&apos;s one must-do</p>
              <p className="text-sm font-medium text-slate-800">
                {record.mustDo || "Choose one must-do."}
              </p>
            </div>
          </div>
        </section>

        <ModeCard mode={record.mode} onSelectMode={handleModeSelect} />

        <MustDoCard
          mode={record.mode}
          mustDo={record.mustDo}
          mustDoDone={record.mustDoDone}
          supportTask={record.supportTask}
          onSaveMustDo={handleMustDoSave}
          onToggleMustDoDone={handleMustDoDoneToggle}
          onSaveSupportTask={handleSupportTaskSave}
        />

        {record.mode === "normal" ? (
          <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-700">Baseline support</p>
            <p className="text-xs text-slate-500">Keep it steady with the minimum.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {NORMAL_BASELINE_REMINDERS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        {isSurvivalMode ? (
          <section className="rounded-2xl border border-slate-200 bg-white p-3">
            <p className="text-sm font-medium text-slate-700">Protect the minimum.</p>
            <p className="mt-1 text-xs text-slate-500">Keep life together. Keep it simple.</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {SURVIVAL_MINIMUM_REMINDERS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <button
            type="button"
            onClick={() => setIsResetOpen(true)}
            className="w-full rounded-2xl bg-slate-900 px-4 py-4 text-base font-semibold text-white"
          >
            Reset Me
          </button>
          <p className="mt-2 text-center text-xs text-slate-500">Start here. Back in motion.</p>
        </section>

        <NightCheckInCard
          nightMustDoDone={record.nightMustDoDone}
          nightRoomReset={record.nightRoomReset}
          onToggleNightMustDo={handleNightMustDoToggle}
          onToggleNightRoomReset={handleNightRoomResetToggle}
        />

        <RecentDaysCard days={recentDays} />
      </div>

      <ResetPanel
        isOpen={isResetOpen}
        feeling={record.resetFeeling}
        completedSteps={record.resetStepsCompleted}
        resetCompleted={record.resetCompleted}
        onClose={() => setIsResetOpen(false)}
        onSelectFeeling={handleFeelingSelect}
        onToggleStep={handleToggleResetStep}
        onRestart={handleRestartReset}
      />
    </main>
  );
}
