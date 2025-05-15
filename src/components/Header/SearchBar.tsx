import React from 'react'
import {Input} from "@/components/ui/input";
import {Search, X} from "lucide-react";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import DateRangePicker from "@/components/Header/DateRangePicker";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const SearchBar = () => {
  const {searchTerm, setSearchTerm, isToShowDatePicker} = useNavbarDetails();

  return (
    <div className="relative w-52 lg:w-[24rem] hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
      </div>
      <Input
        type="text"
        placeholder="Search devices..."
        value={searchTerm.value}
        onChange={e =>
          setSearchTerm({value: e.target.value, type: "input"})}
        className="pl-10 dark:bg-gray-700 dark:border-gray-600 w-full pr-16"
      />
      {isToShowDatePicker && (
        <div className={cn(
          "absolute inset-y-0",
          searchTerm.value.length > 0 ? "right-6" : "right-0"
        )}>
          <DateRangePicker
            setSelectedValue={setSearchTerm}
          />
        </div>
      )}
      {searchTerm.value.length > 0 && (
        <div className="absolute inset-y-0 right-0">
          <Button
            variant="no-background"
            className="px-1"
            onClick={() =>
              setSearchTerm({value: "", type: "input"})}
          >
            <X/>
          </Button>
        </div>
      )}
    </div>
  )
}
export default SearchBar
