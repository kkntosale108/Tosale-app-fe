interface CardPotensiProps {
  id: Number;
  title: String;
  content: String;
}
const CardPotensiDesa = ({ id, title, content }: CardPotensiProps) => {
  return (
    <div className="container mx-auto w-full h-full mb-5">
      <div className="relative w-[560px] h-[154px] flex flex-row rounded-xl shadow-xl bg-[#EFEFEF] mx-10 mt-5">
        <div className="w-[43px] rounded-l-xl h-[154px] bg-[#1A4D2E]"></div>
        <div className="absolute right-0 p-4">
          <div className="w-[24px] h-[18px] bg-[#1A4D2E]"></div>
        </div>
        <div className="pl-12 pr-12 pb-12 pt-6">
          <h1 className="font-extrabold text-[24px] pb-2">{title}</h1>
          <p className="text-[16px]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPotensiDesa;
