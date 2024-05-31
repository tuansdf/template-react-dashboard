import { PropsWithChildren } from "react";
import { Helmet, HelmetProvider as HelmetProviderM } from "react-helmet-async";

type Props = PropsWithChildren;

export const HelmetProvider = ({ children }: Props) => {
  return (
    <HelmetProviderM>
      <Helmet>
        <title>React Dashboard Template</title>
      </Helmet>

      {children}
    </HelmetProviderM>
  );
};
