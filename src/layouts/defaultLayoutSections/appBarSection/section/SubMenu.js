import React from "react";
import styled from "@emotion/styled";
import TypographyComp from "../../../../components/core/Typography";
import BoxComp from "../../../../components/core/Box";

const Container = styled(BoxComp)`
  background-color: #f4f5f6;
  border-radius: 1px;
  padding: 30px 48px;
`;

const ColumnsWrapper = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  gap: 96px;
`;

const TextColumnWrapper = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled(TypographyComp)`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 16.41px;
  color: #000000;
`;

const SubMenuText = styled(TypographyComp)`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  color: #000000;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 15rem;
`;

const TextColumn = ({ title, subMenus }) => {
  return (
    <TextColumnWrapper>
      <Title>{title}</Title>
      {subMenus.map((item, index) => (
        <SubMenuText key={index.toString()}>{item.label}</SubMenuText>
      ))}
    </TextColumnWrapper>
  );
};

const ImgColumn = ({ img }) => {
  return <StyledImg src={img} alt={"subMenu"} />;
};

const SubMenuSection = ({ subMenus }) => {
  const { subMenuLeft, subMenuRight, img } = subMenus;
  return (
    <Container>
      <ColumnsWrapper>
        <BoxComp>
          <TextColumn
            title={subMenuLeft.title}
            subMenus={subMenuLeft.subMenus}
          />
        </BoxComp>

        <BoxComp>
          <TextColumn
            title={subMenuRight.title}
            subMenus={subMenuRight.subMenus}
          />
        </BoxComp>

        <BoxComp>
          <ImgColumn img={img} />
        </BoxComp>
      </ColumnsWrapper>
    </Container>
  );
};

export default SubMenuSection;
