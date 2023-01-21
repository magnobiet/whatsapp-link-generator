import { FC, ReactElement } from 'react';

type InputProperties = {
  children: ReactElement | Array<ReactElement>;
};

export const FormGroup: FC<InputProperties> = ({ children }) => {
  return <div className="flex flex-col mb-4">{children}</div>;
};
