/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "whatsapp-light": "url('/images/whatsapplight.png')",
        "whatsapp-dark": "url('/images/whatsappdark.png')",
      },
      backgroundColor: {
        whatsapp: "#00A884",
        chatLayoutbg: "#F0F2F5",
        Layoutbg: "#D1D7DB",
        playerBg: "rgba(11,20,26,.45)",
        chatfooter: "#CBD1D5",
        ownmessage: "#D9FDD3",
      },
      textColor: {
        iconsdeep: "#54656F",
      },
      flex: {
        sidebar: "0 0 30%",
      },
    },
  },
  plugins: [],
};
