import { HTMLAttributes, ReactElement, ReactNode } from "react";

type BaseButtonProps = {
  children: React.ReactNode;
  className?: string;
  as?: "a" | "button";
};

type LinkButtonProps = BaseButtonProps & HTMLAttributes<HTMLAnchorElement>;

type ButtonProps = BaseButtonProps & HTMLAttributes<HTMLButtonElement>;

function Button(props: LinkButtonProps): ReactElement;
function Button(props: ButtonProps): ReactElement;
function Button({ as = "button", className, ...props }: BaseButtonProps) {
  const Component = as;
  return (
    <Component
      style={{ lineHeight: "18px"}}
      {...props}
      className={`rounded px-2 text-sm font-sans bg-pumpkin-400 text-slate-800 shadow-md hover:bg-pumpkin-500 transition-colors active:bg-pumpkin-600 border-amber-100 flex flex-row items-center justify-between m-2 ${
        className ?? ""
      }`}
    />
  );
}

export default Button;
