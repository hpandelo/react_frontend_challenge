import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import MasterContainer from "../../components/MasterContainer";
import RESOURCES from "../../constants/resources";
import { usePadawanMasterContext } from "../../contexts/PadawanMaster";

const DestinyPage = styled.div`
  width: 100%;
  height: 100%;
`;

const BackLink = styled.span`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 2;
  color: ${props => props.color};

  font-size: 24px;
  cursor: pointer;

  &:before {
    content: '\f1e6';
    padding: 8px;
    font-size: 20px;
    font-weight: bolder;
    display: inline-block;
    vertical-align: baseline;
    font-family: "Material Icons";
  }
`;

/**
 * Using High Order Components (HOC)
 */
export default function Destiny() {
  const { padawanMaster } = usePadawanMasterContext();
  const history = useHistory();
  const handleBackClick = useCallback(() => history.goBack("-1"), [
    history,
  ])


  const linkColor = RESOURCES.COLORS[padawanMaster.side].SECONDARY;

  return (
      <DestinyPage>
          <BackLink
            onClick={handleBackClick}
            color={linkColor}
          >{`BACK`}</BackLink>
          <MasterContainer />
      </DestinyPage>
  );
}
