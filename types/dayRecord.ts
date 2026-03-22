export type Mode = "strong" | "normal" | "survival";

export type ResetFeeling = "overwhelmed" | "avoiding" | "tired" | "behind";

export interface DayRecord {
  dateKey: string;
  mode: Mode | null;
  mustDo: string;
  mustDoDone: boolean;
  supportTask?: string;
  resetFeeling: ResetFeeling | null;
  resetStepsCompleted: string[];
  resetCompleted: boolean;
  nightMustDoDone: boolean;
  nightRoomReset: boolean;
}
