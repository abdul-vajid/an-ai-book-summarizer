"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        {
          "h-9 px-4 rounded-md text-base": size === "md",
          "h-10 px-6 rounded-lg text-lg": size === "lg",
          "h-8 px-3 rounded text-sm": size === "sm",
        },
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
