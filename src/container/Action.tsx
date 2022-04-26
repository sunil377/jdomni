import {FC} from "react";

import banner from "../assets/images/banner.webp";
import Button from "../component/Button";

const Action: FC<ActionProps> = props => {
  return (
    <section className="grid px-4 md:grid-cols-3 md:px-10">
      <article
        className="flex flex-col items-center justify-center gap-y-4 
      py-10 md:col-span-2 md:items-start md:py-36 md:px-12"
      >
        <h2>Get a FREE Website in 3 Easy Steps</h2>
        <p>No Design or Coding Skills Required</p>
        <div className="space-y-4">
          <Button size="large" shadow={true}>
            create your free Account
          </Button>
          <p className="text-center text-[0.6rem] text-gray-700">
            NO CREDIT CARD REQUIRED
          </p>
        </div>
      </article>
      <aside
        aria-hidden="true"
        className="mx-auto max-w-sm bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <img
          src={"https://image1.jdomni.in/jdomni_email/web001_2011102155.png"}
          alt=""
          className="sticky top-[64px] -z-10"
        />
      </aside>
    </section>
  );
};

export default Action;

interface ActionProps {}
