import { FC, HTMLAttributes, ReactNode } from 'react';

type AlertProperties = {
  children: ReactNode;
  severity?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
} & HTMLAttributes<HTMLDivElement>;

export const Alert: FC<AlertProperties> = ({
  children,
  severity = 'primary',
  ...properties
}) => {
  const classes = {
    primary: 'bg-blue-100 text-blue-700',
    secondary: 'bg-purple-100 text-purple-700',
    success: 'bg-green-100 text-green-700',
    danger: 'bg-red-100 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700',
  }[severity];

  return (
    <div
      {...properties}
      className={`rounded-lg py-5 px-6 text-base my-12 text-center break-words ${classes}`}
      role="alert"
    >
      {children}
    </div>
  );
};
