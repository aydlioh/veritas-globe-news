import { MarkdownActionBtn } from './MarkdownActionBtn';

type MarkdownActionProps = {
  applyMarkdown: (type: string) => void;
};

export const MarkdownAction = ({ applyMarkdown }: MarkdownActionProps) => {
  return (
    <div className="absolute bottom-[8px] left-[8px] h-6 rounded-[4px] bg-white/80 backdrop-blur-[4px]">
      <div className="flex flex-row gap-2 ">
        <MarkdownActionBtn
          iconName="Bold"
          onClick={() => applyMarkdown('Bold')}
        />
        <MarkdownActionBtn
          iconName="Italic"
          onClick={() => applyMarkdown('Italic')}
        />
        <MarkdownActionBtn
          iconName="Header"
          onClick={() => applyMarkdown('Header')}
        />

        <div className="h-6 w-[1px] bg-graphite/4"></div>
        <MarkdownActionBtn
          iconName="Link"
          onClick={() => applyMarkdown('Link')}
        />
        <MarkdownActionBtn
          iconName="OrderList"
          onClick={() => applyMarkdown('OrderList')}
        />
        <MarkdownActionBtn
          iconName="UnorderedList"
          onClick={() => applyMarkdown('UnorderedList')}
        />
      </div>
    </div>
  );
};
