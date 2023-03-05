import { HTMLAttributes, ReactElement, ReactNode } from "react";

type BaseButtonProps = {
  className?: string;
  as?: "a" | "button";
  icon?: ReactNode;
};

type LinkButtonProps = BaseButtonProps & HTMLAttributes<HTMLAnchorElement>;

type ButtonProps = BaseButtonProps & HTMLAttributes<HTMLButtonElement>;

function IconButton(props: LinkButtonProps): ReactElement;
function IconButton(props: ButtonProps): ReactElement;
function IconButton({ as = "button", className, ...props }: BaseButtonProps) {
  const Component = as;
  return (
    <Component
      {...props}
      className={`rounded-full border-white border-2 text-white aspect-square p-3 mr-2 hover:bg-opacity-80 hover:bg-black/25 active:bg-black/40 ${
        className ?? ""
      }`}
    >
      {props.icon}
    </Component>
  );
}

export default IconButton;
