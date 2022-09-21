import Search from "../components/TheSearch.vue";
import "../style.css";

export default {
  title: "Search",
  component: Search,
};

const Template = (args) => ({
  components: { Search },
  setup() {
    return { args };
  },
  template: '<Search v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {};
