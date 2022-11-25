import DropdownAppsListItem from '../components/UI/DropdownAppsListItem.vue'
import '../style.css'
import './index.css'

export default {
  title: 'DropdownAppsListItem',
  component: DropdownAppsListItem,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => ({
  components: { DropdownAppsListItem },
  setup() {
    return { args }
  },
  template:
    '<DropdownAppsListItem disabled v-bind="args" >{{args.label}}</DropdownAppsListItem>',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'YouTube TV',
}
