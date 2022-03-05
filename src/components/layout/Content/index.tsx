import React from "react";
import styled from "styled-components";

export function Content({ children }: React.PropsWithChildren<{}>) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  padding: 0 20px;
`;