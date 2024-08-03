import HighlightNews from "../dashboard/_partials/highlightnews"
import TotalBeritaPage from "./_partials/allnews";
import PieChart from "./_partials/piechart";
function Page() {
    return(
        <div className="w-full pt-5 px-10 ">
            <h1 className="text-3xl font-bold mb-1">Halo!</h1>
            <p className="text-base">Selamat Datang Di Website Sistem Informasi Desa Tosale</p>
            <HighlightNews/>
            <TotalBeritaPage/>
            <PieChart/>
        </div>
    )
}
export default Page;