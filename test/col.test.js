const expect = chai.expect;
import Vue from 'vue'
import zchCol from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('zchCol', () => {
  const Constructor = Vue.extend(zchCol)
  it('存在', () => {
    expect(zchCol).to.be.exist
  })
  it('添加 span ', () => {
    const span = 12
    const vm = new Constructor({
      propsData: {
        span
      }
    }).$mount()
    const colElement = vm.$el
    const spanClass = colElement.classList.contains(`zch-col-${span}`)
    expect(spanClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('添加 offset ', () => {
    const offset = 2
    const vm = new Constructor({
      propsData: {
        offset
      }
    }).$mount()
    const colElement = vm.$el
    const offsetClass = colElement.classList.contains(`zch-col-offset-${offset}`)
    expect(offsetClass).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
})