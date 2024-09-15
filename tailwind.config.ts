import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "#F6510B"
      },
      fontFamily: {
        "vazir-900": "Vazirmatn Black",
        "vazir-800": "Vazirmatn ExtraBold",
        "vazir-700": ["Vazirmatn Bold En", "Vazirmatn Bold Ar"],
        "vazir-600": ["Vazirmatn SemiBold Ar", "Vazirmatn SemiBold En"],
        "vazir-500": ["Vazirmatn Medium En", "Vazirmatn Medium Ar"],
        "vazir-400": ["Vazirmatn Regular En","Vazirmatn Regular Ar"],
        "vazir-300": ["Vazirmatn Light Ar", "Vazirmatn Light En"],
        "vazir-200": "Vazirmatn ExtraLight",
        "vazir-100": "Vazirmatn Thin",
      }
    }
  },
  plugins: [],
};
export default config;
