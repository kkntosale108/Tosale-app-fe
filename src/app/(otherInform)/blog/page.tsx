import { CardSection } from "./_partials/cardSection";
import { SearchSections } from "./_partials/searchSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita | Website Desa Tosale",
};

function Page() {
  return (
    <div className="pt-28 pb-16">
      <SearchSections />
      <CardSection limit={8} pagination="false"/>
    </div>
  );
}

export default Page;
