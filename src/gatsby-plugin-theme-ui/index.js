const theme = {
  // base theme values...
  config: {},
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    c1: "#FFCDB2",
    c2: "#FFB4A2",
    c3: "#E5989B",
    c4: "#B5838D",
    c5: "#6D6875 ",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        c1: "#FFCDB2",
        c2: "#FFB4A2",
        c3: "#E5989B",
        c4: "#B5838D",
        c5: "#6D6875 ",
      },
    },
  },

  styles: {
    // the keys used here reference elements in MDX
    h1: {
      // the style object for each element
      // can reference other values in the theme
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
    },
    a: {
      color: "primary",
      ":hover, :focus": {
        color: "secondary",
      },
    },
    // more styles can be added as needed
  },
};

export default theme;
