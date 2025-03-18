import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "./Button";
import workImage1 from "../assets/img.webp";
import workImage2 from "../assets/img2.webp";
import workVideo from "../assets/workvideo.mp4";
import BottomBorder from "./BottomBorder";
import WorkCard from "./WorkCard";

gsap.registerPlugin(ScrollTrigger);

function WorkSection() {
  const workCards = [
    {
      title: "Patagonia",
      description:
        "An eCommerce experience driven by Patagonia’s brand mission",
      image: workImage1,
    },
    {
      title: "Wilson",
      description: "A century-old sports brand finding its place in culture",
      image: workImage2,
    },
    {
      title: "Patagonia",
      description:
        "An eCommerce experience driven by Patagonia’s brand mission",
      video: workVideo,
    },
  ];

  return (
    <section className="lg:min-h-[120vh] md:min-h-[100vh] min-h-[80vh] bg-[#F2F2F2] md:px-16 px-6 py-12  w-full flex flex-col gap-10 relative items-center">
      <section className="flex lg:flex-row flex-col lg:gap-10 gap-5 justify-between  w-full">
        <div className="w-[60%] flex flex-col md:gap-10 gap-5 items-start ">
          <h3 className="text-[3vw] md:text-[2.5vw] lg:text-[2vw] leading-[1.3em] tracking-tighter font-medium">
            BASIC/DEPT® is a global branding and digital design agency building
            products, services, and eCommerce experiences that turn cultural
            values into company value.
          </h3>

          <Button>SEE THE WORK</Button>
        </div>
        <div className="w-[40%] lg:self-start self-end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 100">
            <path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7m2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1M128.3 0h-18.9L73.6 100h18.5zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2m-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6M224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1m7.9 0c0-18.9 14.7-34 33.2-34s33.2 15.1 33.2 34-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34M246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1"></path>
          </svg>
        </div>
      </section>
      <section className=" flex-1 grid grid-cols-3 gap-5">
        {workCards.map((workCard, index) => (
          <WorkCard key={index} workCard={workCard} />
        ))}
      </section>
      <BottomBorder />
    </section>
  );
}

export default WorkSection;
