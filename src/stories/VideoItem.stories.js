import VideoItem from "../components/VideoItem.vue";
import "../style.css";
import "./index.css";

export default {
  title: "VideoItem",
  component: VideoItem,
};

const Template = (args) => ({
  components: { VideoItem },
  setup() {
    return { args };
  },
  template: '<div  class="videoItem" ><VideoItem v-bind="args" /></div>',
});

export const Primary = Template.bind({});
Primary.args = {
  index: 1,
};
