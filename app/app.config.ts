export default defineAppConfig({
  ui: {
    colors: {
      primary: "rose",
      neutral: "zinc",
    },
    container: {
      base: "min-w-[90vw]",
    },
    button: {
      slots: {
        base: "cursor-pointer",
      },
      variants: {
        color: {
          primary:
            "bg-primary-500 text-white dark:bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-600 dark:text-white",
        },
        variant: {
          solid: "",
          outline: "",
          soft: "",
          subtle: "",
          ghost: "",
          link: "",
        },
      },
    },
  },
});
