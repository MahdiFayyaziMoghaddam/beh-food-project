export interface ILoginStates {
  phone: string;
  isPhoneValid: boolean;
  code: string;
  isValidCode: boolean;
  generatedCode: number | null;
  showTimer: number;
  isShowErrorBox: boolean;
  errorMsg: string;
  isShowBackdrop: boolean;
}
