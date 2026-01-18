'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import styles from './Search.module.scss';
import type { SearchBarProps } from './types';

export const SearchBar: React.FC<SearchBarProps> = ({
  value: controlledValue,
  defaultValue = '',
  onChange,
  onSearch,
  placeholder = 'ძებნა...',
  variant = 'default',
  size = 'md',
  loading = false,
  disabled = false,
  debounceMs = 0,
  showClearButton = true,
  autoFocus = false,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);

    // Debounced search
    if (onSearch && debounceMs > 0) {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        onSearch(newValue);
      }, debounceMs);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  const handleClear = () => {
    handleChange('');
    inputRef.current?.focus();

    // Immediate search on clear
    if (onSearch) {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      onSearch('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear debounce timer and search immediately
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    onSearch?.(value);
  };

  const searchBarClasses = [
    styles.searchBar,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <form className={searchBarClasses} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <Search className={styles.searchIcon} />
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-label="ძებნა"
        />

        {loading && (
          <Loader2 className={`${styles.icon} ${styles.spinner}`} />
        )}

        {!loading && showClearButton && value && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            disabled={disabled}
            aria-label="გასუფთავება"
          >
            <X className={styles.icon} />
          </button>
        )}
      </div>
    </form>
  );
};
