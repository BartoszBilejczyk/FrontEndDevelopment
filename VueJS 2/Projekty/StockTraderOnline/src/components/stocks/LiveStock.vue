<template lang="html">
  <div class="col s12 m6">
    <v-card class="blue-grey darken-1">
        <div class="card-content white-text">
          {{ liveStock.name }}
        </div>
    </v-card>
  </div>
</template>

<script>

export default {
  props: ['liveStock']
}

</script>
