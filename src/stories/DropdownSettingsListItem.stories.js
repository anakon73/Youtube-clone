import DropdownSettingsListItem from '../components/UI/DropdownSettingsListItem.vue'
import '../style.css'
import './index.css'

export default {
  title: 'DropdownSettingsListItem',
  component: DropdownSettingsListItem,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => ({
  components: { DropdownSettingsListItem },
  setup() {
    return { args }
  },
  template:
    '<DropdownSettingsListItem v-bind="args" >{{args.label}}</DropdownSettingsListItem>',
})

export const Primary = Template.bind({})
Primary.args = {
  icon: '',
  label: '',
  withSubMenu: false,
}
