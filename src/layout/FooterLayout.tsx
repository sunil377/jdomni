import { FC } from "react";
import { Link } from "react-router-dom";
import {
  companyLinks,
  navLinksFooter,
  termPolicyLinks,
} from "../constants/navlinks";
import { socialMediaLinks } from "../constants/socialMediaLinks";
import { useObserver } from "../hooks/useObserver";

import just_dial_logo from "../assets/images/just_dial.webp";
import { AppStore } from "../component/AppStore";

const links = [
  { title: "company", arr: companyLinks },
  { title: "links", arr: termPolicyLinks },
];

export const FooterLayout = () => {
  const { ref: refHeader, style: styleHeader } = useObserver();
  const { ref: refSection, style: styleSection } = useObserver();

  return (
    <footer>
      <div className={"space-y-4 px-4 py-12 " + styleHeader} ref={refHeader}>
        <FooterHeading title="JD omni" />
        <ul className="space-y-5">
          {navLinksFooter.map(arg => (
            <li key={arg.children}>
              <Link {...arg} className="text-sm text-gray-600" />
            </li>
          ))}
        </ul>
      </div>

      <section
        ref={refSection}
        className={"space-y-14 bg-gray-100/80 py-10 px-4" + styleSection}
      >
        <div className="space-y-8 ">
          {links.map(arg => (
            <article key={arg.title} className="space-y-2">
              <FooterHeading title={arg.title} />
              <ul className="space-y-5">
                {arg.arr.map(arg => (
                  <li key={arg.children}>
                    <Link {...arg} className="text-sm text-gray-600" />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="max-w-sm basis-full space-y-8">
          <div className="space-y-4">
            <FooterHeading title="Follow Us" />
            <ul className="inline-flex gap-5">
              {socialMediaLinks.map(arg => (
                <li key={arg.alt}>
                  <Link
                    to={arg.to}
                    className="aspect-square w-[2rem] overflow-hidden rounded-full bg-gray-500 p-1 hover:bg-blue-500"
                  >
                    <span className="sr-only">{arg.alt}</span>
                    <arg.Icon size="1.4rem" className="fill-white" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <AppStore />
          <div className="space-y-4">
            <FooterHeading title="Product Of" />
            <img
              src={just_dial_logo}
              alt="just dial"
              className="aspect-auto h-auto w-[100px]"
              width={100}
              height={"auto"}
            />
          </div>
        </aside>
      </section>
      <p className="bg-gray-200 py-4 px-4 text-center text-xs text-gray-600">
        &copy; Copyright 2020 Justdial Ltd. All Rights Reserved.
      </p>
    </footer>
  );
};

const FooterHeading: FC<{ title: string }> = ({ title }) => {
  return <h1 className="text-xl font-semibold text-gray-700">{title}</h1>;
};
