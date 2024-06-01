import { PropsWithChildren } from "react";
import { HelmetProvider as HelmetProviderM } from "react-helmet-async";

type Props = PropsWithChildren;

export const HeadProvider = ({ children }: Props) => {
  return <HelmetProviderM>{children}</HelmetProviderM>;
};
