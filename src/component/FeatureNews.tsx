import Button from "./Button";
import FeatureCard from "./FeatureCard";
import featureImg1 from "../assets/feature1.webp";
import featureImg2 from "../assets/feature2.webp";
import featureImg3 from "../assets/feature3.webp";
import featureImg5 from "../assets/feature5.webp";
import featureImg6 from "../assets/feature6.webp";
import featureImg8 from "../assets/feature8.webp";
import featureImg9 from "../assets/feature9.webp";
import featureImg10 from "../assets/feature10.webp";
import featureImg11 from "../assets/feature11.webp";

function FeatureNews() {
  const features = [
    {
      title: "Tomorrow’s shopper: Five ways brands can reach Gen Alpha today",
      img: featureImg1,
      press: "10.11.24",
    },
    {
      title: "Generation Alpha: Say hello to tomorrow’s shopper",
      img: featureImg2,
      press: "7.22.24",
    },
    {
      title:
        "No longer the affordable option, QSRs look to connect with culture",
      img: featureImg3,
      press: "7.17.24",
    },
    {
      title: "Retail’s new playground: where physical meets digital",
      img: featureImg5,
      press: "6.3.24",
    },
    {
      title:
        "Gen Alpha, the beta test for how brands can reach a new generation",
      img: featureImg6,
      press: "5.28.24",
    },
    {
      title: "New Projects on the Podium for the 28th Webby Awards",
      img: featureImg10,
      press: "4.24.24",
    },
    {
      title: "What Sofia Coppola Can Teach Us About Shifting Culture",
      img: featureImg8,
      press: "4.18.24",
    },
    {
      title: "The 28TH Annual Webby Awards Nods Are In",
      img: featureImg9,
      press: "4.4.24",
    },
    {
      title: "Are snacks the new meals in QSR?",
      img: featureImg11,
      press: "3.20.24",
    },
  ];

  return (
    <section className="min-h-screen md:px-16 px-6 py-12 flex flex-col gap-8">
      <div className="w-full flex items-center justify-between">
        <h1 className="uppercase md:text-[2.5vw] text-[4vw] font-bold">
          Featured News
        </h1>
        <Button>VIEW ALL</Button>
      </div>
      <div className="flex flex-col xl:gap-16 lg:gap-14 md:gap-10 gap-8 ">
        {features.map((feature, i) => (
          <FeatureCard key={i + 1} feature={feature} />
        ))}
      </div>
    </section>
  );
}

export default FeatureNews;
