import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import WindowResizeUseContext from "../../../hooks/WindowResizeUseContext";
import { getMenuEnumsAsArray } from "../../../utils/constants/menuConstant";
import { DEVICE } from "../../../utils/constants/deviceConstant";
import BoxComp from "../../../components/core/Box";
import MoreItemMenuSection from "./section/MoreItemMenu";
import MenuItem from "./section/MenuItem";

const menus = getMenuEnumsAsArray();

const Container = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

const Menu = () => {
  const { device } = WindowResizeUseContext();
  const tabletVisibleItemNumber = 8;
  const [moreSelectMenuItems, setMoreSelectMenuItems] = useState([]);

  useEffect(() => {
    if (device === DEVICE.TABLET) {
      let _moreSelectMenuItems = [];

      for (let i = 0; i < menus.length; i++) {
        const element = menus[i];
        if (i > tabletVisibleItemNumber - 1) {
          _moreSelectMenuItems.push(element);
        }
      }

      setMoreSelectMenuItems(_moreSelectMenuItems);
    }
  }, [device]);

  return (
    <Container>
      {menus
        .slice(
          0,
          device === DEVICE.WEB ? menus.length : tabletVisibleItemNumber
        )
        .map((item, index) => (
          <MenuItem key={index.toString()} item={item} />
        ))}

      {device === DEVICE.TABLET && (
        <MoreItemMenuSection menus={moreSelectMenuItems} />
      )}
    </Container>
  );
};

export default Menu;
