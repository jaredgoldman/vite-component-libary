import React from 'react'
import Button, { ButtonProps } from './'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    style: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  onClick: () => console.log('clicked'),
  style: 'primary',
  link: 'https://google.com',
  label: 'Primary',
}

export const Secondary = Template.bind({})

Secondary.args = {
  onClick: () => console.log('clicked'),
  style: 'secondary',
  link: 'https://google.com',
  label: 'Secondary',
}
