import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import ZchDialog from '@/components/dialog'
chai.use(sinonChai)

describe('ZchDialog', () => {
  it('存在', () => {
    expect(ZchDialog).to.be.exist
  })
  describe('接受 position', () => {
    ['middle', 'top', 'right', 'bottom', 'left'].map(position => {
      it(position, () => {
        const wrapper = shallowMount(ZchDialog, {
          propsData: {
            position,
            value: true,
          }
        })
        expect(wrapper.find('transition-stub').attributes('name')).to.eq(`slide-${position}`)
        expect(wrapper.classes().includes(`position-${position}`)).to.eq(true)
      })
    })
  })
})