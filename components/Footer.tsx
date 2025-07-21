import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollToTop from "./ScrollToTop";

type SocialMediaProps = {
  label: string;
  src: string;
};

const socialMediaIcons: SocialMediaProps[] = [
  { label: "youtube", src: "/footerImage/youtube.png" },
  { label: "instagram", src: "/footerImage/instagram.png" },
  { label: "tiktok", src: "/footerImage/tiktok.png" },
  { label: "facebook", src: "/footerImage/facebook.png" },
  { label: "twitter", src: "/footerImage/twitter.png" },
  { label: "material-symbol", src: "/footerImage/material-symbol.png" },
];

const Footer: React.FC = () => {
  return (
    <div className="w-full relative max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      {/* header upper part */}
      <div className="w-full space-y-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex-1">
            <h1 className="font-bold text-3xl ">Join Nepal Motors</h1>
            <p className="text-sm">
              Recieve pricing updates, shopping tips & more!
            </p>
          </div>
          {/* scroll up button */}
          <ScrollToTop />
        </div>
        <div>
          <label htmlFor="email" className="text-md pb-2 block">
            Email Address
          </label>
          <div className=" w-full rounded-md border border-black md:w-[40%]  overflow-hidden  flex items-center">
            <input
              id="email"
              type="text"
              className="border-none py-2 px-2 flex-1 focus:outline-none "
            />
            <button className="bg-gradient-to-r from-[#004D40] via-[#008080] to-[#00BCD4] px-3 py-3 text-white text-sm cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="h-[1px] my-5 bg-gray-700"></div>
      {/* header lower part */}
      <div className="w-full">
        <div className="flex flex-col gap-3 md:flex-row items-center md:justify-between justify-center ">
          {/* follow us part */}
          <div className="flex flex-col gap-3">
            <h1 className="font-extralight text-sm">Follow us</h1>
            <div className="flex items-baseline justify-center gap-7 ">
              {socialMediaIcons.map((socialIcon) => (
                <Image
                  key={socialIcon.label}
                  height={24}
                  width={24}
                  src={socialIcon.src}
                  alt={socialIcon.label}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col item-center justify-start gap-2">
            <h1 className="font-extralight text-sm">
              Download the Nepal Motor App
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={"/#"} aria-label="Download on the App Store">
                <Image
                  src={"/footerImage/apple.png"}
                  width={160}
                  height={54}
                  alt={"Download on the App Store"}
                  className="h-12 w-auto"
                />
              </Link>

              <Link href={"/#"} aria-label="Get it on Google Play">
                <Image
                  src={"/footerImage/google.png"}
                  width={180}
                  height={54}
                  alt={"Get it on Google Play"}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex items-start gap-10 lg:gap-8 justify-center text-sm pt-5">
          <div className="flex flex-col w-1/2 lg:w-[40%] gap-2 lg:flex-row justify-start items-center text-center xl:justify-between  lg:items-start lg:justify-between">
            <Link href={"/contact"} className="hover:text-[#1B72EB]">
              Contact Us
            </Link>
            <Link href={"/contact"} className="hover:text-[#1B72EB]">
              Careers
            </Link>
            <Link href={"/contact"} className="hover:text-[#1B72EB]">
              Your Ad Choices
            </Link>
            <Link href={"/contact"} className="hover:text-[#1B72EB]">
              Privacy Statement
            </Link>
          </div>
          <div className="flex lg:whitespace-nowrap flex-col w-1/2 lg:w-[60%] gap-2 lg:flex-row justify-start items-start text-left  xl:justify-between lg:items-start lg:justify-between">
            <Link href={"/contact"} className="hover:text-[#1B72EB]">
              Visitor Agreement
            </Link>
            <Link href={"/contact"} className="hover:text-[#1B72EB]">
              Accessibility
            </Link>
            <Link href={"/contact"} className="hover:text-[#1B72EB]">
              Do Not Sell or Share My Personal Information
            </Link>
            <Link href={"/contact"} className="hover:text-[#1B72EB]">
              Motor Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
