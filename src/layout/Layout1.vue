<template>
  <div>
    <app-layout-header />
    <router-view />
    <app-layout-footer />
  </div>
</template>

<script>
import LayoutHeader from './LayoutHeader'
import LayoutFooter from './LayoutFooter'

export default {
  name: 'app-layout-1',
  components: {
    'app-layout-header': LayoutHeader,
    'app-layout-footer': LayoutFooter
  },

  mounted () {
    this.layoutHelpers.init()
    this.layoutHelpers.update()
    this.layoutHelpers.setAutoUpdate(true)
  },

  beforeDestroy () {
    this.layoutHelpers.destroy()
  },

  methods: {
    closeSidenav () {
      this.layoutHelpers.setCollapsed(true)
    }
  }
}
</script>
