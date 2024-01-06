import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input.component';

import './Input.component.scss'

const meta: Meta<typeof Input> = {
    component: Input,
};

export default meta;


type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        text: "Confirm"
    }
};