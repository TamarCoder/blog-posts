import styles from "./Button.module.scss";
import { ButtonProps } from "./types";
import React from "react";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      title,
      variant = "primary",
      size = "medium",
      disabled = false,
      isLoading = false,
      onClick,
      className = "",
      children,
      isFullWidth = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const buttonClasses = [
      styles.button,
      styles[variant],
      styles[size],
      isFullWidth ? styles.fullWidth : "",
      className,
      isLoading ? styles.loading : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
          <button 
               ref={ref}
               className={buttonClasses}
               disabled={disabled || isLoading}
               {...props}>
                  {title || children}
               </button>
    );
  }
);

Button.displayName = "Button";
