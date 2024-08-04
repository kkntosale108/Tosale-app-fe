import CardPotensiDesa from "./CardPotensiDesa";
import Data from "./_db/potensiDesaData";

const PotensiDesa = () => {
  return (
    <div className="w-full h-full container mx-auto">
      <div className="mt-14 px-10 w-full h-full flex flex-col justify-start items-start">
        <h1 className="text-[#1A4D2E] text-[40px] font-bold">Potensi Desa</h1>
        <p className="text-[20px] mb-10">
          Secara umum Wilayah Desa Tosale memiliki Struktur tanah berpulut yang
          cocok untuk perkebunan serta kawasan industri. Secara umum yang
          menunjang untuk pengembangan Desa
        </p>
      </div>
      <div className="grid grid-cols-2">
        {Data &&
          Data.map((item) => (
            <CardPotensiDesa
            key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
          
      </div>
    </div>
  );
};

export default PotensiDesa;
