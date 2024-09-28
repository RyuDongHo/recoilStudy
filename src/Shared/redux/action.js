export const TOGGLE_THEME = (themeName) => {
  return {
    type: "TOGGLE_THEME",
    theme: themeName,
  };
};

export const TOGGLE_SHORT_COMMENTS_AREA = (isOpen) => {
  return {
    type: "TOGGLE_SHORT_COMMENTS_AREA",
    isShortCommentsAreaOpen: isOpen,
  };
};
