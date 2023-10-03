import type { Meta, StoryObj } from '@storybook/react';

import { InputCard } from './InputCard.component';

import './InputCard.component.scss'

const meta: Meta<typeof InputCard> = {
    component: InputCard,
};

export default meta;


type Story = StoryObj<typeof InputCard>;

export const Primary: Story = {
};