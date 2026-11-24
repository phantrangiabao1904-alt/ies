import type { Config } from "tailwindcss";

// Palette lấy từ Stitch (IES Vocational Academic Identity) + giữ tên màu cũ của dự án.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F5587",
          dark: "#0B426A",
          blue2: "#3764AF",
          soft: "#E6F0F8",
        },
        blue2: "#3764AF",
        "surface-dim": "#E3EAF0",
        cyan: { DEFAULT: "#2DBEDC" },
        cta: { DEFAULT: "#F58232", hover: "#E07024" },
        sand: "#F6EEE5",
        surface: "#F7F9FF",
        line: "#D9E2EA",
        ink: "#263849",
        muted: "#5D6B78",
        // Token Stitch
        primary: { DEFAULT: "#003D66", container: "#0F5587", fixed: "#CFE5FF", "fixed-dim": "#9ACBFF" },
        secondary: { DEFAULT: "#2F5DA8", container: "#84AEFE", fixed: "#D7E2FF", "fixed-dim": "#ACC7FF" },
        tertiary: { DEFAULT: "#00414D", container: "#005A6A", fixed: "#ACEDFF", "fixed-dim": "#51D6F5" },
        "on-primary": "#FFFFFF",
        "on-secondary": "#FFFFFF",
        "on-tertiary-fixed": "#001F26",
        "on-surface": "#091D2D",
        "on-surface-variant": "#41474F",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#EDF4FF",
        "surface-container": "#E3EFFF",
        "surface-container-high": "#D8EAFF",
        "surface-container-highest": "#D1E4FB",
        "surface-bright": "#F7F9FF",
        "outline": "#727780",
        "outline-variant": "#C1C7D0",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        display: ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "title-md": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "600" }],
        "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.02em", fontWeight: "500" }],
      },
      spacing: {
        "space-xs": "0.5rem",
        "space-sm": "1rem",
        "space-md": "1.5rem",
        "space-lg": "2rem",
        "space-xl": "3rem",
        "space-2xl": "4rem",
        "space-3xl": "6rem",
        "margin-mobile": "1rem",
        margin: "2rem",
        gutter: "1.5rem",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
