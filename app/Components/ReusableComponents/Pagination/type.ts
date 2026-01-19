export type PaginationVariant = 'default' | 'rounded' | 'outlined';
export type PaginationSize = 'sm' | 'md' | 'lg';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: PaginationVariant;
  size?: PaginationSize;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  siblingCount?: number;
  disabled?: boolean;
  className?: string;
}
