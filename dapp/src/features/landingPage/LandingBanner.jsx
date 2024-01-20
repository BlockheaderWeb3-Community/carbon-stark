function LandingBanner() {
  return (
    <div className="flex w-full flex-col items-center bg-white50 px-5 pb-[31px] pt-[83px] text-center text-darkPrimary">
      <h1 className="mb-[10px] text-[90px] font-normal">
        Starknet. <span className="text-primaryColor">Carbon.</span> Impact.
      </h1>
      <p className="mb-[32px] text-lg font-bold text-black">
        Step into the future of carbon offsetting powered by blockchain. Your
        commitment today shapes a cleaner, more resilient planet
      </p>
      <button className="inline-block rounded-[5px] bg-primaryColor px-[134px] py-[18px] text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:translate-y-[-10px]">
        Get started
      </button>
    </div>
  );
}

export default LandingBanner;
