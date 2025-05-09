import { useState } from "react";

export const useMarkdownPreview = () => {
  const [isMarkdownPreview, setIsMarkdownPreview] = useState(false);

  const toggleMarkdownPreview = () => {
    setIsMarkdownPreview((prev) => !prev);
  };

  return { isMarkdownPreview, toggleMarkdownPreview };
};
