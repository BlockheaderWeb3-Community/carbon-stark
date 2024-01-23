import { useEffect } from "react";
import LandingBanner from "../features/landingPage/LandingBanner";
import { useConnectWallet } from "../context/ConnectContext";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const { connection } = useConnectWallet();
  const navigate = useNavigate();
  useEffect(() => {
    if (connection) {
      navigate("/");
      return true;
    }
  }, [connection, navigate]);

  return (
    <div className="bg-co2Bg bg-cover bg-center bg-no-repeat px-[58px] pb-[200px] pt-[140px]">
      <LandingBanner />
    </div>
  );
}

export default LandingPage;
