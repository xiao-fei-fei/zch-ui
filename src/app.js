import Vue from 'vue'
import zchButton from './components/button'
import zchButtonGroup from './components/button-group'
import zchIcon from './components/icon'
import zchInput from './components/input'
import zchRow from './components/row'
import zchCol from './components/col'
import zchLayout from './components/layout'
import zchHeader from './components/header'
import zchContent from './components/content'
import zchSide from './components/side'
import zchFooter from './components/footer'
import zchToast from './components/toast/main.js'
import zchTab from './components/tabs/tab'
import zchTabPane from './components/tabs/tab-pane'
import zchPopover from './components/popover'
import zchCollapse from './components/collapse/collapse'
import zchCollapseItem from './components/collapse/collapse-item'
import zchTag from './components/tag'

Vue.use(zchToast)
Vue.component('zch-button', zchButton)
Vue.component('zch-button-group', zchButtonGroup)
Vue.component('zch-icon', zchIcon)
Vue.component('zch-input', zchInput)
Vue.component('zch-row', zchRow)
Vue.component('zch-col', zchCol)
Vue.component('zch-layout', zchLayout)
Vue.component('zch-header', zchHeader)
Vue.component('zch-content', zchContent)
Vue.component('zch-side', zchSide)
Vue.component('zch-footer', zchFooter)
Vue.component('zch-tab', zchTab)
Vue.component('zch-tab-pane', zchTabPane)
Vue.component('zch-popover', zchPopover)
Vue.component('zch-collapse', zchCollapse)
Vue.component('zch-collapse-item', zchCollapseItem)
Vue.component('zch-tag', zchTag)

new Vue({
  el: '#app',
  data() {
    return {
      message: '',
      password: '',
      activeTab: 'title2',
      activeCollapse: []
    }
  },
  methods: {
    input(e) {
      console.log(e)
    },
    hClick(e) {
      console.log(e, 'click')
    },
    hChange(e) {
      console.log(e, 'change')
    },
    xxx (position) {
      this.$toast({
        message: '<h1>大撒旦撒旦撒多所多所</h1>',
        type: 'success',
        position,
        showClose: true,
      })
    }
  },
  created () {
  }
})
