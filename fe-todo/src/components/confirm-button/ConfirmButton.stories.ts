import type { Meta, StoryObj } from '@storybook/react';

import { ConfirmButton } from './ConfirmButton.component';

import './ConfirmButton.component.scss'

const meta: Meta<typeof ConfirmButton> = {
    component: ConfirmButton,
};

export default meta;


type Story = StoryObj<typeof ConfirmButton>;

export const Primary: Story = {
    args: {
        text: "Confirm"
    }
};