import { GoDotFill } from "react-icons/go";

function Footer() {
  return (
    <footer className="bg-[#2A2927] w-full text-[#F4F4F4] h-[80vh] ">
      <div className=" flex  flex-col h-full">
        <section className="md:px-16  px-6 py-12 flex flex-col gap-4 flex-1">
          {/* right section footer */}
          <div className="col-span-1  h-fit">
            <div className="h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 307 100"
                className="w-20 "
                fill="white"
              >
                <path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7m2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1M128.3 0h-18.9L73.6 100h18.5zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2m-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6M224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1m7.9 0c0-18.9 14.7-34 33.2-34s33.2 15.1 33.2 34-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34M246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1"></path>
              </svg>
            </div>
          </div>
          {/* left section footer */}
          <div className="col-span-1   flex flex-col gap-10">
            <h1 className="md:text-[1.5vw] sm:text-base text-sm font-medium ">
              We collaborate with ambitious brands and people. Let's build.{" "}
              <span className="underline">biz@basicagency.com</span>
            </h1>
            <div className="flex flex-1 md:flex-row flex-col gap-5 items-start justify-between w-full h-full">
              <div className="flex flex-col gap-3">
                <h2 className="flex items-center gap-1 uppercase md:text-lg text-xs font-semibold">
                  <GoDotFill />
                  SOCIAL
                </h2>
                <ul>
                  <li className="font-medium hover:underline cursor-pointer ">
                    Instagram
                  </li>
                  <li className="font-medium hover:underline cursor-pointer">
                    Twitter
                  </li>
                  <li className="font-medium hover:underline cursor-pointer">
                    Linkedin
                  </li>
                  <li className="font-medium hover:underline cursor-pointer">
                    Facebook
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="flex items-center gap-1 uppercase md:text-lg text:xs  font-semibold">
                  <GoDotFill />
                  Initiatives
                </h2>
                <ul>
                  <li className="font-medium hover:underline cursor-pointer">
                    Applied
                  </li>
                  <li className="font-medium hover:underline cursor-pointer">
                    Brandbeats
                  </li>
                  <li className="font-medium hover:underline cursor-pointer">
                    Moves
                  </li>
                  <li className="font-medium hover:underline cursor-pointer">
                    B®/Good
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-">
                <h2 className="flex items-center gap-1 uppercase md:text-lg text:xs  font-semibold">
                  <GoDotFill />
                  Offices
                </h2>
                <ul>
                  <li className="font-medium hover:underline cursor-pointer">
                    San Diego – CA
                  </li>
                  <li className="font-medium hover:underline cursor-pointer">
                    New York – NY
                  </li>
                  <li className="font-medium hover:underline cursor-pointer">
                    Bay Area – CA
                  </li>
                  <li className="font-medium hover:underline cursor-pointer">
                    Berlin – GE
                  </li>
                  <li className="font-medium hover:underline cursor-pointer">
                    Argentina – AR
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="md:px-16  px-6 md:py-0 py-3  md:h-14 h-20 bg-[#222120] text-xs flex md:flex-row flex-col md:gap-3 items-center uppercase justify-between text-[#4b4a48] font-semibold">
          <h5>BASIC/DEPT®, Inc 10 - 25©</h5>
          <h5>Easy to understand, impossible to ignore.™</h5>
          <h5>Terms, Privacy Policy</h5>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
