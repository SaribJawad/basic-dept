import { motion } from "motion/react";

interface WorkCardProps {
  workCard: {
    image?: string;
    video?: string;
    title: string;
    description: string;
  };
}

function WorkCard({ workCard }: WorkCardProps) {
  return (
    <motion.div
      initial={"initial"}
      whileHover={"hovered"}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col gap-3 items-start justify-center cursor-pointer"
    >
      <div className="flex-1 overflow-hidden">
        {workCard.image ? (
          <motion.img
            variants={{
              initial: { scale: 1.05 },
              hovered: { scale: 1 },
            }}
            className="w-full h-full object-cover"
            src={workCard.image}
            alt=""
          />
        ) : (
          <motion.video
            variants={{
              initial: { scale: 1.05 },
              hovered: { scale: 1 },
            }}
            className="w-full h-full object-cover"
            src={workCard.video}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </div>
      <div className="flex flex-col gap-2 xl:w-1/2 md:w-[80%] w-full h-[100px]">
        <div className="w-fit">
          <h1 className="uppercase md:text-xl sm:text-md text-sm font-bold -mb-1">
            {workCard.title}
          </h1>
          <motion.div
            variants={{
              initial: {
                scaleX: 0,
              },
              hovered: {
                scaleX: 1,
              },
            }}
            className="bg-black h-[2px] w-full"
          ></motion.div>
        </div>
        <h3 className="uppercase lg:text-sm text-xs">{workCard.description}</h3>
      </div>
    </motion.div>
  );
}

export default WorkCard;
