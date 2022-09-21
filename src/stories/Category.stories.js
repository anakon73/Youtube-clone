import category from "../components/CategoryItem.vue";
import "../style.css";

export default {
  title: "category",
  component: category,
};

const Template = (args) => ({
  components: { category },
  setup() {
    return { args };
  },
  template: '<category v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  category: "All",
  isActive: true,
};
