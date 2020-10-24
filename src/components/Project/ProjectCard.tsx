import React, { useState } from "react";
import styled from "styled-components";

import { Color } from "../../constants/Color";
import { OverlayCard } from "./OverlayCard";
import { Tag } from "../Tag/Tag";

import { IProject } from "../../interfaces/Project";

import { Device } from "../../constants/Device";

export const ProjectCard: React.FC<IProject> = ({
  img,
  name,
  duration,
  tags,
  ...others
}) => {
  const [overlayVisible, setOverlayvisible] = useState(false);

  return (
    <Container>
      <div className="top" onClick={() => setOverlayvisible(!overlayVisible)}>
        <img src={img} alt="Project" />
        <div className="tags">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
        <OverlayCard {...others} visible={overlayVisible} />
      </div>
      <div className="bottom">
        <div className="name">{name}</div>
        <div className="duration">{duration}</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border-radius: 6px;

  box-shadow: 0 0 50px ${Color.LightGrey};

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 80px ${Color.LightGrey};

    transition: transform 0.3s, box-shadow 1s;
  }

  > .top {
    position: relative;

    height: 400px;

    @media (max-width: ${Device.Tablet}px) {
      height: 350px;
    }

    @media (max-width: ${Device.Mobile}px) {
      height: 200px;
    }

    display: flex;

    cursor: pointer;

    > img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    > .tags {
      position: absolute;

      top: 0;
      left: 0;

      z-index: 0;

      padding: 10px;

      display: flex;
      flex-direction: column;

      > * {
        margin-bottom: 5px;
      }
    }
  }

  > .bottom {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > .name {
      margin: 10px 20px;

      color: ${Color.FontBlack};

      font-size: 1.25rem;

      word-break: keep-all;
    }

    > .duration {
      margin: 10px 20px;

      color: ${Color.FontBlack};

      font-size: 0.75rem;

      word-break: keep-all;
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    > .bottom {
      > .name {
        font-size: 1.5rem;
      }

      > .duration {
        font-size: 1.25rem;
      }
    }
  }
`;