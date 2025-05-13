"use client";

import React, {useEffect} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import AnalytixStatsContainer from "@/components/Analytix_core/AnalytixStatsContainer";
import {storageGrowthData, weeklyMotionData} from "@/lib/data";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();

  useEffect(() => {
    setNavbarTitle("Analytix Core");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  const calculateChange = (data: any[], key: string) => {
    if (data.length < 2) return { value: 0, isIncrease: true }
    const current = data[data.length - 1][key]
    const previous = data[data.length - 2][key]
    const change = ((current - previous) / previous) * 100
    return {
      value: Math.abs(change).toFixed(1),
      isIncrease: change >= 0,
    }
  }

  const motionChange = calculateChange(weeklyMotionData, "Ground Floor Lobby-1")
  const storageChange = calculateChange(storageGrowthData, "growth")

  return (
    <div>
      <AnalytixStatsContainer motionChange={motionChange} storageChange={storageChange}/>

    </div>
  )
}
export default Page
