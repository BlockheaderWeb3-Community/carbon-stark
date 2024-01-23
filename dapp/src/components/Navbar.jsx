/* eslint-disable react/prop-types */
import Logo from "./Logo";
import DisconnectBtn from "./DisconnectBtn";
import { useConnectWallet } from "../context/ConnectContext";
import { connectWallet, disconnectWallet } from "../api/ConnectAPI";
import { connect, disconnect } from "get-starknet";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "./SpinnerMini";

function Navbar() {
  const { dispatch, address, connection, loading } = useConnectWallet();
  const navigate = useNavigate();

  async function onConnect() {
    const response = await connectWallet(dispatch, connect);
    if (response) {
      navigate("home");
    }
    return;
  }

  async function onDisconnect() {
    await disconnectWallet(dispatch, disconnect);
  }

  return (
    <nav className="flex items-center justify-between bg-darkPrimary px-[55px] py-[14px]">
      <Logo />

      {!connection?.isConnected ? (
        <button
          className="flex min-h-10 min-w-[173px] items-center justify-center rounded-[5px] bg-primaryColor px-8 py-[10px] text-sm font-semibold text-white transition-all duration-150 ease-in-out hover:opacity-85"
          onClick={onConnect}
        >
          {loading ? <SpinnerMini /> : "Connect Wallet"}
        </button>
      ) : (
        <DisconnectBtn address={address} disconnectWallet={onDisconnect} />
      )}
    </nav>
  );
}

export default Navbar;
