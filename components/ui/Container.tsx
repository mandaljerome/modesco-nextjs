import { FC } from 'react';

interface Container {
  className?: string;
  children: React.ReactNode;
}

const Container: FC<Container> = ({ children, className }) => {
  return (
    <div className={`mx-auto w-full max-w-screen-xl px-5 lg:px-2 ${className}`}>
      {children}
    </div>
  );
};
export default Container;
