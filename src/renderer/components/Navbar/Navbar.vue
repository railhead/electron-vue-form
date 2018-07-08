<template>
  <b-tabs type="is-boxed" position="is-centered" size="is-medium">
    <b-tab-item label="Commit Form" icon="format-list-bulleted-type">
      <commit-form-view></commit-form-view>
    </b-tab-item>
    <b-tab-item label="Output Text" icon="note-text">
      <output-text-view></output-text-view>
    </b-tab-item>
    <b-tab-item label="Preview" icon="markdown">
      <preview-page-view></preview-page-view>
    </b-tab-item>
  </b-tabs>
</template>

<script>
// Dependencied components
import CommitFormView from '../CommitForm/CommitForm'
import OutputTextView from '../OutputText/OutputText'
import PreviewPageView from '../PreviewPage/PreviewPage'
export default {
  name: 'navbar-view',
  components: {
    CommitFormView,
    OutputTextView,
    PreviewPageView
  }
}
</script>

<style>
</style>

