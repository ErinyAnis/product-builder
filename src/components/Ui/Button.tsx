import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} rounded-lg text-white py-2 px-4 transition ease-in-out duration-300`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
