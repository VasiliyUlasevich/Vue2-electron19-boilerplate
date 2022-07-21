import { shallowMount } from '@vue/test-utils';

import app from './app.vue';

    it('Test #1', () => {
        const wrapper = shallowMount(app);
        expect(wrapper.text()).toContain('Vue component');
    });
