import React from 'react';
import './framework-comparison.scss';
import FrameworkComparisonTable from '@site/../src/presets/comparison-table/framework-comparison-table';
import OWInternalLink from '@site/../src/theme/ow-internal-link';

const FrameworkComparison = (props) => {
  return (
    <section
      id="framework-comparison-section"
      className="framework-comparison-section"
    >
      <h3>Framework Comparison</h3>
      <p>Choose which framework is right for you and your App</p>
      <FrameworkComparisonTable />

      <OWInternalLink
        className="btn-secondary"
        smooth={true}
        to="services-section"
        offset={-60}
      >
        Back to top
      </OWInternalLink>
    </section>
  );
};

export default FrameworkComparison;
