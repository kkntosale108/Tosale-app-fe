import Image from "next/image";
import Tosalemap from "../../../../public/aset/Tosale Map.svg";
import FotoFoot from "../../../../public/aset/fotosejarah.svg"

function Page() {
  return (
    <div className="px-20 py-24">
      <div>
        <h1 className="text-3xl font-semibold  text-[#1A4D2E]">Sejarah Desa</h1>
      </div>
      <div>
        <div className="flex gap-5 pt-6">
          <p className="text-justify">
            Desa Tosale adalah salah satu Desa yang berada dikawasan pesisir
            yang berhadapan langsung dengan selat makassar, selain itu Desa
            Tosale secara geografis memiliki wilayah pegunungan dan daratan.
            Jauh sebelum disebut sebagai sebuah Desa dengan penamaan “Tosale”
            dimana dengan penyeraggaman penyebutan oleh Negara melalui
            pengesahan Peraturan dari sebutan “NGAPA atau Kampu” (bahasa lokal
            suku kaili) sampai disebut menjadi Desa. Biasanya dari orang tua
            terdahulu pengambilan atau sebutan tentang penamaan kata dalam hal
            ini Tosale tentu tidak lahir begitu saja ada cerita atau sejarah
            yang melatarbelakangi. Berdasarkan sumber data dan informasi yang
            dikumpulkan bahwa ada seseorang yang diduga memiliki ketokohan
            sekaligus kecerdesan dan pemimpin dikelompoknya pada waktu itu yang
            bernama “INTAKALUMA” beliau berasal dari Kampung Towale melakukan
            perjalanan melewati pesisir pantai datang secara berkelompok masuk
            ke kampung ini yang belum disebut sebagai Tosale diperkirakan ±30
            Tahun sebelum lahir kampung Tosale yang diperkirakan 1750an namun
            berdasarkan informasi bahwa kampung ini sudah berpenghuni saat
            mereka masuk di kampung. Tujuan INTAKALUMA dan orang-orang yang
            bersamanya adalah membuka atau menggarap lahan pertanian serta
            perkebunan, dan aktivitas perjalanan dari Towale menuju Tosale
            senantiasa terus menerus dilakukan dengan menyusuri pesisir pantai,
            kebiasaan menyisir pantai pada saat air laut sedang surut disebut
            NOSALE (dalam bahasa kaili), sehingga pada akhirnya untuk melidungi
            tanaman dimana saat itu sekelompok ini tinggal dan menetap disebuah
            lokasi yang disebut BOYA adalah sebuah wilayah pemukiman.
          </p>
          <Image
            src={Tosalemap}
            alt="mapTosale"
            className=""
            width={350}
            height={100}
          />
        </div>
        <div>
          <p className="text-justify pb-7">
            Sejarah TO-SALE sendiri jika diartikan erat hubungannya dengan
            bahasa kaili yaitu dari NO-SALE yang merujuk pada pengertian
            aktivitas berjalan dipinggir pantai yang berubah menjadi TO =
            berarti orang sedangakan SALE = artinya orang yang berjalan
            dipinggir pantai sehingga arti dari kalimat ini adalah orang yang
            berjalan dipinggir pantai, secara historis bahwa orang-orang yang
            bermukim di Tosale erat kaitannya dengan orang dari Towale yang
            beraktivitas pulang-pergi menggarap lahan pertanian dan perkebunan
            di Desa Tosale. Selain yang datang dari Desa Towale berdasarkan
            fakta yang ada Desa Tosale juga didatangi oleh suku Bajo dan Bugis
            tetapi setelah Tosale menjadi sebuah kampung dan mempunyai struktur
            kepemimpinan, sehingga sebagian lansia pada saat itu dapat berbahasa
            bajo dan bahasa bugis bahkan diataranya melakukan hubungan
            perkawinan. Dengan demikian dapat ditarik kesimpulan bahwa seorang
            yang bernama INTAKALUMA yang memberikan penamaan sampai dengan
            sekarang disebut Tosale bahkan nama beliau memiliki keturunan yang
            bernama IMPULEKE yang diabadikan menjadi sebuah nama jalan dan dari
            keturunan beliaulah yang banyak melahirkan dan mengisi susunan atau
            struktur kepemimpinan serta tata kelola kepemerintahan di Desa.
            Seiring perkembangan zaman maka ide atau gagasan para orang-orang
            terdahulu untuk menjadikan Kampung Tosale memiliki struktur
            kepemerintahan yang kita sebut kepala kampung atau saat ini kepala
            Desa agar dapat menjalankan tata kelola pemerintahan dikampung yang
            diantaranya bermusyawarah untuk menyepakati beberapa hal kebijakan
            strategis Desa maka pada saat itu yang diangkatlah seorang kepala
            kampung dimana kehidupan bermasyarakat untuk menjalankan aktivitas
            sehari- harinya harus hidup rukun saling menjaga keharmonisan antara
            yang satu dengan yang lain.
          </p>
          <Image
            src={FotoFoot}
            alt="mapTosale"
            className="w-full rounded-xl"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
export default Page;
