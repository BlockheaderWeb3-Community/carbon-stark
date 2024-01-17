import banner from "../../assets/appOption.png";

function HomeOptionCard() {
  return (
    <div className="text-white max-w-[315px]">
      <img src={banner} className="w-full h-[241px]" alt="" />
      <div className="pt-4 pl-4 pb-[23px] bg-darkPrimary">
        <h2 className="text-xl font-semibold mb-2">Donate to a project</h2>
        <p className="text-xs font-normal">
          Make an impact with every contribution. Your donation fuels projects
          dedicated to reducing carbon emissions and building a sustainable
          future.
        </p>
      </div>
    </div>
  );
}

export default HomeOptionCard;
