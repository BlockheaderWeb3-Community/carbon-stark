/* eslint-disable react/prop-types */
import { useState } from "react";
import { useConnectWallet } from "../context/ConnectContext";
import SpinnerMini from "./SpinnerMini";

function DisconnectBtn({ address, disconnectWallet }) {
  const [displayAddress, setDisplayAddress] = useState(true);
  const { loading } = useConnectWallet();
  return (
    <button
      className="w-[200px] rounded-[50px] border-[1px] border-solid border-primaryColor bg-transparent px-[31px] py-[10px] text-sm font-semibold text-white transition-all"
      onMouseEnter={() => setDisplayAddress(false)}
      onMouseLeave={() => setDisplayAddress(true)}
      onClick={() => disconnectWallet()}
    >
      {!displayAddress ? (
        loading ? (
          <SpinnerMini />
        ) : (
          "Disconnect Wallet"
        )
      ) : (
        address.slice(0, 10).concat("...")
      )}
    </button>
  );
}

export default DisconnectBtn;
