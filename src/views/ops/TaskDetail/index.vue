<template>
  <GenericDetailPage :object.sync="TaskDetail" :active-menu.sync="config.activeMenu" v-bind="config" v-on="$listeners">
    <keep-alive>
      <component :is="config.activeMenu" :object="TaskDetail" />
    </keep-alive>
  </GenericDetailPage>
</template>

<script>
import { GenericDetailPage, TabPage } from '@/layout/components'
import TaskDetail from './TaskDetail'
import TaskHistory from './TaskHistory'
import TaskAdhoc from './TaskAdhoc'
import CeleryTaskLog from '../CeleryTaskLog'
export default {
  components: {
    GenericDetailPage,
    CeleryTaskLog,
    TaskHistory,
    TaskDetail,
    TaskAdhoc,
    TabPage
  },
  data() {
    return {
      TaskDetail: {},
      config: {
        activeMenu: 'TaskDetail',
        submenu: [
          {
            title: this.$t('ops.taskDetail'),
            name: 'TaskDetail'
          },
          {
            title: this.$t('ops.taskVersions'),
            name: 'TaskAdhoc'
          },
          {
            title: this.$t('ops.execution'),
            name: 'TaskHistory'
          }
        ],
        hasRightSide: false
      }
    }
  }
}
</script>

<style scoped>

</style>
