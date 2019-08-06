import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Message from '@/components/Message'
import DataMethods from '@/components/DataMethods'
import Template from '@/components/Template'
import Computed from '@/components/Computed'
import ClassStyle from '@/components/ClassStyle'
import ComponentTest from '@/components/ComponentTest'
import Condition from '@/components/Condition'
import List from '@/components/List'
import Event from '@/components/Event'
import FormInputBindings from '@/components/FormInputBindings'
import ComponentDemo from '@/components/ComponentDemo'
import CustomComponent from '@/components/CustomComponent'
import SlotDemo from '@/components/SlotDemo'


Vue.use(Router)

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

let routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Message',
    name: 'Message',
    component: Message
  },
  {
    path: '/DataMethods',
    name: 'DataMethods',
    component: DataMethods
  },
  {
    path: '/Template',
    name: 'Template',
    component: Template
  },
  {
    path: '/Computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/ClassStyle',
    name: 'ClassStyle',
    component: ClassStyle
  },
  {
    path: '/ComponentTest',
    name: 'ComponentTest',
    component: ComponentTest
  },
  {
    path: '/Condition',
    name: 'Condition',
    component: Condition
  },
  {
    path: '/List',
    name: 'List',
    component: List
  },
  {
    path: '/Event',
    name: 'Event',
    component: Event
  },
  {
    path: '/FormInputBindings',
    name: 'FormInputBindings',
    component: FormInputBindings
  },
  {
    path: '/ComponentDemo',
    name: 'ComponentDemo',
    component: ComponentDemo
  },
  {
    path: '/CustomComponent',
    name: 'CustomComponent',
    component: CustomComponent
  },
  {
    path: '/SlotDemo',
    name: 'SlotDemo',
    component: SlotDemo
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: NotFound
  }
]
export default new Router({
  routes: routes
})

// Vue.component('todo-item', {
//   template: '<li>This is a todo</li>'
// })
