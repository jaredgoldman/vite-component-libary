import React from "react";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  link?: string;
  children: string;
};

export default function Button({
  link,
  onClick,
  children,
}: ButtonProps): JSX.Element {
  const Component = link ? "a" : "button";
  return <Component onClick={onClick}>{children}</Component>;
}
