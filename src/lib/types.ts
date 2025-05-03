export interface SidebarItem {
  label: string;
  href?: string;
  icon: React.ElementType;
  expandable?:boolean;
  id?:string;
  subMenu?: SubmenuItem[];
  badge?:number;
}

export interface SubmenuItem {
  label: string;
  href: string;
}

