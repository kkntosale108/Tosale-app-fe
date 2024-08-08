import { NewsAdmin } from "./_partial/newstable";

function Page(){
    return(
        <div className="w-full pt-5 px-10">
            <h1 className="text-2xl font-semibold">Berita</h1>
            <p>Admin dapat menambah, menghapus dan mengubah Berita</p>
            <NewsAdmin/>
        </div>
    )
}

export default Page