import { useEffect } from "react";

const useAdmonitionHeaderRemover = (id: string) => {
  useEffect(() => {
    const admonition = document.getElementById(id);
    const header = admonition?.querySelector("div");
    if (header) {
      header.style.display = "none";
    }
  }, []);
};

export default useAdmonitionHeaderRemover;
