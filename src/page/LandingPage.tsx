import { useEffect, useRef, useState } from "react";
import AchievementSection from "../component/AchievementSection";
import LandingSection from "../component/LandingSection";
import Navbar from "../component/Navbar";
import WorkSection from "../component/WorkSection";
import LocomotiveScroll, { OnScrollEvent } from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import HeroSection from "../component/HeroSection";
import FeatureNews from "../component/FeatureNews";
import Footer from "../component/Footer";

function LandingPage() {
  const scrollRef = useRef<HTMLElement | null>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const [navbarState, setNavbarState] = useState({
    isVisible: true,
    isTransparent: true,
  });
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!scrollRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current!,
      smooth: true,
      smartphone: { smooth: true },
      multiplier: 1,
    });

    // Handle scroll events
    const handleScroll = (instance: OnScrollEvent) => {
      const currentScrollY = instance.scroll.y;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      const isNearTop = currentScrollY < 100;

      setNavbarState({
        isVisible: !isScrollingDown || isNearTop,
        isTransparent: isNearTop,
      });

      lastScrollY.current = currentScrollY;
    };

    locomotiveScrollRef.current.on("scroll", handleScroll);

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <Navbar
        visible={navbarState.isVisible}
        transparent={navbarState.isTransparent}
      />
      <main
        ref={scrollRef}
        className=" w-full min-h-screen bg-[#F2F2F2] overflow-x-hidden relative"
        data-scroll-container
      >
        <LandingSection />
        <AchievementSection />
        <WorkSection />
        <HeroSection />
        <FeatureNews />
        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
