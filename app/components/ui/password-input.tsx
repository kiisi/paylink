import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "~/lib/utils";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ containerClassName, className, ...props }, ref) => {
    const [show, setShow] = React.useState(false);

    return (
      <div className={cn("relative w-full", containerClassName)}>
        <input
          ref={ref}
          type={show ? "text" : "password"}
          {...props}
          className={cn("flex h-[44px] w-full rounded-[10px] hover:border-primary border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className)}
        />

        <button
          type="button"
          onClick={() => setShow(prev => !prev)}
          className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";