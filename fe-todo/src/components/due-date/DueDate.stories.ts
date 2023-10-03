import type { Meta, StoryObj } from "@storybook/react";

import { DueDate } from "./DueDate.component";
import { Priority } from "../domain/Priority.enum";
import { WeekDays } from "../domain/WeekDays.enum";
import "./DueDate.component.scss";

const meta: Meta<typeof DueDate> = {
  component: DueDate,
};

export default meta;

type Story = StoryObj<typeof DueDate>;

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
    weekday: WeekDays.MONDAY,
  },
};
