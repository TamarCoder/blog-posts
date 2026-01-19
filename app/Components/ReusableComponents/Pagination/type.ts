export type PaginationVariant = "default" | "rounded" | "outline";
export type PaginationSize = "sm" | "md" | "lg";

export interface PagintaionProps {
  curentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  varina?: PaginationVariant;
  size?: PaginationSize;
  showFristLast?: boolean;
  showPrevNext?: boolean;
  siblingCount?: number;
  disaable?: boolean;
  clasName?: string;
}
