import styled from "styled-components";

import { TransitionContainer } from "../common/TransitionContainer";
import { ValuesCard } from "./Card";

import { IValues } from "../../interfaces/section/Values";

import { Color } from "../../constants/Color";
import { Media } from "../../constants/Media";

interface ValuesSectionProps {
  values: IValues[];
}

export function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <Container>
      <summary>
        <TransitionContainer
          className="topic"
          effect="fadeInDown"
          duration={0.2}
          translateY={50}
          intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
        >
          WHO AM I
        </TransitionContainer>
        <div className="info">
          <TransitionContainer
            className="title"
            effect="fadeInDown"
            delay={0.2}
            duration={0.2}
            translateY={50}
            intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
          >
            저는 이런 사람이에요!
          </TransitionContainer>
        </div>
      </summary>
      <aside>
        {values.map((value, index) => (
          <TransitionContainer
            key={index}
            className="card"
            effect="fadeInDown"
            delay={0.1 * index}
            duration={0.5}
            intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
          >
            <ValuesCard key={index} page={index + 1} value={value} />
          </TransitionContainer>
        ))}
      </aside>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 10% 13%;

  background-color: ${Color.WhiteGrey};

  > summary {
    margin-right: 8%;

    > .topic {
      margin-bottom: 20px;

      font-size: 0.85rem;
      font-weight: 700;

      color: ${Color.DarkMint};
    }

    > .info {
      > .title {
        font-size: 1.35rem;
        font-weight: 700;
        word-break: keep-all;

        color: ${Color.Black};
      }
    }
  }

  > aside {
    width: 500px;
    > card {
      width: 100%;
    }
  }

  ${Media.Tablet} {
    > aside {
      width: 300px;
    }
  }

  ${Media.Mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;

    > summary {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-right: 0;
      margin-bottom: 50px;

      > .topic {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    > aside {
      width: 100%;
    }
  }
`;