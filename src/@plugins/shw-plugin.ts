import plugin from "tailwindcss/plugin";
// import colors from "tailwindcss/colors"

const shwPlugin = plugin(
  // Add css variable definitions to the base layer
  // eslint-disable-next-line func-names
  function ({ addBase }) {
    addBase({
      ":root": {
        // "--background": "147, 100%, 26%",
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          success: {
            DEFAULT: "hsl(var(--success))",
            foreground: "hsl(var(--success-foreground))",
          },
          royal: {
            DEFAULT: "hsl(var(--royal))",
            foreground: "hsl(var(--royal-foreground))",
          },
          warning: {
            DEFAULT: "hsl(var(--warning))",
            foreground: "hsl(var(--warning-foreground))",
          },
          caution: {
            DEFAULT: "hsl(var(--caution))",
            foreground: "hsl(var(--caution-foreground))",
          },
          danger: {
            DEFAULT: "hsl(var(--danger))",
            foreground: "hsl(var(--danger-foreground))",
          },
          brand: {
            primary: {
              DEFAULT: "#0765FF",
              background: "#F1F4FF",
              foreground: "#324DB7",
              iceberg: "#344563",
              berry: "#F1F4FF",
            },
            cancel: "#F4F4F4",
            success: {
              DEFAULT: "#ECFDF3",
              background: "#ECFDF3",
              foreground: "#027A48",
            },
            info: {
              DEFAULT: "#EFF8FF",
              background: "#EFF8FF",
              foreground: "#175CD3",
            },
            danger: {
              DEFAULT: "#FEF3F2",
              background: "#FEF3F2",
              foreground: "#B42318",
            },
            warning: {
              DEFAULT: "#FFF6E0",
              background: "#FFF6E0",
              foreground: "#E65300",
            },
            dark: {
              DEFAULT: "#1E1E1E",
              400: "#1A1A1A",
              300: "#414141",
            },
            royal: {
              DEFAULT: "#f5f2fa",
              background: "#f5f2fa",
              foreground: "#4c23ad",
            },
          },
        },
        borderRadius: {},
        boxShadow: {
          "custom-inset": "0px -3px 6px 0px #0000001F inset",
        },
      },
    },
  }
);

export default shwPlugin;
