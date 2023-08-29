type ProjectLinkType = "github" | "career-description" | "live-demo";

export interface ProjectLink {
  type: ProjectLinkType;
  url: string;
}

export interface ImageMetadata {
  src: string;
  mode: "portrait" | "landscape";
  frame?: "mobile" | "desktop";
}

export interface MajorProject {
  title: string;
  description: string;
  /**
   * @description
   * URL of images to display.
   * Given images will be displayed in a form of carousel.
   */
  images: ImageMetadata[];
  links: ProjectLink[];
}
