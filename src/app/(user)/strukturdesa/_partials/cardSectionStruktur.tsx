import dataDesa from "../_db/perangkatData";
import Image from "next/image";

function CardStrukturDesa() {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 py-10 px-10">
      {dataDesa.map((item) => (
        <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow">
          <Image
            src={item.image}
            alt={item.name}
            className="rounded-t-lg h-52"
            width={400}
            height={200}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {item.jabatan}
            </h5>

            <p className="mb-3 font-normal text-gray-700 ">
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { CardStrukturDesa };
