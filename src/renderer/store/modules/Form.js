const state = {
  commitMessage: {
    title: '',
    reviewer: '',
    changeLog: '',
    jiraUrl: '',
    appendix: ''
  }
}

const getters = {
  form1: state => state
}

const UPDATE_FORM = 'UPDATE_FORM'
const mutations = {
  [UPDATE_FORM](state, commitMessage) {
    state.commitMessage = commitMessage
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
