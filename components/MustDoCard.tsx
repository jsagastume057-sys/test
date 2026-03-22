"use client";

import { useEffect, useState } from "react";
import type { Mode } from "@/types/dayRecord";

interface MustDoCardProps {
  mode: Mode | null;
  mustDo: string;
  mustDoDone: boolean;
  supportTask?: string;
  onSaveMustDo: (mustDo: string) => void;
  onToggleMustDoDone: (done: boolean) => void;
  onSaveSupportTask: (supportTask: string) => void;
}

const MUST_DO_PLACEHOLDERS = [
  "Submit assignment",
  "Email professor",
  "Workout for 20 min",
];

export function MustDoCard({
  mode,
  mustDo,
  mustDoDone,
  supportTask = "",
  onSaveMustDo,
  onToggleMustDoDone,
  onSaveSupportTask,
}: MustDoCardProps) {
  const [draftMustDo, setDraftMustDo] = useState(mustDo);
  const [isEditingMustDo, setIsEditingMustDo] = useState(!mustDo);
  const [showSupportInput, setShowSupportInput] = useState(Boolean(supportTask));
  const [draftSupportTask, setDraftSupportTask] = useState(supportTask);

  useEffect(() => {
    setDraftMustDo(mustDo);
    setIsEditingMustDo(!mustDo);
  }, [mustDo]);

  useEffect(() => {
    setDraftSupportTask(supportTask);
    setShowSupportInput(Boolean(supportTask));
  }, [supportTask]);

  const placeholder = MUST_DO_PLACEHOLDERS[0];

  const saveMustDo = () => {
    const cleaned = draftMustDo.trim();
    onSaveMustDo(cleaned);
    setIsEditingMustDo(false);
  };

  const clearMustDo = () => {
    setDraftMustDo("");
    onSaveMustDo("");
    setIsEditingMustDo(true);
  };

  const saveSupportTask = () => {
    onSaveSupportTask(draftSupportTask.trim());
  };

  return (
    <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-700">Set one must-do.</p>
          <p className="text-xs text-slate-500">Exactly one priority for today.</p>
        </div>
        {mustDo ? (
          <button
            type="button"
            onClick={() => setIsEditingMustDo((current) => !current)}
            className="text-xs font-medium text-slate-600"
          >
            {isEditingMustDo ? "Close" : "Edit"}
          </button>
        ) : null}
      </div>

      {isEditingMustDo ? (
        <div className="space-y-2">
          <input
            type="text"
            value={draftMustDo}
            onChange={(event) => setDraftMustDo(event.target.value)}
            placeholder={placeholder}
            maxLength={120}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-slate-400"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={saveMustDo}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            >
              Save must-do
            </button>
            {mustDo ? (
              <button
                type="button"
                onClick={() => {
                  setDraftMustDo(mustDo);
                  setIsEditingMustDo(false);
                }}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
              >
                Cancel
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => onToggleMustDoDone(!mustDoDone)}
          className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left ${
            mustDoDone ? "border-emerald-300 bg-emerald-50" : "border-slate-200 bg-white"
          }`}
        >
          <span
            className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
              mustDoDone
                ? "border-emerald-500 bg-emerald-500 text-white"
                : "border-slate-400 text-transparent"
            }`}
          >
            ✓
          </span>
          <span className="text-sm font-medium text-slate-800">{mustDo || "Choose one must-do."}</span>
        </button>
      )}

      {mustDo && !isEditingMustDo ? (
        <button
          type="button"
          onClick={clearMustDo}
          className="mt-2 text-xs text-slate-500 underline-offset-2 hover:underline"
        >
          Clear and reset
        </button>
      ) : null}

      {mode === "strong" ? (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-medium text-slate-700">Optional support task</p>
          {!showSupportInput ? (
            <button
              type="button"
              onClick={() => setShowSupportInput(true)}
              className="mt-2 rounded-xl border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700"
            >
              Add support task
            </button>
          ) : (
            <div className="mt-2 space-y-2">
              <input
                type="text"
                value={draftSupportTask}
                onChange={(event) => setDraftSupportTask(event.target.value)}
                maxLength={120}
                placeholder="Optional: prepare notes"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={saveSupportTask}
                  className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-medium text-white"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDraftSupportTask("");
                    onSaveSupportTask("");
                    setShowSupportInput(false);
                  }}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700"
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
}
