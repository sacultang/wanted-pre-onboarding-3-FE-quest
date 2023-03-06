import React, { ReactNode } from "react";
interface AuthrizationProps {
  children: ReactNode;
  currentPath: string;
}
const Authorization = ({ children }: AuthrizationProps) => {
  return <>{children}</>;
};

export default Authorization;
