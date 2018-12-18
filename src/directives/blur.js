const blur = {

}

function setBlur(el, binding) {
    el.style.filter = !binding.value ? 'blur(3px)':  'none'
    el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

    el.querySelectorAll('a').forEach( a => {
      if(!binding.value) {
          a.setAttribute('hidden', true)
      } else {
          a.removeAttribute('hidden')
      }
    })
}

blur.install = function (Vue) {
    Vue.directive('blur', {
        bind (el, binding) {
            setBlur(el, binding)
        }
    })
}

export default blur