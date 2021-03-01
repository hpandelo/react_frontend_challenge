import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import FlexContainer from "../../components/FlexContainer";
import HomeButton from "../../components/HomeButton";
import WelcomePrimaryText from "../../components/WelcomePrimaryText";
import WelcomeSecondaryText from "../../components/WelcomeSecondaryText";
import RESOURCES from "../../constants/resources";

const HomePage = styled.div`
  width: 100%;
  height: 100%;
  color: #2c97d1;
`;

const resetBodyBackground = () => document.body.style.backgroundColor = "#FFF";

/**
 * Using simple/common React Functional Components
 */
export default function Home() {
  const history = useHistory();
  const handleStartButtonClick = useCallback(() => history.push("/destiny"), [
    history,
  ]);
  resetBodyBackground();

  return (
    <HomePage>
      <FlexContainer>
        <WelcomePrimaryText
          baseLabel={RESOURCES.LABELS.WELCOME}
          companyName={RESOURCES.LABELS.COMPANY_NAME}
        />
        <WelcomeSecondaryText text={RESOURCES.LABELS.WELCOME_SECONDARY} />
        <HomeButton
          label={RESOURCES.LABELS.WELCOME_BUTTON}
          handleClick={handleStartButtonClick}
        />
      </FlexContainer>
    </HomePage>
  );
}
