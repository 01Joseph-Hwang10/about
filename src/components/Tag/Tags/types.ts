/* eslint-disable no-unused-vars */
export interface TagColorScheme {
  backgroundColor: string | ((isDarkMode?: boolean) => string);
  textColor?: string | ((isDarkMode?: boolean) => string);
}
