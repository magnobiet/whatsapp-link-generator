import { FC, InputHTMLAttributes } from 'react';

type InputProperties = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProperties> = ({ ...properties }) => {
  return <input className="rounded text-center" {...properties} />;
};
