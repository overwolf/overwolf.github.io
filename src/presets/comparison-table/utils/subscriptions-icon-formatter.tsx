import React from 'react';
import './subscriptions-icon-formatter.scss';
import ImageToggle from '@site/../src/components/image-toggle/image-toggle';

export type SubscriptionsIconFormatterProps = {
  companyName: string;
  apiName: string;
  color: string;
};

function SubscriptionsIconFormatter(props: SubscriptionsIconFormatterProps) {
  const { companyName, apiName, color } = props;

  // ---------------------------------------------------------------------------

  return (
    <div className="subscription-icon">
      <ImageToggle
        className="logo"
        imgSrc={`/img/presets/comparison-table/subscriptions-comparison-table/${companyName}-logo.svg`}
        alt={`${companyName} ${apiName} logo`}
      />
      <div className="texts">
        <ImageToggle
          className="company-text"
          imgSrc={`/img/presets/comparison-table/subscriptions-comparison-table/${companyName}-text.svg`}
          alt={`${companyName} name`}
        />
        <div className="api-text" style={{ color }}>
          {apiName}
        </div>
      </div>
    </div>
  );
}

export default SubscriptionsIconFormatter;
