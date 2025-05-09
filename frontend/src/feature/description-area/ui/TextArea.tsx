type Props = {
  description: string;
  setDescription: (value: string) => void;
};

export const TextArea = ({ description, setDescription }: Props) => {
  return (
    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Описание блока"
      className="animation h-full min-h-[330px] w-full  rounded-md border border-graphite/20 px-[12px] pb-[92px] pt-[8px] font-base focus:outline-none"
    />
  );
};
