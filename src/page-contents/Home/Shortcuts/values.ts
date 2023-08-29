const shortcuts = [
  "About",
  "Career",
  "Skillsets",
  "Projects",
  "Contact",
] as const;

export type Shortcut = (typeof shortcuts)[number];

export default {
  shortcuts,
};
