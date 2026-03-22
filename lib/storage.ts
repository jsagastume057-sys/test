import { getLocalDateKey } from "@/lib/date";
import { getResetFlow } from "@/lib/resetFlows";
import type { DayRecord, Mode, ResetFeeling } from "@/types/dayRecord";

const STORAGE_KEY = "baseline.day-records.v1";

type DayRecordMap = Record<string, DayRecord>;

function isMode(value: unknown): value is Mode {
  return value === "strong" || value === "normal" || value === "survival";
}

function isResetFeeling(value: unknown): value is ResetFeeling {
  return (
    value === "overwhelmed" ||
    value === "avoiding" ||
    value === "tired" ||
    value === "behind"
  );
}

function isClient(): boolean {
  return typeof window !== "undefined";
}

export function createEmptyDayRecord(dateKey: string): DayRecord {
  return {
    dateKey,
    mode: null,
    mustDo: "",
    mustDoDone: false,
    supportTask: "",
    resetFeeling: null,
    resetStepsCompleted: [],
    resetCompleted: false,
    nightMustDoDone: false,
    nightRoomReset: false,
  };
}

function normalizeRecord(candidate: unknown, dateKey: string): DayRecord {
  if (!candidate || typeof candidate !== "object") {
    return createEmptyDayRecord(dateKey);
  }

  const raw = candidate as Partial<DayRecord>;
  const resetFlow = getResetFlow(isResetFeeling(raw.resetFeeling) ? raw.resetFeeling : null);

  const resetStepsCompleted = Array.isArray(raw.resetStepsCompleted)
    ? raw.resetStepsCompleted.filter(
        (stepId): stepId is string =>
          typeof stepId === "string" &&
          resetFlow.steps.some((step) => step.id === stepId),
      )
    : [];

  return {
    dateKey,
    mode: isMode(raw.mode) ? raw.mode : null,
    mustDo: typeof raw.mustDo === "string" ? raw.mustDo : "",
    mustDoDone: Boolean(raw.mustDoDone),
    supportTask: typeof raw.supportTask === "string" ? raw.supportTask : "",
    resetFeeling: isResetFeeling(raw.resetFeeling) ? raw.resetFeeling : null,
    resetStepsCompleted,
    resetCompleted: Boolean(raw.resetCompleted),
    nightMustDoDone: Boolean(raw.nightMustDoDone),
    nightRoomReset: Boolean(raw.nightRoomReset),
  };
}

export function getAllRecords(): DayRecordMap {
  if (!isClient()) {
    return {};
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    if (!parsed || typeof parsed !== "object") {
      return {};
    }

    const records: DayRecordMap = {};
    for (const [dateKey, record] of Object.entries(parsed)) {
      records[dateKey] = normalizeRecord(record, dateKey);
    }
    return records;
  } catch {
    return {};
  }
}

function saveAllRecords(records: DayRecordMap): void {
  if (!isClient()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function getDayRecord(dateKey = getLocalDateKey()): DayRecord {
  const records = getAllRecords();
  const existing = records[dateKey];
  if (existing) {
    return existing;
  }

  const empty = createEmptyDayRecord(dateKey);
  saveDayRecord(empty);
  return empty;
}

export function saveDayRecord(record: DayRecord): void {
  const records = getAllRecords();
  records[record.dateKey] = normalizeRecord(record, record.dateKey);
  saveAllRecords(records);
}

export function listRecentDays(currentDateKey: string, limit = 5): DayRecord[] {
  const records = getAllRecords();
  return Object.values(records)
    .filter((record) => record.dateKey <= currentDateKey)
    .sort((a, b) => b.dateKey.localeCompare(a.dateKey))
    .slice(0, limit);
}
