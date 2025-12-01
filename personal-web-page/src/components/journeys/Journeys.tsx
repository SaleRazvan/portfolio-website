import { useEffect, useState } from "react";
import MainLayout from "../layouts/main-layout/MainLayout";
import JourneysBottomSlot from "./JourneysBottomSlot";
import JourneysTopSlot from "./JourneysTopSlot";
import { journeys } from "../../common/constants";

export default function Journeys() {
  const [arePicsAllowed, setArePicsAllowed] = useState(false);

  const onKeySubmission = () => {
    setArePicsAllowed((currentArePicsAllowed) => !currentArePicsAllowed);
  };

  // Eager load the images to avoid the (admittedly small) waiting times
  useEffect(() => {
    journeys.forEach((journey) => {
      journey.imgSrcs.forEach((imgSrc) => {
        const img = new Image();
        img.src = imgSrc;
      });
    });
  }, []);

  return (
    <MainLayout
      topSlot={<JourneysTopSlot onKeySubmission={onKeySubmission} />}
      bottomSlot={arePicsAllowed ? <JourneysBottomSlot /> : <></>}
    />
  );
}
