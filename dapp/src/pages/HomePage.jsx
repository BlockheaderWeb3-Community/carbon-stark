import HomeOptions from "../features/homePage/HomeOptions";
import sendIcon from "../assets/send.svg";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-bgFlare h-screen flex flex-col items-center bg-no-repeat bg-center bg-cover px-[60px] pt-[70px]">
      <HomeOptions />
      <button
        className="mt-[58px] cursor-pointer mx-auto bg-primaryColor rounded-[50px] px-[92px] py-[20px] flex gap-x-[16px] items-center text-white text-base font-semibold"
        onClick={() => navigate("/app")}
      >
        Dashboard <img src={sendIcon} className="h-4 w-4" alt="" />
      </button>
    </div>
  );
}

export default HomePage;
