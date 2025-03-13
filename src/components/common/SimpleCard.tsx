import React, { ReactNode } from "react";
import { styled } from "baseui";
import { Block } from "baseui/block";

const CardContainer = styled("div", ({ $theme }) => ({
  backgroundColor: $theme.colors.backgroundPrimary,
  borderRadius: $theme.borders.radius300,
  boxShadow: $theme.lighting.shadow400,
  marginBottom: $theme.sizing.scale600,
}));

const CardHeader = styled("div", ({ $theme }) => ({
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  borderBottomColor: $theme.colors.borderOpaque,
  paddingTop: $theme.sizing.scale600,
  paddingRight: $theme.sizing.scale600,
  paddingBottom: $theme.sizing.scale600,
  paddingLeft: $theme.sizing.scale600,
}));

const CardBody = styled("div", ({ $theme }) => ({
  paddingTop: $theme.sizing.scale600,
  paddingRight: $theme.sizing.scale600,
  paddingBottom: $theme.sizing.scale600,
  paddingLeft: $theme.sizing.scale600,
}));

const CardFooter = styled("div", ({ $theme }) => ({
  borderTopStyle: "solid",
  borderTopWidth: "1px",
  borderTopColor: $theme.colors.borderOpaque,
  paddingTop: $theme.sizing.scale600,
  paddingRight: $theme.sizing.scale600,
  paddingBottom: $theme.sizing.scale600,
  paddingLeft: $theme.sizing.scale600,
}));

interface SimpleCardProps {
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

// Base Web Card component crashes the app -- probably a compatibility issue
const SimpleCard: React.FC<SimpleCardProps> = ({ title, children, footer, className }) => {
  return (
    <CardContainer className={className}>
      {title && (
        <CardHeader>
          {typeof title === "string" ? <Block font="font500">{title}</Block> : title}
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};

export default SimpleCard;
