export type SearchBarSize = 'sm' | 'md' | 'lg';
export type SearchBarVariant = 'default' | 'filled' | 'outlined';

export interface SearchBarProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  variant?: SearchBarVariant;
  size?: SearchBarSize;
  loading?: boolean;
  disabled?: boolean;
  debounceMs?: number;
  showClearButton?: boolean;
  autoFocus?: boolean;
  className?: string;
}
