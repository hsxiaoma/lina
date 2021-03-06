<template>
  <el-row>
    <DetailCard :title="cardTitle" :items="detailCardItems">
      <div class="feed-activity-list">
        <div class="feed-element">
          <a href="#" class="pull-left">
            <el-avatar :src="imageUrl" class="header-avatar" />
          </a>
          <div class="media-body ">
            <strong>{{ object.user_display }}</strong> <small class="text-muted"> {{ formatTime(object.date_created) }}</small>
            <br>
            <small class="text-muted">{{ toSafeLocalDateStr(object.date_created) }} </small>
            <div style="padding-top: 10px">
              <span v-html="object.body" />
            </div>
          </div>
        </div>
        <template v-if="comments">
          <div v-for="item in comments" :key="item.user_display + item.body">
            <div class="feed-element">
              <a href="#" class="pull-left">
                <el-avatar :src="imageUrl" class="header-avatar" />
              </a>
              <div class="media-body ">
                <strong>{{ item.user_display }}</strong> <small class="text-muted">{{ formatTime(item.date_created) }}</small>
                <br>
                <small class="text-muted">{{ toSafeLocalDateStr(item.date_created) }}</small>
                <div style="padding-top: 10px">
                  {{ item.body }}
                </div>
              </div>
            </div>
          </div>
        </template>
        <el-form ref="comments" :model="form" label-width="45px" style="padding-top: 20px">
          <el-form-item :label="$t('tickets.reply')">
            <el-input v-model="form.comments" :autosize="{ minRows: 4 }" type="textarea" />
          </el-form-item>
          <el-form-item style="float: right">
            <template v-if="hasActionPerm">
              <el-button :disabled="object.status === 'closed'" type="primary" size="small" @click="handleApprove"><i class="fa fa-check" />{{ $t('tickets.Accept') }}</el-button>
              <el-button :disabled="object.status === 'closed'" type="warning" size="small" @click="handleReject"><i class="fa fa-ban" />{{ $t('tickets.Reject') }}</el-button>
            </template>
            <el-button :disabled="object.status === 'closed'" type="danger" size="small" @click="handleClosed"><i class="fa fa-times" />{{ $t('tickets.Close') }}</el-button>
            <el-button :disabled="object.status === 'closed'" type="info" size="small" @click="handleComment"><i class="fa fa-pencil" />{{ $t('tickets.Comment') }}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </DetailCard>
  </el-row>
</template>

<script>
import DetailCard from '@/components/DetailCard'
import { formatTime, getDateTimeStamp } from '@/utils/index'
import { toSafeLocalDateStr } from '@/utils/common'

export default {
  name: 'TicketDetail',
  components: {
    DetailCard
  },
  props: {
    object: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      imageUrl: require('@/assets/img/admin.png'),
      form: {
        comments: ''
      },
      comments: ''
    }
  },
  computed: {
    cardTitle() {
      return this.object.title
    },
    detailCardItems() {
      const vm = this
      return [
        {
          key: this.$t('tickets.user'),
          value: this.object.user_display
        },
        {
          key: this.$t('tickets.type'),
          value: this.object.type_display
        },
        {
          key: this.$t('tickets.status'),
          value: this.object.status,
          callback: function(row, data) {
            const open = vm.$t('common.Open')
            const close = vm.$t('common.Close')
            if (data === 'open') {
              return <el-button type='primary' size='mini'>{open}</el-button>
            }
            return <el-button type='danger' size='mini'>{close}</el-button>
          }
        },
        {
          key: this.$t('tickets.Assignees'),
          value: this.object.assignees_display
        },
        {
          key: this.$t('tickets.Assignee'),
          value: this.object.assignee_display
        },
        {
          key: this.$t('common.dateCreated'),
          value: toSafeLocalDateStr(this.object.date_created)
        }
      ]
    },
    hasActionPerm() {
      return this.object.assignees.indexOf(this.$store.state.users.profile.id) !== -1
    }
  },
  mounted() {
    const url = `/api/v1/tickets/tickets/${this.object.id}/comments/`
    this.$axios.get(url).then(res => {
      this.comments = res
    }).catch(err => {
      this.$message.error(err)
    })
  },
  methods: {
    formatTime(dateStr) {
      return formatTime(getDateTimeStamp(dateStr))
    },
    toSafeLocalDateStr(dataStr) {
      return toSafeLocalDateStr(dataStr)
    },
    reloadPage() {
      window.location.reload()
    },
    createComment(successCallback) {
      const commentText = this.form.comments
      const ticketId = this.object.id
      const commentUrl = `/api/v1/tickets/tickets/${ticketId}/comments/`
      if (!commentText) { return }
      const body = {
        body: commentText,
        ticket: ticketId
      }
      this.$axios.post(commentUrl, body).then(res => {
        if (successCallback) {
          successCallback()
        } else {
          this.reloadPage()
        }
      })
    },
    handleApprove() {
      this.createComment(function() {})
      const url = `/api/v1/tickets/tickets/${this.object.id}/`
      const data = { action: 'approve' }
      this.$axios.patch(url, data).then(res => this.reloadPage()).catch(err => this.$message.error(err))
    },
    handleReject() {
      this.createComment(function() {})
      const url = `/api/v1/tickets/tickets/${this.object.id}/`
      const data = { action: 'reject' }
      this.$axios.patch(url, data).then(res => this.reloadPage()).catch(err => this.$message.error(err))
    },
    handleClosed() {
      const url = `/api/v1/tickets/tickets/${this.object.id}/`
      const data = { status: 'closed' }
      this.$axios.patch(url, data).then(res => this.reloadPage()).catch(err => this.$message.error(err))
    },
    handleComment() {
      this.createComment()
    }
  }
}
</script>

<style scoped>
  .feed-activity-list {
    padding-top: 20px;
    line-height: 1.5;
  }
  .feed-activity-list .feed-element {
    border-bottom: 1px solid #e7eaec;
  }
  .feed-element:first-child {
    margin-top: 0;
  }
  .feed-element {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .feed-element,
  .media-body {
    overflow: hidden;
  }
  .feed-element > .pull-left {
    margin-right: 10px;
  }
  .feed-element .header-avatar {
    width: 38px;
    height: 38px;
  }
  .text-muted {
    color: #888888;
  }
  .el-button--mini {
    padding: 4px 6px;
  }
</style>
