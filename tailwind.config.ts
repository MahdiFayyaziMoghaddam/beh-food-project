import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      "1440x": '1440px',
      "1280x": '1280px',
      "1024x": '1024px',
      "860x": '860px',
      "640x": '640px',
      "480x": '480px',
      "320x": '320px',
    },

    extend: {
      colors: {
        primary: "#F6510B"
      },
      fontFamily: {
        "vazir-900": ["Vazirmatn Black Ar","Vazirmatn Black En"],
        "vazir-800": ["Vazirmatn ExtraBold Ar","Vazirmatn ExtraBold En"],
        "vazir-700": ["Vazirmatn Bold Ar", "Vazirmatn Bold En"],
        "vazir-600": ["Vazirmatn SemiBold Ar", "Vazirmatn SemiBold En"],
        "vazir-500": ["Vazirmatn Medium Ar", "Vazirmatn Medium En"],
        "vazir-400": ["Vazirmatn Regular Ar","Vazirmatn Regular En"],
        "vazir-300": ["Vazirmatn Light Ar", "Vazirmatn Light En"],
        "vazir-200": ["Vazirmatn ExtraLight Ar","Vazirmatn ExtraLight En"],
        "vazir-100": ["Vazirmatn Thin Ar","Vazirmatn Thin En"]
      }
    }
  },
  plugins: [],
};
export default config;
