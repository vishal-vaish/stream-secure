import React from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import MotionAnalytix from "@/components/Analytix_core/MotionAnalytix";
import EventsAnalytix from "@/components/Analytix_core/EventsAnalytix";
import BehavioralAnalytix from "@/components/Analytix_core/BehavioralAnalytix";
import StaffJourneyMapping from "@/components/Analytix_core/StaffJourneyMapping";

const AnalytixContainer = () => {
  return (
    <Tabs defaultValue="motion" className="w-full mt-4">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
        <TabsTrigger value="motion">Motion Analytix</TabsTrigger>
        {/*<TabsTrigger value="storage">Storage Analytix</TabsTrigger>*/}
        <TabsTrigger value="events">Event Analytix</TabsTrigger>
        <TabsTrigger value="behavioral">Behavioral Analytix</TabsTrigger>
        <TabsTrigger value="journey">Journey Mapping</TabsTrigger>
        {/*<TabsTrigger value="performance">System Performance</TabsTrigger>*/}
      </TabsList>

      <TabsContent value="motion" className="mt-4 space-y-4">
        <MotionAnalytix/>
      </TabsContent>
      <TabsContent value="events" className="mt-4 space-y-4">
        <EventsAnalytix/>
      </TabsContent>
      <TabsContent value="behavioral" className="mt-4 space-y-4">
        <BehavioralAnalytix/>
      </TabsContent>
      <TabsContent value="journey" className="mt-4 space-y-4">
        <StaffJourneyMapping/>
      </TabsContent>
    </Tabs>
  )
}
export default AnalytixContainer
