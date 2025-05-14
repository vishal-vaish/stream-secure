"use client";

import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {useEffect} from "react";
import NVRCardContainer from "@/components/nvr/NVRCardContainer";
import SystemHealthContainer from "@/components/dashboard/SystemHealthContainer";
import ActiveUsersStatsContainer from "@/components/dashboard/ActiveUsersStatsContainer";
import RecentEventsStats from "@/components/dashboard/RecentEventsStats";
import StorageAnalytix from "@/components/Analytix_core/StorageAnalytix";

const Dashboard = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();

  useEffect(() => {
    setNavbarTitle("Dashboard");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  return (
    <div>
      <NVRCardContainer/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <SystemHealthContainer/>
        <ActiveUsersStatsContainer/>
      </div>
      <StorageAnalytix/>
      <RecentEventsStats/>
    </div>
  );
};

export default Dashboard;
