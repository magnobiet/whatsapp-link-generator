import { FC, ReactNode } from 'react';

type ContainerProperties = {
  children: ReactNode;
};

export const Container: FC<ContainerProperties> = ({ children }) => {
  return (
    <div className="container max-w-lg mx-auto mt-24 px-4">{children}</div>
  );
};
