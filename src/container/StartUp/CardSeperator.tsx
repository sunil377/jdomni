import {FC} from "react";
import {IoIosArrowForward} from "react-icons/io";

const CardSeperator: FC<CardSeperatorProps> = props => {
  return (
    <span className="self-center hidden md:inline-flex -space-x-4 ">
      <span>
        <IoIosArrowForward size="1.8rem" className="text-blue-200" />
      </span>
      <span>
        <IoIosArrowForward size="1.8rem" className="text-blue-400" />
      </span>
      <span>
        <IoIosArrowForward size="1.8rem" className="text-blue-600" />
      </span>
    </span>
  );
};

export default CardSeperator;

interface CardSeperatorProps {}
