// import "./App.css";
import { Title } from "./title/title";
import { Menu } from "./menu/menu";
import { Tabs } from "./tabs/Tabs";
import styled from "styled-components";
import { BigCard } from "./cards/big-card/big-card";
import { AverageCard } from "./cards/average-card/average-card";
import { SmallCard } from "./cards/small-card/small-card";
import astronaut from "./cards/card-img/astronautAverage.jpg";
import averageAstronaut from "./cards/card-img/astronaut_.jpg";
import smallAstronaut from "./cards/card-img/astronautSmall.jpg";
import { CardPost } from "./cards/cards-post/card-post";

const BigCardItem = [
  {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!",
  },
  { date: "April 20, 2021" },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
  },
];

function App() {
  return (
    <AppStyle className="App">
      <Title>Sign in</Title>
      <Menu />
      <Tabs />
      {/* 3 карточки поста start */}
      <BigCard
        image={<img src={astronaut} alt="astronaut"></img>}
        text={<div>{BigCardItem.map(({ text }) => text)}</div>}
        date={<div>{BigCardItem.map(({ date }) => date)}</div>}
        title={<div>{BigCardItem.map(({ title }) => title)}</div>}
      ></BigCard>
      <AverageCard
        image={<img src={averageAstronaut} alt="astronaut"></img>}
        text={<div>{BigCardItem.map(({ text }) => text)}</div>}
        date={<div>{BigCardItem.map(({ date }) => date)}</div>}
        title={<div>{BigCardItem.map(({ title }) => title)}</div>}
      ></AverageCard>
      <SmallCard
        image={<img src={smallAstronaut} alt="astronaut"></img>}
        text={<div>{BigCardItem.map(({ text }) => text)}</div>}
        date={<div>{BigCardItem.map(({ date }) => date)}</div>}
        title={<div>{BigCardItem.map(({ title }) => title)}</div>}
      ></SmallCard>
      {/* 3 карточки поста end */}

      {/* Список постов start */}
      <CardPost></CardPost>
      {/* Список постов end */}
    </AppStyle>
  );
}

const AppStyle = styled.div`
  width: 1200px;
  margin: auto;
`;

export default App;
