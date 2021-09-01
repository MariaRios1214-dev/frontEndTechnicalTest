import React from 'react';
import FeaturesCard from './featuresCard';
import Octocat from '../../assets/img/Octocat.png';
import mockValues from './mockValues.json';

export default {
  title: 'FeaturesCard',
  component: FeaturesCard,
};

const Template = args => <FeaturesCard {...args} />;

export const FeaturesCardExampleAll = Template.bind({});
FeaturesCardExampleAll.args = {
  logo: Octocat,
  totalDetail: true,
  values: mockValues,
};

export const FeaturesCardExample = Template.bind({});
FeaturesCardExample.args = {
  logo: Octocat,
  totalDetail: false,
  values: mockValues,
};
