import {SearchTermType} from "@/provider/NavbarDetailsProvider";
import {FilterConfigType} from "@/lib/types";
import {convertToISOFormat} from "@/lib/utils";

export const applyDynamicFilter = <T extends Record<string, any>>(
  data: T[],
  searchTerm: SearchTermType,
  config: FilterConfigType
): T[] => {
  const filterFn = createDynamicFilter(searchTerm, config);
  return data.filter(filterFn);
};

const createDynamicFilter = <T extends Record<string, any>>(
  searchTerm: SearchTermType,
  config: FilterConfigType,
) => {
  return (item: T): boolean => {
    if (!searchTerm.value) {
      return true;
    }

    if (searchTerm.type === "input") {
      const searchValue = searchTerm.value.toLowerCase();

      return config.textFields.some(field => {
        const fieldValue = item[field];
        return fieldValue && String(fieldValue).toLowerCase().includes(searchValue);
      });
    }

    if (searchTerm.type === "date" && config.dateField) {
      const {start, end} = convertToISOFormat(searchTerm.value);
      const itemDate = new Date(item[config.dateField]);
      const startDate = new Date(start);
      const endDate = new Date(end);
      return itemDate >= startDate && itemDate <= endDate;
    }

    return true;
  }
}