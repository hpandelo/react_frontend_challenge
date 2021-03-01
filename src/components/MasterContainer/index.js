import React from "react";
import { useMediaQuery } from "react-responsive";
import RESOURCES from "../../constants/resources";
import { usePadawanMasterContext } from "../../contexts/PadawanMaster";
import DestinyButton from "../DestinyButton";
import FlexContainer from "../FlexContainer";
import MasterLabel from "../MasterLabel";
import MasterPicture from "../MasterPicture";

export default function MasterContainer() {
  const { padawanMaster, updatePadawanMaster } = usePadawanMasterContext();

  const { name, side, pictureUrl } = padawanMaster;

  const primaryColor = RESOURCES.COLORS[side].PRIMARY;
  const secondaryColor = RESOURCES.COLORS[side].SECONDARY;
  const isSmallScreen = useMediaQuery({ query: `(max-width: 800px)` });

  document.body.style.backgroundColor = primaryColor;

  return (
    <FlexContainer>
      <DestinyButton
        handleClick={updatePadawanMaster}
        bgColor={secondaryColor}
        textColor={primaryColor}
        label={RESOURCES.LABELS.DESTINY_BUTTON}
        order={isSmallScreen ? 3 : 1}
      />
      <MasterPicture
        pictureUrl={pictureUrl}
        pictureAlt={name}
        order={isSmallScreen ? 1 : 2}
      />
      <MasterLabel
        baseLabel={RESOURCES.LABELS.MASTER}
        masterName={name}
        textColor={secondaryColor}
        order={isSmallScreen ? 2 : 3}
      />
    </FlexContainer>
  );
}
