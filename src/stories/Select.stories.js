import Select from "../Select";

export default {
  title: "Select",
  component: Select,
};
const Template = (args) => <Select {...args} />;
export const SelectComp = Template.bind({});
SelectComp.args = {
  data_list: [1, 2, 3, 4],
  placeholder: "Please Choose option or options",
};
