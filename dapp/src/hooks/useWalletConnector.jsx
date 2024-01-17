import { connect, disconnect } from "get-starknet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useWalletConnector() {
  const [connection, setConnection] = useState("");
  const [account, setAccount] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const starknetConnect = async () => {
      const connection = await connect();

      if (connection && connection.isConnected) {
        setConnection(connection);
        setAccount(connection.account);
        setAddress(connection.selectedAddress);
      }
    };

    // starknetConnect();
  }, []);

  const connectWallet = async () => {
    const connection = await connect();
    if (connection && connection.isConnected) {
      setConnection(connection);
      setAccount(connection.account);
      setAddress(connection.selectedAddress);
    }
    if (connection?.isConnected) {
      navigate("home");
    }
  };

  const disconnectWallet = async () => {
    await disconnect();
    setAddress(undefined);
    setConnection(undefined);
    setAccount("");
  };

  return { connection, account, address, connectWallet, disconnectWallet };
}

export default useWalletConnector;
