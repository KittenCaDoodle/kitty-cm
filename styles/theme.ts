import { Theme } from "theme-ui"

import base from "./preset-base"

const theme: Theme = {
  ...base,
  colors: {
    background: "#ffc5c4",
    text: "#473E30",
    primary: "#141221",
    heading: "#473E30",
    background2: "#ffc5c4",
    background3: "#ffc5c4",
  },

  sizes: {
    container: "1080px",
  },
  config: {
    useLocalStorage: true,
  },

  buttons: {
    primary: {
      color: "background",
      backgroundColor: "primary",
      border: "1px solid transparent",
      transition: "all .3s linear",

      "&:not(:disabled):hover": {
        bg: "background",
        color: "primary",
        borderColor: "primary",
        cursor: "pointer",
      },

      "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.3,
      },
    },
    secondary: {
      border: '3px solid #362F24',
      borderRadius: '10px',
      background: 'linear-gradient(183.33deg, rgba(255, 255, 255, 0) 5.05%, #FFC51F 5.04%)',

      "&:hover": {
        background: '#FFC51F'
      },

      "span, a": {
        fontFamily: 'Burbank Big Wide',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        color: '#1F1B15',
        textDecoration: 'none'
      }
    }
  },

  lineHeights: { body: 1.45 },

  text: {
    normal: {
      fontFamily: 'Burbank Small',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '26px',
      lineHeight: '30px',
      color: ' #473E30'
    },
    road_map_days: {
      transform: 'rotate(-90deg)',
      transformOrigin: 'right, top',
      msTransform: 'rotate(-90deg)',
      msTransformOrigin: 'right, top',
      webkitTransform: 'rotate(-90deg)',
      webkitTransformOrigin: 'right, top',
      position: 'absolute',
      fontFamily: 'Burbank Big Regular',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '42px',
      lineHeight: '42px',
      textAlign: 'center',
      letterSpacing: '0.1em',
      color: '#362F24',
    },
    road_map_normal: {
      fontFamily: 'Burbank Small',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '26px',
      lineHeight: '30px',
      color: '#473E30',
      "@media screen and (max-width: 1080px)": {
        fontSize: '22px'
      }
    },
    road_map_bold: {
      fontFamily: 'Burbank Small Black',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '26px',
      lineHeight: '30px',
      color: '#473E30',
      "@media screen and (max-width: 1080px)": {
        fontSize: '22px'
      }
    },
    heading: {
      color: "heading",
      lineHeight: "body",
      fontSize: "2.2rem",
    },
    heading2: {
      color: "heading",
      lineHeight: "body",
      fontSize: "1.9rem",
    },
    heading3: {
      color: "heading",
      lineHeight: "body",
      fontSize: "1.7rem",
    },
    base: {
      color: "text",
      lineHeight: "body",
      fontSize: "1.4rem",
    },
    small: {
      color: "text",
      lineHeight: "body",
      fontSize: "1.2rem",
    },
  },

  styles: {
    ...base.styles,

    root: {
      ...base.styles?.root,
      fontSize: "62.5%",

      body: {
        /** Default text styles */
        fontSize: "1.4rem",
        lineHeight: 1.45,
        color: "text",
      },

      img: {
        maxWidth: "100%",
        height: "auto",
      },

      p: {
        margin: 0,
      },
    },

    spinnerSmall: {
      size: "1.2rem!important",
    },
  },
}

export default theme
