"use client";

import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {useEffect} from "react";
import NVRCardContainer from "@/components/nvr/NVRCardContainer";
import SystemHealthContainer from "@/components/dashboard/SystemHealthContainer";
import ActiveUsersStatsContainer from "@/components/dashboard/ActiveUsersStatsContainer";
import RecentEventsStats from "@/components/dashboard/RecentEventsStats";

const Dashboard = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();

  useEffect(() => {
    setNavbarTitle("Dashboard");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  return (
    <div>
      <NVRCardContainer/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <SystemHealthContainer/>
        <ActiveUsersStatsContainer/>
      </div>
      <RecentEventsStats/>
    </div>
  );
};

export default Dashboard;
