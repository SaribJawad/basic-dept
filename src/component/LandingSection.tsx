import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import video from "../assets/hero-section-video.mp4";
import { useRef } from "react";

function LandingSection() {
  const thumbRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const thumb = thumbRef.current;
    const video = videoRef.current;

    if (!thumb || !video) return;

    const moveThumb = (e: MouseEvent) => {
      const rect = video.getBoundingClientRect();
      const x = e.clientX - rect.left - 100;
      const y = e.clientY - rect.top - 100;

      gsap.to(thumb, {
        x,
        y,
        duration: 0.6,
        ease: "power2.out",
        opacity: 1,
        scale: 1,
      });
    };

    const resetThumb = () => {
      gsap.to(thumb, {
        scale: 0,
        duration: 0.6,
        ease: "power2.out",
        opacity: 0,
      });
    };

    video.addEventListener("mouseenter", moveThumb);
    video.addEventListener("mousemove", moveThumb);
    video.addEventListener("mouseleave", resetThumb);

    return () => {
      video.removeEventListener("mouseenter", moveThumb);
      video.removeEventListener("mousemove", moveThumb);
      video.removeEventListener("mouseleave", resetThumb);
    };
  }, []);

  return (
    <section className="h-screen w-screen overflow-hidden ">
      <div className="relative h-full w-full">
        <video
          ref={videoRef}
          className="h-full w-full border video object-cover transform scale-105 "
          autoPlay
          muted
          loop
          src={video}
        ></video>
        <div
          ref={thumbRef}
          className="h-32 w-32 absolute  top-0 left-0 z-[1] opacity-0 pointer-events-none"
        >
          <div className="h-full w-full bg-white rounded-full flex items-center justify-center text-sm font-bold">
            WATCH REEL
          </div>
          <h3 className="text-white font-bold">BASIC/DEPT ®</h3>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
