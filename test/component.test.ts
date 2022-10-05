import { config, mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TestComponent from '../src/components/TestComponent.vue'

config.global.mocks = {
  useI18n: tKey => tKey,
}

describe('TestComponent', () => {
  it('mounts', () => {
    const wrapper = mount(TestComponent)
    expect(wrapper.vm).toBeTruthy()
  })
})
