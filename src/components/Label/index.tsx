import { FC, LabelHTMLAttributes, ReactNode } from 'react';

type LabelProperties = {
  children: ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;

export const Label: FC<LabelProperties> = ({ children, ...properties }) => {
  return (
    <label className="font-bold text-center" {...properties}>
      {children}
    </label>
  );
};
