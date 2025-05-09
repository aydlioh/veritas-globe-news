import { useCallback } from "react";

export const useApplyMarkdown = (
  description: string,
  setDescription: (value: string) => void,
) => {
  const applyMarkdown = useCallback(
    (markdownType: string) => {
      const textarea = document.querySelector(
        "textarea",
      ) as HTMLTextAreaElement | null;

      if (!textarea) {
        console.error("Textarea not found");
        return;
      }

      const scrollTop = textarea.scrollTop;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = description.slice(start, end);

      if (selectedText.length === 0) return;

      let newText = selectedText;
      let newStart = start;
      let newEnd = end;

      switch (markdownType) {
        case "Bold":
          if (selectedText.startsWith("**") && selectedText.endsWith("**")) {
            newText = selectedText.slice(2, -2);
            newStart = start;
            newEnd = end - 4;
          } else {
            newText = `**${selectedText}**`;
            newStart = start;
            newEnd = end + 4;
          }
          break;

        case "Header":
          if (selectedText.startsWith("### ")) {
            newText = selectedText.slice(4);
            newStart = start;
            newEnd = end - 4;
          } else {
            newText = `### ${selectedText}`;
            newStart = start;
            newEnd = end + 4;
          }
          break;

        case "Italic":
          if (selectedText.startsWith("*") && selectedText.endsWith("*")) {
            newText = selectedText.slice(1, -1);
            newStart = start;
            newEnd = end - 2;
          } else {
            newText = `*${selectedText}*`;
            newStart = start;
            newEnd = end + 2;
          }
          break;

        case "Link": {
          const linkRegex = /^\[(.*?)\]\((.*?)\)$/;
          const match = selectedText.match(linkRegex);

          if (match) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [_, linkText] = match;
            newText = linkText;
            newStart = start;
            newEnd = start + linkText.length;
          } else {
            const placeholderUrl = "url";
            newText = `[${selectedText}](${placeholderUrl})`;
            newStart = start;
            newEnd = start + newText.length;
          }
          break;
        }

        case "OrderList": {
          const lines = selectedText.split("\n");
          const hasOrderList = lines.some((line) => /^\d+\.\s/.test(line));

          if (hasOrderList) {
            newText = lines
              .map((line) =>
                /^\d+\.\s/.test(line)
                  ? line.replace(/^\d+\.\s/, "").trim()
                  : line.trim(),
              )
              .join("\n");
          } else {
            let counter = 1;
            newText = lines
              .map((line) =>
                line.trim() ? `${counter++}. ${line.trim()}` : "",
              )
              .join("\n");
          }
          newStart = start;
          newEnd = start + newText.length;
          break;
        }

        case "UnorderedList": {
          const lines = selectedText.split("\n");
          const hasUnorderedList = lines.every(
            (line) => line.trim() === "" || line.startsWith("- "),
          );

          if (hasUnorderedList) {
            newText = lines
              .map((line) =>
                line.trim().startsWith("- ") ? line.slice(2) : line,
              )
              .join("\n");
          } else {
            newText = lines
              .map((line) => (line.trim() ? `- ${line.trim()}` : ""))
              .join("\n");
          }
          newStart = start;
          newEnd = start + newText.length;
          break;
        }

        default:
          return;
      }

      const updatedDescription =
        description.slice(0, start) + newText + description.slice(end);
      setDescription(updatedDescription);

      requestAnimationFrame(() => {
        textarea.focus();
        textarea.setSelectionRange(newStart, newEnd);
        textarea.scrollTop = scrollTop;
      });
    },
    [description, setDescription],
  );

  return { applyMarkdown };
};
