import Heroimage from "../../../../../public/aset/hero.png"
import Image from "next/image";
function CardSection() {
    const newsData = [
        {
          id: 1,
          title: "Judul Berita 1",
          category: "Kategori 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
          image: "/aset/hero.png"
        },
        {
          id: 2,
          title: "Judul Berita 2",
          category: "Kategori 2",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
          image: "/aset/hero.png"
        },
        {
            id: 3,
            title: "Judul Berita 1",
            category: "Kategori 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
            image: "/aset/hero.png"
          },
          {
            id: 4,
            title: "Judul Berita 2",
            category: "Kategori 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
            image: "/aset/hero.png"
          },
          {
            id: 5,
            title: "Judul Berita 1",
            category: "Kategori 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
            image: "/aset/hero.png"
          },
          {
            id: 6,
            title: "Judul Berita 2",
            category: "Kategori 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
            image: "/aset/hero.png"
          },
          {
              id: 7,
              title: "Judul Berita 1",
              category: "Kategori 1",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
              image: "/aset/hero.png"
            },
            {
              id: 8,
              title: "Judul Berita 2",
              category: "Kategori 2",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
              image: "/aset/hero.png"
            }
      ];
  return (
    <>
      <div className="grid grid-cols-4 px-8 gap-14">
      {newsData.map((item) => (
        <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <Image src={item.image} alt={item.title} className="rounded-t-lg" width={500} height={300} />
          <div className="p-5">
            <div className="flex items-center justify-between">
              <h5 className="mb-2 text-2xl font-bold text-[#32343A]">{item.title}</h5>
              <p className="bg-[#1A4D2E] px-4 py-1 text-sm text-[#FEF7FF] rounded-full">{item.category}</p>
            </div>
            <p className="mb-3 font-normal text-[#71747B]">{item.description}</p>
            <h5 className="text-[#1A4D2E] text-2xl">Lihat selengkapnya...</h5>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export { CardSection };
