import Vue from 'vue';
import SvgIcon from './SvgIcon.vue';

Vue.component('SvgIcon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(req);