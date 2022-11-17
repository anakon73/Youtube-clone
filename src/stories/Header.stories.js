import Header from '../components/TheHeader.vue'
import '../style.css'

export default {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => ({
  components: { Header },
  setup() {
    return { args }
  },
  template: '<Header v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {}
