import { InputSelect, Container, СontainerLower } from "../../shared/ui";
import { CurrentTitle } from "../../widgest";
import { useGetCurrenciesQuery } from "../../shared/redux/api";
import { useAppDispatch } from "../../shared/redux/hooks";
import { addCurrencyState } from "../../shared/redux/slice";
import { TCurrency } from "../../shared/redux/model";

const Home = () => {
  const { data: data, isLoading, isError } = useGetCurrenciesQuery();
  const dispatch = useAppDispatch();

  const onSelected = (value: TCurrency) => {
    dispatch(addCurrencyState(value));
  };

  return (
    <>
      <Container as={"main"}>
        <InputSelect
          isError={isError}
          isLoading={isLoading}
          options={data?.data}
          onSelectedObj={onSelected}
        />
      </Container>
      <СontainerLower>
        <CurrentTitle isError={isError} isLoading={isLoading} />
      </СontainerLower>
    </>
  );
};
export default Home;
