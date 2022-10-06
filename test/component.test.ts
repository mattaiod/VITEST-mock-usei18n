import { config, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import TestComponent from '../src/components/TestComponent.vue'

describe('TestComponent', () => {
  // I don't know how to deal with useI18n but 2 thinking ways:

  config.global.mocks = {
    useI18n: tKey => tKey,
  }
  it('mounts', () => {
    const wrapper = mount(TestComponent)
    expect(wrapper.vm).toBeTruthy()
  })

  it('mounts', () => {
    const wrapper = mount(TestComponent, {
      t: vi.fn().mockImplementation(key => key),
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
