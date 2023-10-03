import type { Meta, StoryObj } from "@storybook/react";

import { EffortLink } from "./EffortLink.component";
import { Priority } from "../domain/Priority.enum";
import "./EffortLink.component.scss";
const meta: Meta<typeof EffortLink> = {
  component: EffortLink,
};

export default meta;

type Story = StoryObj<typeof EffortLink>;

export const Primary: Story = {
  argTypes: {
    priority: {
      options: Object.keys(Priority),
      mapping: Object.values(Priority),
      control: {
        type: "select",
        labels: Object.keys(Priority),
      },
    },
  },
  args: {
    priority: Priority.DEFAULT,
  },
};
