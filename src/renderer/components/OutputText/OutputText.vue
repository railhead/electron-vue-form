<template>
  <section>
    <div>
      <h2 class="title is-2">Commit Message</h2>
      <div class="box">
        <span v-if="titleValidate">{{ this.myStore.commitMessage.title }}</span>
        <span v-else class="has-text-danger">;Title is blank.</span>
        <br><br>

        <h3>## :human-greeting: Reviewer</h3>
        <span v-if="reviewerValidate">{{ this.myStore.commitMessage.reviewer }}</span>
        <span v-else class="has-text-warning">;Reviewer is blank.</span>
        <br><br>

        <h3>## :syncronous-counterclock: 変更内容</h3>
        <span v-if="changeLogValidate">{{ this.myStore.commitMessage.changeLog }}</span>
        <span v-else class="has-text-warning">;changelog is blank.</span>
        <br><br>

        <div v-if="jiraEnabled">
          <h3>## :link: JIRA</h3>
          <span>{{ this.myStore.commitMessage.jiraUrl }}</span>
          <br><br>
        </div>

        <div v-if="appendixEnabled">
          <h3>## :link: 資料</h3>
          <span>{{ this.myStore.commitMessage.appendix }}</span>
        </div>
        <br><br>
      </div>
    </div>
    <div>
      <h2 class="title is-3">for Debug (store state)</h2>
      <span>store.Form.commitMessage</span>
      <pre>{{ this.myStore }}</pre>
    </div>
  </section>
</template>

<script>
import { isEmpty } from '../../../api/validation.js'
export default {
  name: 'output-text-view',
  data() {
    return {}
  },
  computed: {
    myStore() {
      return this.$store.state.Form
    },
    titleValidate: function() {
      return !isEmpty(this.$store.state.Form.commitMessage.title)
    },
    reviewerValidate: function() {
      return !isEmpty(this.$store.state.Form.commitMessage.reviewer)
    },
    changeLogValidate: function() {
      return !isEmpty(this.$store.state.Form.commitMessage.changeLog)
    },
    jiraEnabled: function() {
      return !isEmpty(this.$store.state.Form.commitMessage.jiraUrl)
    },
    appendixEnabled: function() {
      return !isEmpty(this.$store.state.Form.commitMessage.appendix)
    }
  },
  watch: {},
  method: {}
}
</script>

<style>
</style>

