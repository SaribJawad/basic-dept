import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface NavbarProps {
  visible: boolean;
  transparent: boolean;
}

function Navbar({ transparent, visible }: NavbarProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const navLinks = ["WORK", "ABOUT", "NEWS", "THINKING", "CAREERS", "CONTACTS"];
  const headerRef = useRef<HTMLElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useGSAP(() => {
    if (isMobileNavOpen) {
      gsap.to(svgRef.current, {
        attr: { fill: "#F9CDCD" },
        duration: 0.5,
        ease: "power1.inOut",
      });
    } else {
      if (!visible) {
        gsap.to(headerRef.current, {
          y: "-100%",
          duration: 0.5,
          ease: "power1.inOut",
          opacity: 0,
          backgroundColor: "transparent",
          color: "white",
        });
        gsap.to(svgRef.current, {
          attr: { fill: "white" },
          duration: 0.5,
          ease: "power1.inOut",
        });
      } else if (visible && transparent) {
        gsap.to(headerRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power1.inOut",
          opacity: 1,
          backgroundColor: "transparent",
          color: "white",
        });
        gsap.to(svgRef.current, {
          attr: { fill: "white" },
          duration: 0.5,
          ease: "power1.inOut",
        });
      } else if (visible && !transparent) {
        gsap.to(headerRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power1.inOut",
          opacity: 1,
          backgroundColor: "#f4f4f4",
          color: "black",
        });
        gsap.to(svgRef.current, {
          attr: { fill: "black" },
          duration: 0.5,
          ease: "power1.inOut",
        });
      }
    }
  }, [transparent, visible, isMobileNavOpen]);

  return (
    <header
      ref={headerRef}
      className="text-white w-full  md:px-16 px-6 md:py-12 py-6  fixed -top-1 z-[4] "
    >
      <nav className="flex xl:items-center items-start justify-between w-full relative">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 208.3 27.7"
          className="lg:w-40 w-28  duration-100 z-10"
        >
          <path d="M0 24.1h11.7c5.5 0 8.7-2.3 8.7-6.8 0-2.8-1.7-4.5-4.1-5.3 2-.9 3.4-2.6 3.4-5.3 0-3.5-2.2-5.9-7.5-5.9H0zM13.1 7.9c0 1.6-1 2.4-3.2 2.4H6.4V5.5h3.5c2.2 0 3.2.8 3.2 2.4m.7 9c0 1.7-1 2.4-3.3 2.4H6.4v-4.9h4.2c2.2 0 3.2.8 3.2 2.5M38.2 24.1h6.7L36.8.7h-8.4l-8.1 23.4h6.5l1.2-3.8h9.1zM32.5 5.9l2.9 9.5h-5.9zM55.1 24.5c6.3 0 10.3-3 10.3-7.7 0-3.8-2.5-5.8-6.5-6.6l-5.1-1c-2-.4-2.6-1-2.6-2.1S52.4 5 54.5 5c2.4 0 4.1 1 4.2 3.1H65C65 2.5 60.3.3 54.5.3c-5.6 0-9.7 2.8-9.7 7.3 0 3.8 2.5 5.8 6.5 6.6l5.1 1c2 .4 2.6 1 2.6 2.1 0 1.5-1.4 2.3-3.7 2.3-2.6 0-4.5-1.3-4.6-3.8h-6.3c.2 5.5 3.7 8.7 10.7 8.7M67.3 24.1h6.4V.7h-6.4zM82 12.4c0-3.9 2.1-6.8 5.6-6.8 2.9 0 4.7 1.7 5.1 3.7h6.7C98.8 3.2 93.6.2 87.7.2 80 .2 75.4 5 75.4 12.3s4.5 12.1 12.3 12.1c6 0 11.2-2.9 11.8-9.1h-6.7c-.4 2.1-2.1 3.7-5.1 3.7-3.6.2-5.7-2.7-5.7-6.6M113.7 0h-5.2l-10 27.7h5.2zM137.8 12.4c0-6.6-3.6-11.7-12.8-11.7h-9.8v23.4h9.8c9.2 0 12.8-5.1 12.8-11.7m-6.6 0c0 4.6-2.6 6.3-6.2 6.3h-3.3V6.1h3.3c3.6 0 6.2 1.7 6.2 6.3M139.5 24.1H158v-5.3h-12.2v-4h10.7V9.7h-10.7V6.1h11.9V.7h-18.2zM180 8.9c0-5.9-3.8-8.1-9.6-8.1h-10.1v23.4h6.4V17h3.8c5.7 0 9.5-2.2 9.5-8.1m-6.6 0c0 2.3-1.1 3.2-3.7 3.2h-3.1V5.6h3.1c2.6 0 3.7 1 3.7 3.3M181 6.2h7.4v17.9h6.4V6.2h7.4V.7H181zM203.5 23.7c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8c0 2.6-2.2 4.8-4.8 4.8m0-8.8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4"></path>
          <path d="M204 17.2h-1.4v1.6h1.4c.5 0 .7-.3.7-.8s-.3-.8-.7-.8m-.1-.8c1.2 0 1.8.5 1.8 1.6 0 .6-.3 1.1-.9 1.3l1.2 1.8h-1.2l-1.1-1.6h-1.2v1.6h-1.1v-4.7z"></path>
        </svg>

        {/* desktop nav */}
        <ul className="hidden xl:flex gap-14 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={"initial"}
              whileHover={"hovered"}
              exit={"exit"}
            >
              <li className="cursor-pointer text-xs" key={index}>
                {link}
              </li>
              <motion.div
                variants={{
                  initial: {
                    opacity: 0,
                    scaleX: 0,
                  },
                  hovered: {
                    opacity: 1,
                    scaleX: 1,
                  },
                }}
                className={`${
                  visible && transparent ? "bg-white" : "bg-black"
                } h-[1px] w-full`}
              ></motion.div>
            </motion.div>
          ))}
        </ul>
        <motion.button
          className="hidden xl:block"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
        >
          <BsThreeDots size={25} />
        </motion.button>

        <motion.button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="block xl:hidden z-10"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
        >
          {isMobileNavOpen ? (
            <IoIosCloseCircleOutline size={30} color="#F9CDCD" />
          ) : (
            "MENU"
          )}
        </motion.button>

        {/* mobile nav */}
        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.div
              className="h-[101vh] w-full bg-[#252422] text-[#F9CDCD]  md:px-16 flex flex-col items-start justify-start px-6 md:py-12 py-6 fixed top-0 left-0 bottom-0 z-[5]"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 2 }}
              exit={{ opacity: 0, y: 0 }}
            >
              <ul className="flex flex-col gap-4 mt-20 h-full  ">
                {navLinks.map((link) => (
                  <motion.li
                    className="text-xl font-bold cursor-pointer"
                    key={link}
                    initial={{ y: 5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 5, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
              <footer className="flex items-center justify-between w-full text-xs text-zinc-600">
                <h5>BASIC/DEPT®,INC</h5>
                <h5>10-25©</h5>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
