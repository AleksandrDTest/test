import { FC } from "react";
import { Title } from "../../shared/ui";
import { useAppSelector } from "../../shared/redux/hooks";
import { ITitle } from "../../shared/ui";

export interface ICurrentTitle extends ITitle {
  isLoading?: boolean;
  isError?: boolean;
}
export const CurrentTitle: FC<ICurrentTitle> = ({ isLoading, isError }) => {
  const title = useAppSelector((state) => state.formCurrentCurensy.name);
  return (
    <>
      {isLoading && <Title>{"Загрузка..."}</Title>}
      {isError && <Title>{"Ошибка..."}</Title>}
      {!isError && !isLoading && <Title>{title}</Title>}
    </>
  );
};
