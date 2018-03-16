import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Header from './components/Header'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'

import PersonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'

export const routes = [
  {
    path: '/', name: 'homeLink', components: {
      default: Home,
      'history': History,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery
    }
  },
  { path: '/menu', name: 'menuLink', component: Menu },
  { path: '/admin', name: 'adminLink', component: Admin },
  { path: '/header', name: 'headerLink', component: Header },
  {
    path: '/about', name: 'aboutLink', redirect: '/about/contact', component: About, children: [
      {
        path: '/about/contact', name: 'contactLink', component: Contact, redirect: '/about/contact/personName', children: [
          { path: '/about/contact/personName', name: 'personNameLink', component: PersonName },
          { path: '/about/contact/phone', name: 'phoneLink', component: Phone }
        ]
      },
      { path: '/about/delivery', name: 'deliveryLink', component: Delivery },
      { path: '/about/history', name: 'historyLink', component: History },
      { path: '/about/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide }
    ]
  },
  { path: '/login', name: 'loginLink', component: Login },
  { path: '/register', name: 'registerLink', component: Register },
  { path: '*', redirect: '/' }
]