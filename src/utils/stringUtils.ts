export const kebabCaseToSpacedPascal = (snakeCase: string) => {
  const words = snakeCase.split("-");
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
};

export const variableishToSpacedPascal = (variableish: string) => {
  return variableish
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

export const truncate = (str: string, maxLength: number) => {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
};
