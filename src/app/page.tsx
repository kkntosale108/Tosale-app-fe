import LandingPageHero from "@/Component/LandingPage/landing-page-hero";
import Navbar from "@/Component/LandingPage/landing-page-navbar";
import NewsPage from "@/Component/LandingPage/landing-page-newspage";
import { CardSection } from "../app/(user)/blog/_partials/cardSection";
import { LandingPageFooter } from "@/Component/LandingPage/landing-page-footer";
import GalleryPage from "@/Component/LandingPage/Landing-page-galery";
import React from 'react'
import { FooterSection } from "@/Component/LandingPage/footerSection";


export default function Home() {

  
  return (
    
    <main>
      <Navbar/>
      <LandingPageHero/>
      <NewsPage/>
      <CardSection limit={5} pagination="true" horizontalScroll={true} />
      <GalleryPage/>
      <LandingPageFooter/>


    </main>
  );
}
