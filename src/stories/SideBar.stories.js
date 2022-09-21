import Sidebar from "../components/TheSidebar.vue";
import SidebarSmall from "../components/TheSidebarSmall.vue";
import "../style.css";

export default {
  title: "Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { Sidebar, SidebarSmall },
  setup() {
    return { args };
  },
  template: '<div><Sidebar v-bind="args" /><SidebarSmall v-bind="args"/></div>',
});

export const Primary = Template.bind({});
Primary.args = {};
