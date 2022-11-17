import SidebarNavItem from '../components/UI/SidebarNavItem.vue'
import '../style.css'
import './index.css'

export default {
  title: 'SidebarNavItem',
  component: SidebarNavItem,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => ({
  components: { SidebarNavItem },
  setup() {
    return { args }
  },
  template: '<SidebarNavItem v-bind="args" >{{args.label}}</SidebarNavItem>',
})

export const Primary = Template.bind({})
Primary.args = {
  icon: '',
  label: '',
  isActive: false,
}
