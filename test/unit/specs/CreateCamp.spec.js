import Vue from 'vue'
import CreateCamp from '@/components/CreateCamp'

describe('CreateCamp.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CreateCamp);
    const vm = new Constructor().$mount();
  })
})
