import { Link } from "react-router-dom";

import { SIGNUP_URL } from "../constants/url";
import Button from "../component/Button";

/* asstes */
import banner from "../assets/images/banner.webp";
import pc from "../assets/images/pc.webp";

import bg_art_first from "../assets/images/bg_art_first.png";
import bg_art_second from "../assets/images/bg_art_second.png";

export const ActionLayout = () => {
  return (
    <section
      className="relative grid justify-items-center gap-y-5 overflow-hidden bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url(${bg_art_first}),url(${bg_art_second})`,
        backgroundSize: "100px 100px,100px 80px",
        backgroundPosition: "bottom 0px left -5%, bottom 0px right -10% ",
      }}
    >
      <article className="grid justify-items-center gap-y-2 px-4 py-8">
        <h2 className="text-center text-xl font-bold">
          Get a FREE Website in 3 Easy Steps
        </h2>
        <p className="text-gray-700">No Design or Coding Skills Required</p>
        <div className="mt-4 space-y-2">
          <Button size="large" shadow={true} as={Link} to={SIGNUP_URL}>
            create your free Account
          </Button>
          <p className="text-center text-[0.6rem] text-gray-700">
            NO CREDIT CARD REQUIRED
          </p>
        </div>
      </article>
      <article aria-hidden="true">
        <div className="grid aspect-square w-[250px]">
          <img
            src={pc}
            alt=""
            className="col-start-1 col-end-1 row-start-1 row-end-1"
          />
          <img
            src={banner}
            alt=""
            className="col-start-1 col-end-1 row-start-1 row-end-1"
          />
        </div>
      </article>
    </section>
  );
};

// import { FC } from "react";
// import { Link } from "react-router-dom";

// import { SIGNUP_URL } from "../constants/url";
// import Button from "../component/Button";

// /* asstes */
// import banner from "../assets/images/banner.webp";
// import pc from "../assets/images/pc.webp";

// const Action: FC<ActionProps> = props => {
//   return (
//     <section className="grid px-4 md:grid-cols-3 md:px-10 md:py-36">
//       <article
//         className="flex flex-col items-center justify-center gap-y-4 bg-blue-200
//        py-10 md:col-span-2 md:items-start md:px-12"
//       >
//         <h2>Get a FREE Website in 3 Easy Steps</h2>
//         <p>No Design or Coding Skills Required</p>
//         <div className="space-y-4">
//           <Button size="large" shadow={true} as={Link} to={SIGNUP_URL}>
//             create your free Account
//           </Button>
//           <p className="text-center text-[0.6rem] text-gray-700">
//             NO CREDIT CARD REQUIRED
//           </p>
//         </div>
//       </article>
//       <aside
//         aria-hidden="true"
//         className="mx-auto max-w-sm bg-contain bg-no-repeat"
//         style={{
//           backgroundImage: `url(${banner})`,
//         }}
//       >
//         <img src={pc} alt="" className="sticky top-[64px] -z-10" />
//       </aside>
//     </section>
//   );
// };

// export default Action;

// interface ActionProps {}
