"use client";

import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {useEffect} from "react";

const Dashboard = () => {
  const {setNavbarTitle} = useNavbarDetails();

  useEffect(() => {
    setNavbarTitle("Dashboard");
  }, [setNavbarTitle]);
  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;
