import ReactMarkdown from 'react-markdown';

interface Props {
  description: string;
}

export const MarkdownPreview = ({ description }: Props) => {
  return (
    <div className="animation prose [&>p]:mb-4 relative h-[330px] min-w-full overflow-y-auto rounded-[8px] border border-graphite/10 bg-white px-[12px] pb-[8px] pt-[8px]">
      <ReactMarkdown
        components={{
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mint no-underline visited:text-mintactive hover:text-minthover"
            >
              {children}
            </a>
          ),
        }}
      >
        {description}
      </ReactMarkdown>
    </div>
  );
};
