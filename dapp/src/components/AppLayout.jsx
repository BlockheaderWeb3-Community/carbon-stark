import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect, disconnect } from "get-starknet";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
