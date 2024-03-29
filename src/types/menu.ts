export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  to?: string;
  policy?: [string, string]
}
