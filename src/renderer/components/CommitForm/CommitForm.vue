<template>
  <section class="container">
    <b-field label="Title">
      <b-input v-model="commitMessage.title" icon="format-title" placeholder="hogehogeの変更" maxlength="80"></b-input>
    </b-field>
    <b-field label="Reviewer">
      <b-input v-model="commitMessage.reviewer" icon="human-greeting" placeholder="aさん, bさん"></b-input>
    </b-field>
    <b-field label="変更内容">
      <b-input v-model="commitMessage.changeLog" type="textarea" placeholder="..."></b-input>
    </b-field>
    <b-field label="JIRA(Option)">
      <b-input v-model="commitMessage.jiraUrl" type="url" icon="web" placeholder="URL"></b-input>
    </b-field>
    <b-field label="資料(Option)">
      <b-input v-model="commitMessage.appendix" icon="paperclip" placeholder="..."></b-input>
    </b-field>
  </section>
</template>

<script>
import { cloneDeep } from 'lodash'
export default {
  name: 'commit-form-page',
  data() {
    return {
      commitMessage: {
        title: '',
        reviewer: '',
        changeLog: '',
        jiraUrl: '',
        appendix: ''
      }
    }
  },
  computed: {},
  watch: {
    commitMessage: {
      handler(val) {
        this.$store.commit('UPDATE_FORM', cloneDeep(val))
      },
      deep: true
    }
  },
  filters: {
    pretty(val) {
      return JSON.stringify(JSON.parse(val), null, 2)
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>


