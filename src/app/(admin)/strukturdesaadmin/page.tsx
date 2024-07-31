import { TabelStruktur } from "./_partials/tabelstruktur"

function Page(){
    return(
        <div className="w-full pt-5 px-10">
            <h1 className="text-2xl font-semibold">Struktur</h1>
            <p>Admin dapat menambah, menghapus dan mengubah Struktur Aparat Desa</p>
            <TabelStruktur />
        </div>
    )
}

export default Page