import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/en'
import VueCookie from 'vue-cookie';



// Vue.directive("scroll", {
//   inserted: function(el, binding) {
//       let f = function(evt) {
//           if (binding.value(evt, el)) {
//               alert('Hello')
//           }
//       };
//       window.addEventListener("scroll", f);
//   }
// });



export default () => {
  Vue.use(Element, { locale })
  Vue.use(VueCookie);
}
