const getHomepageButtonText = (homepageUrl: string) => {
  if (homepageUrl.includes("github.com")) return "Showcase";
  if (homepageUrl.includes("npmjs.com") || homepageUrl.includes("docker.com"))
    return "Releases";
  return "Live Demo";
};

export default {
  getHomepageButtonText,
};
