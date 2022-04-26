import {FC} from "react";
import {Link} from "react-router-dom";
import {
  companyLinks,
  navLinksFooter,
  termPolicyLinks,
} from "../../constants/navlinks";
import {useObserver} from "../../hooks/useObserver";
import NavbarFooter from "./NavbarFooter";

import {FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

const links = [
  {title: "company", arr: companyLinks},
  {title: "links", arr: termPolicyLinks},
];

const socialMediaLinks = [
  {to: "/", alt: "instagram", Icon: FaInstagram},
  {to: "/", alt: "twitter", Icon: FaTwitter},
  {to: "/", alt: "youtube", Icon: FaYoutube},
  {to: "/", alt: "linkedin", Icon: FaLinkedin},
];

const Footer: FC<FooterProps> = props => {
  const {ref: refHeader, style: styleHeader} = useObserver();
  const {ref: refSection, style: styleSection} = useObserver();
  return (
    <footer>
      <header
        ref={refHeader}
        className={
          "grid gap-10 bg-gray-50 py-10 px-4 md:grid-cols-3 md:py-20 " +
          styleHeader
        }
      >
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-left text-xl">JD Omni</h3>
          <NavbarFooter links={navLinksFooter} />
        </div>
        <div className="space-y-5">
          <h3 className="text-left">Downloads Apps</h3>
          <div className="inline-flex gap-3">
            <Link to="#google">
              <span className="sr-only">google store</span>

              <img
                src="https://image1.jdomni.in/jdomni_email/Google_Play_1910071737.png"
                alt="google store"
                className="h-auto w-[138px]"
                width={138}
                height={39}
              />
            </Link>
            <Link to="#apple">
              <span className="sr-only">Apple store</span>
              <img
                src="https://image1.jdomni.in/jdomni_email/App_store_1910071740.png"
                alt="apple store"
                className="h-auto w-[138px]"
                width={138}
                height={39}
              />
            </Link>
          </div>
        </div>
      </header>
      <section
        ref={refSection}
        className={
          "flex flex-col justify-between gap-10 bg-gray-100 py-10 px-4 md:flex-row md:gap-0 md:px-12 " +
          styleSection
        }
      >
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          {links.map(arg => (
            <article key={arg.title}>
              <h3>{arg.title}</h3>
              <ul className="mt-4 flex flex-col gap-4">
                {arg.arr.map(arg => (
                  <li key={arg.children}>
                    <Link
                      {...arg}
                      className="justify-start text-sm text-gray-600 md:text-base"
                    />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <aside className="max-w-sm basis-full space-y-8">
          <div className="space-y-4">
            <h3 className="text-left">Follow Us</h3>
            <ul className="flex justify-start gap-5">
              {socialMediaLinks.map(arg => (
                <li key={arg.alt}>
                  <Link
                    to={arg.to}
                    className="h-[2rem] min-w-[2rem] overflow-hidden rounded-full bg-gray-500 p-1 hover:bg-blue-500"
                  >
                    <span className="sr-only">{arg.alt}</span>
                    <arg.Icon size="1.4rem" className="fill-white" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-left">Product Of</h3>
            <img
              src="https://image1.jdomni.in/jdomni_email/Jd_logo_1910071809.png"
              alt="just dial"
              className="h-auto w-[120px]"
              width={120}
              height={"auto"}
            />
          </div>
        </aside>
      </section>
      <p className="bg-gray-100 py-4 px-2 text-center text-sm text-gray-600">
        &copy; Copyright 2020 Justdial Ltd. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

interface FooterProps {}
