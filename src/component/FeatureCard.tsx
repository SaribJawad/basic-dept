import { motion } from "motion/react";
import { IoArrowForward } from "react-icons/io5";

interface FeatureCardProps {
  feature: {
    img: string;
    title: string;
    press: string;
  };
}

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <motion.div
      initial={"initial"}
      whileHover={"hovered"}
      exit={"exit"}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="border-t border-black grid sm:grid-cols-4  cursor-pointer gap-3"
    >
      <div className="sm:col-span-1 mt-4 overflow-hidden">
        <motion.img
          variants={{
            initial: { scale: 1.2 },
            hovered: { scale: 1.1 },
            exit: { scale: 1.2 },
          }}
          src={feature.img}
          alt=""
          className="h-full w-full object-cover  "
        />
      </div>
      <div className="mt-4 sm:col-span-3 flex flex-col w-full justify-between gap-4 h-full sm:h-auto">
        <div className="flex w-full items-start justify-between ">
          <motion.h1
            className="sm:text-[2vw] text-xs w-[70%] uppercase font-semibold leading-[1.3em] "
            variants={{
              initial: { textDecoration: "none" },
              hovered: { textDecoration: "underline" },
            }}
          >
            {feature.title}
          </motion.h1>
          <button className=" h-fit flex overflow-hidden items-center  justify-center relative ">
            <motion.div
              variants={{
                initial: { x: 0 },
                hovered: { x: "100%" },
              }}
            >
              <IoArrowForward size={30} />
            </motion.div>
            <motion.div
              className="absolute"
              variants={{
                initial: { x: "-100%" },
                hovered: { x: 0 },
              }}
            >
              <IoArrowForward size={30} />
            </motion.div>
          </button>
        </div>
        <p className="text-xs uppercase">
          <span className="font-bold">PRESS</span> {feature.press}
        </p>
      </div>
    </motion.div>
  );
}

export default FeatureCard;
