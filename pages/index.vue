<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="page-button-group">
      <mt-button size="large">default</mt-button>
      <mt-button size="large" type="primary">primary</mt-button>
      <mt-button size="large" type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button>default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button size="small">default</mt-button>
      <mt-button size="small" type="primary">primary</mt-button>
      <mt-button size="small" type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button disabled size="large">default</mt-button>
      <mt-button disabled size="large" type="primary">primary</mt-button>
      <mt-button disabled size="large" type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button plain size="large">default</mt-button>
      <mt-button plain size="large" type="primary">primary</mt-button>
      <mt-button plain size="large" type="danger">danger</mt-button>
    </div> 
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
