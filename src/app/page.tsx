import LandingPageHero from "@/Component/LandingPage/landing-page-hero";
import Navbar from "@/Component/LandingPage/landing-page-navbar";
import NewsPage from "@/Component/LandingPage/landing-page-newspage";
import React from 'react'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <LandingPageHero/>
      <NewsPage/>

    </main>
  );
}
