import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import theme from "@/src/styles/tailwind.theme";
import S from "./CarouselController.module.css";

interface CarouselControllerProps {
  handleScroll: (pixels: number) => void;
  isShowLeft: boolean;
  isShowRight: boolean;
}

export const CarouselController = ({
  handleScroll,
  isShowLeft,
  isShowRight,
}: CarouselControllerProps): JSX.Element => (
  <>
    {isShowLeft && (
      <div className={S.leftBackground}>
        <button
          aria-label="previous sections"
          tabIndex={0}
          className="p-2 duration-75 hover:text-blue-400 tb:p-4"
          onClick={() => handleScroll(-300)}
        >
          <SlArrowLeft stroke={theme.white} size={24} />
        </button>
      </div>
    )}
    {isShowRight && (
      <div className={S.rightBackground}>
        <button
          aria-label="next sections"
          tabIndex={0}
          className="p-2 duration-75 hover:text-blue-400 tb:p-4"
          onClick={() => handleScroll(300)}
        >
          <SlArrowRight stroke={theme.white} size={24} />
        </button>
      </div>
    )}
  </>
);
