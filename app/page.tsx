
import MaxWidthWrapper from "@/components/MaxwidthWrapper";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import nextjslogo from "../_localdata/nextjslogo.png";
import expresslogo from "../_localdata/expresslogo.png";
import tailwindcsslogo from "../_localdata/tailwindlogo.jpg";
import mongologo from "../_localdata/mongologo.jpg";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="text-4xl flex flex-col align-middle justify-center mt-28">
        Beyond the Screen: Navigating the Coding Cosmos
      </div>

      <Link href={"/explore"}>
        <Button
          variant="outline"
          className=" bg-indigo-500 text-white mt-4 p-4"
        >
          Explore <FaLongArrowAltRight />
        </Button>
      </Link>

      <div className=" text-2xl mt-12 text-blue-400 shadow-sm">Trending </div>

      {/* cards */}
      <div className="lg:flex lg:flex-row m-12 lg:flex-wrap">
        {/* card 1 */}
        <div className=" items-center align-middle">
          <div className="card card-compact w-[300px] bg-base-100 shadow-xl mr-8">
            <figure>
              {" "}
              <Image
                src={nextjslogo}
                width={200}
                height={200}
                alt="Picture of the author"
                quality={100}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Next js</h2>
              <p>
                {" "}
                The React Framework for Production - Seamless SSR, Zero
                Configuration, and Ultimate Developer Experience
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-info">
                  <Link href="https://nextjs.org/docs">Visit docs</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}

        <div className=" items-center align-middle">
          <div className="card card-compact w-[300px] bg-base-100 shadow-xl mr-8">
            <figure>
              {" "}
              <Image
                src={expresslogo}
                width={200}
                height={250}
                alt="Picture of the author"
                quality={100}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">express</h2>
              <p>
                minimal and flexible Node.js web application framework that
                provides a robust set of features for building web and mobile
                applications
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-info">
                  <Link href="https://expressjs.com/en/starter/installing.html">
                    Visit docs
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className=" items-center align-middle">
          <div className="card card-compact w-[300px] bg-base-100 shadow-xl mr-8">
            <figure>
              {" "}
              <Image
                src={tailwindcsslogo}
                width={200}
                height={200}
                alt="Picture of the author"
                quality={100}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">tailwindcss</h2>
              <p>
                {" "}
                Rapidly build modern, responsive user interfaces with a
                utility-first framework that's highly customizable and scales
                seamlessly from prototypes to production
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-info">
                  <Link href="https://tailwindcss.com/docs/installation">
                    Visit docs
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className=" items-center align-middle">
          <div className="card card-compact w-[300px] bg-base-100 shadow-xl mr-8">
            <figure>
              {" "}
              <Image
                src={mongologo}
                width={300}
                height={200}
                alt="Picture of the author"
                quality={100}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">MongoDB</h2>
              <p>
                {" "}
                Unleashing the Power of NoSQL for Flexible, Scalable, and Agile
                Data Management
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-info">
                  <Link href="https://www.mongodb.com/docs/">Visit docs</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
