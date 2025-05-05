"use client";

import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {useEffect} from "react";

const Dashboard = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();

  useEffect(() => {
    setNavbarTitle("Dashboard");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;
