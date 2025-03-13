import React, { ReactNode } from "react";
import { styled } from "baseui";
import { Block } from "baseui/block";

const CardContainer = styled("div", ({ $theme }) => ({
  backgroundColor: $theme.colors.backgroundPrimary,
  marginBottom: $theme.sizing.scale600,
  borderRadius: $theme.borders.radius300,
  boxShadow: $theme.lighting.shadow400,
}));

const CardHeader = styled("div", ({ $theme }) => ({
  padding: $theme.sizing.scale600,
  borderBottom: `1px solid ${$theme.colors.borderOpaque}`,
}));

const CardBody = styled("div", ({ $theme }) => ({
  padding: $theme.sizing.scale600,
}));

interface SimpleCardProps {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}

// Base Web Card component crashes the app -- probably a compatibility issue
const SimpleCard: React.FC<SimpleCardProps> = ({ title, children, className }) => {
  return (
    <CardContainer className={className}>
      {title && (
        <CardHeader>
          {typeof title === "string" ? <Block font="font500">{title}</Block> : title}
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
    </CardContainer>
  );
};

export default SimpleCard;
