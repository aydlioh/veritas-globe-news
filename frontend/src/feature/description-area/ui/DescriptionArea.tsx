import {
  MarkdownAction,
  MarkdownPreview,
  MarkdownPreviewButton,
  useApplyMarkdown,
  useMarkdownPreview,
  TextArea,
} from '..';

type Props = {
  description: string;
  setDescription: (value: string) => void;
};

export const DescriptionArea = ({ description, setDescription }: Props) => {
  const { isMarkdownPreview, toggleMarkdownPreview } = useMarkdownPreview();
  const { applyMarkdown } = useApplyMarkdown(description, setDescription);

  return (
    <div className="relative flex flex-col gap-[8px]">
      {isMarkdownPreview ? (
        <MarkdownPreview description={description} />
      ) : (
        <TextArea description={description} setDescription={setDescription} />
      )}
      {!isMarkdownPreview && <MarkdownAction applyMarkdown={applyMarkdown} />}
      <MarkdownPreviewButton
        toggleMarkdownPreview={toggleMarkdownPreview}
        isActive={isMarkdownPreview}
      />
    </div>
  );
};
