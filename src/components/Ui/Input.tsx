import { forwardRef, InputHTMLAttributes, memo, Ref } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(({ ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
  return (
    <input
      ref={ref}
      className="border-2 border-gray-300 shadow-sm rounded-lg px-3 py-1 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-md"
      {...rest}
    />
  );
});

export default memo(Input);
