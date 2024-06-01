import { Helmet, HelmetData, HelmetProps } from "react-helmet-async";

type HeadProps = {
  description?: string;
} & HelmetProps;

const helmetData = new HelmetData({});

export const Head = ({ title, description, ...props }: HeadProps = {}) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | React Dashboard Template` : undefined}
      defaultTitle="React Dashboard Template"
      {...props}
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
