import React from 'react'
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import DateRangePicker from "@/components/DateRangePicker";

const SearchBar = () => {
  const {searchTerm, setSearchTerm} = useNavbarDetails();

  return (
    <div className="relative w-96">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
      </div>
      <Input
        type="text"
        placeholder="Search devices..."
        value={searchTerm.value}
        onChange={e =>
          setSearchTerm({value: e.target.value, type: "input"})}
        className="pl-10 dark:bg-gray-700 dark:border-gray-600 "
      />
      <div className="absolute right-0 inset-y-0">
        <DateRangePicker
          setSelectedValue={setSearchTerm}
        />
      </div>
    </div>
  )
}
export default SearchBar
