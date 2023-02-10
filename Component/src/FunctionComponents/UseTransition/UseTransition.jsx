import { useState, useTransition, useId } from "react";
import { Container, Text } from "./StyledComp";

const UseTransition = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();

  const onSearch = (e) => {
    setSearch(e.target.value);
    console.log({ id1, id2, id3, id4 });
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < 100; i++) {
        newList.push(e.target.value);
      }

      setList(newList);
    });
  };

  return (
    <>
      <div>
        <input
          type={"text"}
          value={search}
          placeholder="Search here!"
          onChange={onSearch}
        />
      </div>
      <Container primary>
        <h1>My Search</h1>
        <ul>
          {isPending
            ? "Loading"
            : list.map((item, index) => {
                return <Text key={index}>{item}</Text>;
              })}
        </ul>
      </Container>
    </>
  );
};

export default UseTransition;
