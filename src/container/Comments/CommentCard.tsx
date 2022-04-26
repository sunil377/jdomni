import {FC} from "react";

const CommentCard: FC<CommentCardProps> = ({
  logo,
  desc,
  userProfile,
  username,
  userCompanyStatus,
}) => {
  return (
    <article
      className={`relative grid 
    max-w-sm transform grid-cols-6 place-content-center gap-10 overflow-hidden p-4`}
    >
      <img
        src={logo}
        width={100}
        height={50}
        alt={"campany"}
        className="col-span-6 h-auto max-h-[50px] w-[100px] self-start md:w-[150px]"
      />
      <img
        src="https://image1.jdomni.in/jdomni_email/41_1909301938.png"
        alt="quote"
        className="col-span-1 h-[25px] w-[25px] self-start "
        width={25}
        height={25}
      />
      <div className="col-span-5 space-y-4">
        <div className="text-gray-500  lg:text-lg">{desc}</div>
        <div className="flex items-center gap-2 self-start">
          <img
            src={userProfile}
            className="h-[auto] w-[60px] shrink-0 overflow-hidden rounded-full border border-gray-300 p-0.5"
            width={60}
            height={"auto"}
            alt="avatar"
          />
          <div className="text-left">
            <h4>{username}</h4>
            <p className="font-semibold">{userCompanyStatus}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CommentCard;

interface CommentCardProps {
  desc: string;
  logo: string;
  userProfile: string;
  username: string;
  userCompanyStatus: string;
}
