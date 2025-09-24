import MainLayout from "../layouts/main-layout/MainLayout";
import JourneysBottomSlot from "./JourneysBottomSlot";
import JourneysTopSlot from "./JourneysTopSlot";
import { useState } from "react";

export default function Journeys() {
  const [arePicsAllowed, setArePicsAllowed] = useState(false);

  const onKeySubmission = () => {
    setArePicsAllowed((currentArePicsAllowed) => !currentArePicsAllowed);
  };

  return (
    <MainLayout
      topSlot={<JourneysTopSlot onKeySubmission={onKeySubmission} />}
      bottomSlot={arePicsAllowed ? <JourneysBottomSlot /> : <></>}
    />
  );
}
