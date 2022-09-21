import VideoItem from "../components/VideoItem.vue";
import "../style.css";

export default {
  title: "VideoItem",
  component: VideoItem,
};

const Template = (args) => ({
  components: { VideoItem },
  setup() {
    return { args };
  },
  template: '<VideoItem v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  index: 1,
};
