/* eslint-disable react/prop-types */
import { useState } from "react";

function DisconnectBtn({ address, disconnectWallet }) {
  const [displayAddress, setDisplayAddress] = useState(true);
  return (
    <button
      className="py-[10px] rounded-[50px] px-[31px] text-white text-sm font-semibold bg-transparent border-solid border-primaryColor border-[1px] w-[200px] transition-all"
      onMouseEnter={() => setDisplayAddress(false)}
      onMouseLeave={() => setDisplayAddress(true)}
      onClick={() => disconnectWallet()}
    >
      {!displayAddress
        ? "Disconnect Wallet"
        : address.slice(0, 10).concat("...")}
    </button>
  );
}

export default DisconnectBtn;
