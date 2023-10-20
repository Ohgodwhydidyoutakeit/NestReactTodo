import type { Meta, StoryObj } from "@storybook/react";

import { DeleteArea } from "./DeleteArea.component";

import "./DeleteArea.component.scss";

const meta: Meta<typeof DeleteArea> = {
  component: DeleteArea,
};

export default meta;

type Story = StoryObj<typeof DeleteArea>;

export const Primary: Story = {};
