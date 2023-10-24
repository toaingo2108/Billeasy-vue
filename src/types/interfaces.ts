interface BaseTableHeader {
  // You can add other common properties here
  [key: string]: any;
}

interface CheckableTableHeader extends BaseTableHeader {
  checkable: true;
}

interface BaseTableItem {
  [key: string]: any;
}
interface CheckableTableItem extends BaseTableItem {
  checked: false;
}

export interface SettingItem {
  title: string;
}
export type TableHeader = BaseTableHeader | CheckableTableHeader;
export type TableItem = BaseTableItem | CheckableTableItem;
export type TableHeadersArray = TableHeader[];
export type TableItemsArray = TableItem[];
