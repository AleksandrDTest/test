import { useState, FC, useEffect } from "react";
import vector from "../../assets/icon/Vector.svg";
import { TCurrency } from "../../redux/model";
import {
  Input,
  InputWrapper,
  InputIconButton,
  InputListWrapper,
  InputListItem,
} from "./style";

export interface InputSelectProps {
  options?: TCurrency[];
  onSelectedObj?: (value: TCurrency) => void;
  isLoading?: boolean;
  isError?: boolean;
}

export const InputSelect: FC<InputSelectProps> = ({
  options,
  onSelectedObj,
  isLoading,
  isError,
}) => {
  const initialValue: string | undefined = options ? options[0].id : "";
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    initialValue
  );

  useEffect(() => {
    if (onSelectedObj && options) {
      onSelectedObj(options[0]);
    }
    setSelectedValue(initialValue);
  }, [initialValue, isError, isLoading, onSelectedObj, options]);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: string, selectObj: TCurrency) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onSelectedObj) {
      onSelectedObj(selectObj);
    }
  };

  return (
    <InputWrapper>
      <Input readOnly type="text" value={selectedValue} />
      <InputIconButton scale={String(isOpen)} onClick={handleToggleOpen}>
        <img src={vector} />
      </InputIconButton>
      <InputListWrapper $isopened={isOpen}>
        {isLoading && <InputListItem as={"li"}>Загрузка...</InputListItem>}
        {isError && <InputListItem as={"li"}>Ошибка...</InputListItem>}
        {options?.map((option) => (
          <InputListItem
            as={"li"}
            key={option.id}
            $active={option.id === selectedValue}
            onMouseDown={() => handleOptionClick(option.id, option)}
          >
            {option.id}
          </InputListItem>
        ))}
      </InputListWrapper>
    </InputWrapper>
  );
};
