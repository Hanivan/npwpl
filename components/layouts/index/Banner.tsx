import { TypeAnimation } from "react-type-animation";
import Navbar from "@/components/statefull/Navbar";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-top-tokyo bg-cover bg-no-repeat bg-fixed h-screen text-bg-dark dark:text-bg-light pt-10 bg-slate-600 transition">
      <div className="container">
        <Navbar />
        <div className="h-screen grid justify-items-center md:justify-items-start content-center justify-center md:justify-start">
          <div className="text-center md:flex">
            <h1 className="mr-2 text-3xl font-bold">Hanivan Rizky Sobari</h1>
            <p className="text-xl font-medium self-center">アニップ</p>
          </div>
          <div className="flex justify-center md:justify-start text-xl text-secondary">
            <h4 className="mr-2">&#47;&#47;</h4>
            <h4>
              <TypeAnimation
                sequence={[
                  "Coder",
                  1000,
                  "Linux Ethusiast",
                  1000,
                  "Half Weeb",
                  1000,
                ]}
                cursor={true}
                repeat={Infinity}
              />
            </h4>
          </div>
          <Link
            href={`projects`}
            className="border border-1 border-secondary hover:bg-secondary hover:shadow py-2 px-4 rounded-full transition text-secondary hover:text-bg-light mt-4 block font-medium mx-auto md:mx-0 text-center md:inline-block w-3/4 md:w-auto"
          >
            See My Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
