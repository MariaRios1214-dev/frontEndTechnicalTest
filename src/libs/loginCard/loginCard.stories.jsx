import React from 'react';
import Octocat from '../../assets/img/Octocat.png';
import LoginCard from './loginCard';

export default {
  title: 'LoginCard',
  component: LoginCard,
};

const Template = args => <LoginCard {...args} />;

export const LoginCardForm = Template.bind({});
LoginCardForm.args = {
  logo: Octocat,
  handleSubmitFunction: {},
};
