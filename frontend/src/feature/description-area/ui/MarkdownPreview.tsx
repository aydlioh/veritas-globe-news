// import { ImagePreview } from '@/shared/ui/image-preview';
import ReactMarkdown from 'react-markdown';

interface Props {
  description: string;
}

export const MarkdownPreview = ({ description }: Props) => {
  return (
    <div className="animation prose relative h-[330px] min-w-full overflow-y-auto rounded-[8px] border border-graphite/20 bg-white px-[12px] pb-[8px] pt-[8px]">
      {/* <div className="w-[400px]">
        <ImagePreview
          blockKey="news-image"
          className="float-left mr-4 mb-2 w-[200px] h-auto"
          height="h-80"
        />
      </div> */}
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
