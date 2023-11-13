import { FC } from "react";
import {
  WrappLogo,
  HeadText,
  WrappLogoSubtitle,
  HeadTextSubtitle,
} from "./style";

interface ILogo {
  title: string;
  subTitle: string;
}

export const Logo: FC<ILogo> = ({ title, subTitle }) => {
  return (
    <WrappLogo>
      <HeadText>{title}</HeadText>
      <WrappLogoSubtitle>
        <HeadTextSubtitle>{subTitle}</HeadTextSubtitle>
      </WrappLogoSubtitle>
    </WrappLogo>
  );
};
