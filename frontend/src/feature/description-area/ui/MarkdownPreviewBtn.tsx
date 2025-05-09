import { MarkdownActionBtn } from './MarkdownActionBtn';

interface Props {
  toggleMarkdownPreview: () => void;
  isActive?: boolean;
}

export const MarkdownPreviewButton = ({
  toggleMarkdownPreview,
  isActive,
}: Props) => {
  return (
    <div className="absolute right-[8px] top-[8px] z-50 rounded-[4px] bg-white/80 backdrop-blur-[4px]">
      <MarkdownActionBtn
        iconName={'Eye'}
        onClick={toggleMarkdownPreview}
        isActive={isActive}
      />
    </div>
  );
};
