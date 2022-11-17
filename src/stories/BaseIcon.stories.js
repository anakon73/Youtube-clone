import BaseIcon from '../components/UI/BaseIcon.vue'
import '../style.css'

export default {
  title: 'BaseIcon',
  component: BaseIcon,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => ({
  components: { BaseIcon },
  setup() {
    return { args }
  },
  template: '<BaseIcon disabled v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  name: '',
}
