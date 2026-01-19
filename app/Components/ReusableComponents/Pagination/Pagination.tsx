"use client"
import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import styles from './pagination.module.scss';
import type { PaginationProps } from './type';

const DOTS = '...';

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'default',
  size = 'md',
  showFirstLast = true,
  showPrevNext = true,
  siblingCount = 1,
  disabled = false,
  className = '',
}) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5; // siblings + first + last + current + 2 dots

    // If pages are less than total page numbers, return all pages
    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // No left dots, but right dots
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPages];
    }

    // No right dots, but left dots
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Both left and right dots
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return range(1, totalPages);
  }, [totalPages, currentPage, siblingCount]);

  const handlePageChange = (page: number) => {
    if (disabled || page < 1 || page > totalPages || page === currentPage) {
      return;
    }
    onPageChange(page);
  };

  const paginationClasses = [
    styles.pagination,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={paginationClasses} aria-label="Pagination">
      <ul className={styles.list}>
        {/* First Page */}
        {showFirstLast && (
          <li>
            <button
              className={styles.button}
              onClick={() => handlePageChange(1)}
              disabled={disabled || currentPage === 1}
              aria-label="პირველი გვერდი"
            >
              <ChevronsLeft className={styles.icon} />
            </button>
          </li>
        )}

        {/* Previous Page */}
        {showPrevNext && (
          <li>
            <button
              className={styles.button}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={disabled || currentPage === 1}
              aria-label="წინა გვერდი"
            >
              <ChevronLeft className={styles.icon} />
            </button>
          </li>
        )}

        {/* Page Numbers */}
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={`dots-${index}`}>
                <span className={styles.dots}>&#8230;</span>
              </li>
            );
          }

          return (
            <li key={pageNumber}>
              <button
                className={`${styles.button} ${
                  pageNumber === currentPage ? styles.active : ''
                }`}
                onClick={() => handlePageChange(pageNumber as number)}
                disabled={disabled}
                aria-label={`გვერდი ${pageNumber}`}
                aria-current={pageNumber === currentPage ? 'page' : undefined}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        {/* Next Page */}
        {showPrevNext && (
          <li>
            <button
              className={styles.button}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={disabled || currentPage === totalPages}
              aria-label="შემდეგი გვერდი"
            >
              <ChevronRight className={styles.icon} />
            </button>
          </li>
        )}

        {/* Last Page */}
        {showFirstLast && (
          <li>
            <button
              className={styles.button}
              onClick={() => handlePageChange(totalPages)}
              disabled={disabled || currentPage === totalPages}
              aria-label="ბოლო გვერდი"
            >
              <ChevronsRight className={styles.icon} />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
