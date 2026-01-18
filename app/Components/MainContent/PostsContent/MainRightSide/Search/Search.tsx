"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, X, Loader2 } from "lucide-react";
import styles from "./Search.module.scss";
import type { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({
  value: controlledValue,
  defaultValue = "",
  onChange,
  onSearch,
  placeholder = "ძებნა...",
  variant = "default",
  size = "md",
  loading = false,
  disabled = false,
  debounceMs = 0,
  showClearButton = true,
  autoFocus = false,
  className = "",
}) => {
  // შიდა მეხსიერება (state) მნიშვნელობისთვის, როცა კომპონენტი არ არის კონტროლირებადი მშობლის მიერ
  const [internalValue, setInternalValue] = useState(defaultValue);
  // მოწმდება, კომპონენტი იმართება თუ არა გარედან (მშობელი კომპონენტის მიერ)
  const isControlled = controlledValue !== undefined;
  // საბოლოო მნიშვნელობა: თუ კონტროლირებადია ვიღებთ გარედან, თუ არა - შიდა მეხსიერებიდან
  const value = isControlled ? controlledValue : internalValue;
  // რეფერენსი Input ელემენტზე, გამოიყენება ფოკუსის სამართავად
  const inputRef = useRef<HTMLInputElement>(null);
  // რეფერენსი ტაიმერის ID-ს შესანახად (Debounce ლოგიკისთვის)
  const debounceTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // ეფექტი ავტომატური ფოკუსირებისთვის: აფოკუსებს ინფუთს კომპონენტის ჩატვირთვისას
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // მნიშვნელობის ცვლილების მთავარი ფუნქცია: ანახლებს state-ს და იძახებს ძებნას დაყოვნებით
  const handleChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);

    // Debounce ძებნის ლოგიკა: ელოდება debounceMs დროს onSearch-ის გამოძახებამდე
    if (onSearch && debounceMs > 0) {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        onSearch(newValue);
      }, debounceMs);
    }
    console.log('მნიშვნელობა  გაეშვა')
  };

  // დამხმარე ფუნქცია input-ის ცვლილების ივენთისთვის
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  // ასუფთავებს საძიებო ველს და აბრუნებს ფოკუსს
  const handleClear = () => {
    handleChange("");
    inputRef.current?.focus();

    // მყისიერი ძებნა გასუფთავებისას (debounce-ის გარეშე)
    if (onSearch) {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      onSearch("");
    }
    console.log('გასუფთავების ფუნქციის გაეშვა ')
  };

  // ფორმის გაგზავნის ფუნქცია (მაგ. Enter-ზე), იძახებს ძებნას მყისიერად
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ასუფთავებს debounce ტაიმერს და ეძებს მყისიერად Enter-ზე
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    onSearch?.(value);
    console.log('საბმიტის ფუნქციის გაეშვა')
  };

  // აგენერირებს CSS კლასებს სხვადასხვა სტილისთვის (ვარიანტი, ზომა, disabled)
  const searchBarClasses = [
    styles.searchBar,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

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

        {loading && <Loader2 className={`${styles.icon} ${styles.spinner}`} />}

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
