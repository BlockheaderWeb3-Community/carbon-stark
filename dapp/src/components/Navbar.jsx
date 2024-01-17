/* eslint-disable react/prop-types */
import Logo from "./Logo";
import DisconnectBtn from "./DisconnectBtn";
import useWalletConnector from "../hooks/useWalletConnector";

function Navbar() {
  const { connectWallet, disconnectWallet, connection, address } =
    useWalletConnector();
  return (
    <nav className="flex items-center justify-between bg-darkPrimary px-[55px] py-[14px]">
      <Logo />

      {!connection?.isConnected ? (
        <button
          className="rounded-[50px] bg-primaryColor px-8 py-[10px] text-sm font-semibold text-white transition-all duration-150 ease-in-out hover:opacity-85"
          onClick={() => connectWallet()}
        >
          Connect Wallet
        </button>
      ) : (
        <DisconnectBtn address={address} disconnectWallet={disconnectWallet} />
      )}
    </nav>
  );
}

export default Navbar;
