import React, { useState } from "react";
import styled from "styled-components";

export const Tabs: React.FC = () => {
  const [activeId, setActiveId] = useState("1");

  return (
    <TabsWrapper>
      {["1", "2", "3"].map((id) => (
        <TabsItem
          key={id}
          active={activeId === id}
          setActive={() => setActiveId(id)}
        ></TabsItem>
      ))}
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  border-bottom: 1px solid;
  border-color: #8080803c;
`;

const TabsItem: React.FC<{
  active: boolean;
  setActive: () => void;
}> = ({ active, setActive }) => {
  return (
    <TabsBtn
      type="button"
      onClick={() => setActive()}
      style={{
        borderBottom: active ? "2px solid grey" : "2px solid transparent",
      }}
    >
      All
    </TabsBtn>
  );
};

const TabsBtn = styled.button`
  all: unset;
  cursor: pointer;
  width: 100px;
  height: 50px;
  text-align: center;
  margin: 50px 25px 0 0;
  color: grey;
  font-weight: 600;

  &:hover {
    color: blue;
  }
`;

// type Props = {
//   variant: "primary" | "active" | "disabled";
//   children: string;
//   disabled?: string;
//   onClick: () => void;
// };

// export const Tabs: React.FC<Props> = ({
//   variant,
//   children,
//   disabled,
//   onClick,
// }) => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <TabsBtn
//       type="button"
//       $variant={isActive ? "active" : "primary"}
//       onClick={() => setIsActive(!isActive)}
//     >
//       {children}
//     </TabsBtn>
//   );
// };

// const css = String.raw;

// const TabsBtn = styled.button<{ $variant: "primary" | "active" | "disabled" }>`
//   all: unset;
//   cursor: pointer;
//   width: 120px;
//   height: 50px;
//   background-color: lightgray;
//   border-radius: 5px;
//   margin: 25px 10px 0 0;
//   text-align: center;
//   font-size: 18px;

//   ${({ $variant }) => {
//     switch ($variant) {
//       case "primary": {
//         return css`
//           color: grey;
//         `;
//       }
//       case "active": {
//         return css`
//           color: blue;
//         `;
//       }
//       case "disabled": {
//         return css`
//           cursor: none;
//           opacity: 0.7;
//           color: white;
//         `;
//       }
//       default: {
//         return css``;
//       }
//     }
//   }}
// `;
