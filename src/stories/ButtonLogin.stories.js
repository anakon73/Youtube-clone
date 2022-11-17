import ButtonLogin from '../components/UI/ButtonLogin.vue'
import '../style.css'

export default {
  title: 'ButtonLogin',
  component: ButtonLogin,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => ({
  components: { ButtonLogin },
  setup() {
    return { args }
  },
  template: '<ButtonLogin disabled v-bind="args" >{{args.label}}</ButtonLogin>',
})

export const Primary = Template.bind({})
Primary.args = {
  label: '',
}
