export type TLoginActions =
  | { type: "SET_PHONE"; payload: string }
  | { type: "SET_CODE"; payload: string }
  | { type: "SET_IS_VALID_CODE"; payload: boolean }
  | { type: "SET_IS_VALID_PHONE"; payload: boolean }
  | { type: "SET_GENERATED_CODE"; payload: number | null }
  | { type: "SET_SHOW_TIMER"; payload: number }
  | { type: "SET_IS_SHOW_ERROR_BOX"; payload: boolean }
  | { type: "SET_ERROR_MSG"; payload: string }
  | { type: "SET_IS_SHOW_BACKDROP"; payload: boolean };
