import { ReactNode } from "react";

interface SubmitButtonProps {
  children: ReactNode;
  className: string;
  isLoading?: boolean;
}

export default function SubmitButton({
  children,
  className,
  isLoading,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      aria-disabled={isLoading}
      className={`${className} ${isLoading ? "btn-disabled" : ""}`}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        children
      )}
    </button>
  );
}
