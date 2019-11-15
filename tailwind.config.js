// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  variants: {
    visibility: ["responsive", "group-hover"]
  },
  theme: {
    fontFamily: {
      display: ["MuseoSansRounded", "sans-serif"],
      body: ["MuseoSansRounded", "sans-serif"],
      mono: [
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace"
      ]
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px"
    },
    boxShadow: {
      "default": "0 1px 3px 0 rgba(10,21,48, .1), 0 1px 2px 0 rgba(10,21,48, .06)",
      "md": " 0 4px 6px -1px rgba(10,21,48, .1), 0 2px 4px -1px rgba(10,21,48, .06)",
      "lg": " 0 10px 15px -3px rgba(10,21,48, .1), 0 4px 6px -2px rgba(10,21,48, .05)",
      "xl": " 0 20px 25px -5px rgba(10,21,48, .1), 0 10px 10px -5px rgba(10,21,48, .04)",
      "2xl": "0 25px 50px -12px rgba(10,21,48, .25)",
      "3xl": "0 35px 60px -15px rgba(10,21,48, .3)",
      "inner": "inset 0 2px 4px 0 rgba(10,21,48,0.06)",
      "outline": "0 0 0 3px rgba(66,153,225,0.5)",
      "focus": "0 0 0 3px rgba(66,153,225,0.5)",
      "none": "none"
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      gray: {
        default: "#8896B3",
        "100": "#f4f6f9",
        "200": "#DDE3F0",
        "300": "#C5CEE0",
        "400": "#8896B3",
        "500": "#46567C",
        "600": "#0A1530"
      },
      yellow: {
        default: "#EC9C24",
        "100": "#FFF3E0",
        "200": "#FDD69B",
        "300": "#FAB958",
        "400": "#EC9C24",
        "500": "#BC750C",
        "600": "#724504"
      },
      orange: {
        default: "#E05729",
        "100": "#FFE9E2",
        "200": "#FDB49C",
        "300": "#F5835D",
        "400": "#E05729",
        "500": "#AB360F",
        "600": "#7F2609"
      },
      brown: {
        default: "#9C5941",
        "100": "#EED2C8",
        "200": "#DFA793",
        "300": "#BE7B64",
        "400": "#9C5941",
        "500": "#733925",
        "600": "#401D11"
      },
      red: {
        default: "#C8223D",
        "100": "#F0D2D7",
        "200": "#EE97A6",
        "300": "#E65970",
        "400": "#C8223D",
        "500": "#88061B",
        "600": "#3F010B"
      },
      pink: {
        default: "#E65F8C",
        "100": "#FEECF2",
        "200": "#FCBED2",
        "300": "#F58CB0",
        "400": "#E65F8C",
        "500": "#C13765",
        "600": "#86193E"
      },
      purple: {
        default: "#8537AD",
        "100": "#E2C2F2",
        "200": "#CC91EB",
        "300": "#AB5ED3",
        "400": "#8537AD",
        "500": "#5C1E7D",
        "600": "#2D0C3E"
      },
      blue: {
        default: "#336ABC",
        "100": "#D1E1F8",
        "200": "#96B9EE",
        "300": "#5D8DD5",
        "400": "#336ABC",
        "500": "#1F4B8F",
        "600": "#102B52"
      },
      teal: {
        default: "#1E9393",
        "100": "#D4E3E3",
        "200": "#87CECE",
        "300": "#4AB3B3",
        "400": "#1E9393",
        "500": "#076A6A",
        "600": "#022F2F"
      },
      green: {
        default: "#29A575",
        "100": "#E7F4EF",
        "200": "#9FE7CC",
        "300": "#5ECEA3",
        "400": "#29A575",
        "500": "#0C744C",
        "600": "#02321F"
      }
    },
    extend: {
      spacing: {
        px: "1px",
        80: "20rem",
        100: "25rem"
      },
      borderColor: {
        default: "#E4E7F0"
      },
      inset: {
        "-16": "-4rem"
      },
      width: {
        "max-content": "max-content",
        "min-content": "min-content",
        "vw": "100vw"
      },
      height: {
        "vh": "100vh"
      }
    }
  },
  plugins: [
    require("tailwindcss-grid")({
      gaps: {
        0: "0",
        4: "1rem",
        6: "1.5rem",
        8: "2rem"
      },
      variants: ["responsive"]
    })
  ]
}
