import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type ButtonProperties = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProperties> = ({ children, ...properties }) => {
  return (
    <button
      type="button"
      className="py-2 px-4 rounded font-bold text-black  bg-gradient-to-r bg-[#00e676] hover:bg-[#00a884] transition-colors"
      {...properties}
    >
      {children}
    </button>
  );
};
