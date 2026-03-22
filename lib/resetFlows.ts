import type { ResetFeeling } from "@/types/dayRecord";

export type ResetFlowKey = ResetFeeling | "default";

export interface ResetFlowStep {
  id: string;
  label: string;
}

export interface ResetFlow {
  key: ResetFlowKey;
  label: string;
  steps: ResetFlowStep[];
}

export const RESET_FLOWS: Record<ResetFlowKey, ResetFlow> = {
  overwhelmed: {
    key: "overwhelmed",
    label: "Overwhelmed",
    steps: [
      { id: "slow-breath", label: "Take one slow breath" },
      { id: "drink-water", label: "Drink water" },
      { id: "pick-next-step", label: "Pick one next step" },
      { id: "ten-minute-sprint", label: "Do a 10 minute sprint" },
    ],
  },
  avoiding: {
    key: "avoiding",
    label: "Avoiding",
    steps: [
      { id: "open-task-or-file", label: "Open the task or file" },
      { id: "stand-up", label: "Stand up" },
      { id: "clean-three-minutes", label: "Clean for 3 to 5 minutes" },
      { id: "ten-minute-sprint", label: "Do a 10 minute sprint" },
    ],
  },
  tired: {
    key: "tired",
    label: "Tired",
    steps: [
      { id: "drink-water", label: "Drink water" },
      { id: "wash-face-or-shower", label: "Wash face or shower" },
      { id: "walk-two-minutes", label: "Walk or stand for 2 minutes" },
      {
        id: "smallest-useful-step",
        label: "Do the smallest useful next step",
      },
    ],
  },
  behind: {
    key: "behind",
    label: "Behind",
    steps: [
      { id: "no-catch-up", label: "Do not catch up all at once" },
      {
        id: "handle-one-loose-end",
        label: "Send one message or handle one loose end",
      },
      { id: "clean-three-minutes", label: "Clean for 3 to 5 minutes" },
      { id: "ten-minute-sprint", label: "Do a 10 minute sprint" },
    ],
  },
  default: {
    key: "default",
    label: "Default",
    steps: [
      { id: "drink-water", label: "Drink water" },
      { id: "wash-face-or-shower", label: "Wash face or shower" },
      { id: "clean-five-minutes", label: "Clean for 5 minutes" },
      { id: "ten-minute-sprint", label: "Do a 10 minute sprint" },
    ],
  },
};

export function getResetFlow(feeling: ResetFeeling | null): ResetFlow {
  if (!feeling) {
    return RESET_FLOWS.default;
  }

  return RESET_FLOWS[feeling];
}
