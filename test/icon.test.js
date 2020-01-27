const expect = chai.expect;
import Vue from 'vue'
import zchIcon from '../src/components/icon'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('zchIcon', () => {
  const Constructor = Vue.extend(zchIcon)
  it('存在', () => {
    expect(zchIcon).to.be.exist
  })
  it('添加 icon ', () => {
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
    vm.$el.remove()
    vm.$destroy()
  })
})