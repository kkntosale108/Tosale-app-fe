import Image from "next/image";
import newsData from "../_db/newsData";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const BlogDetail = ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id, 10);
  const newsItem = newsData.find((item) => item.id === id);

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Blog tidak ditemukan</h1>
        <p className="text-lg text-[#71747B] mt-2">
          Maaf, data yang Anda cari tidak tersedia.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16">
      <Image
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full h-96"
        width={1000}
        height={300}
      />
      <div className="flex px-16 items-center justify-between">
        <h1 className="text-3xl text-[#1A4D2E] font-bold mt-4">
          {newsItem.title}
        </h1>
        <p className="bg-[#1A4D2E] px-8 py-2 text-sm text-[#FEF7FF] rounded-full mt-2">
          {newsItem.category}
        </p>
      </div>
      <div className="px-16">
        <p className="text-lg text-[#71747B] mt-2">{newsItem.description}</p>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return newsData.map((item) => ({ id: item.id.toString() }));
}

export default BlogDetail;
