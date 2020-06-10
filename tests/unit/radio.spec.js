import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import ZchRadio from '@/components/radio'
chai.use(sinonChai)

describe('ZchRadio', () => {
  it('存在', () => {
    expect(ZchRadio).to.be.exist
  })
  it('接受 v-model ', async () => {
    const radio = '2'
    const Component = {
      components: { ZchRadio },
      data () {
        return { radio }
      },
      template: `
        <div>
          <zch-radio v-model="radio" label="1">选项一</zch-radio>
          <zch-radio v-model="radio" label="2">选项二</zch-radio>
          <zch-radio v-model="radio" label="3">选项三</zch-radio>
        </div>
      `,
    }
    const wrapper = mount(Component)
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.zchRadio').at(1).classes().includes('checked')).to.eq(true)
  })
  it('测试 name ', () => {
    const name = 'zch'
    const wrapper = shallowMount(ZchRadio, {
      propsData: {
        name
      }
    })
    expect(wrapper.find('.zchRadio-radio').attributes('name')).to.eq(name)
  })
  it('测试 label ', () => {
    const label = 'zch'
    const wrapper = shallowMount(ZchRadio, {
      propsData: {
        label
      }
    })
    expect(wrapper.find('.zchRadio-radio').attributes('value')).to.eq(label)
  })
})