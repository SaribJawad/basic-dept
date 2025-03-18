import Button from "./Button";
import video from "../assets/video-2.mp4";

function HeroSection() {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row md:px-16 px-6 py-12 items-center justify-between gap-8">
      {/* Left Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10 items-start justify-center order-2 lg:order-1 mt-6 lg:mt-0">
        <div className="flex flex-col gap-3 md:gap-5">
          <h1 className="text-[8vw] md:text-[7vw] lg:text-[6vw] font-semibold leading-[0.9em] uppercase">
            BASIC/DEPT® helps brands ● connect w/ culture
          </h1>
          <h3 className="uppercase text-xs sm:text-sm lg:text-lg">
            Adweek <span className="font-bold">Agency Spotlight</span>
          </h3>
        </div>
        <div className="w-full sm:w-auto">
          <Button>ABOUT US</Button>
        </div>
      </div>

      {/* Right Video Side */}
      <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[70vh] order-1 lg:order-2">
        <video
          className="h-full w-full object-cover rounded-sm"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </section>
  );
}

export default HeroSection;
