<template>
  <div>
    <div>
      <p class="is-title">Charrt</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Switch',
  components : {
  },
  data() {
    return {
      value1: true,
      value2: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.is-title {
  font-weight: 600;
  font-size: 25px;
  color: #000000;
}

.section-color {
  padding-top: 24px;
  display: flex;
  gap: 40px;
  .block-info {
    padding-top: 10px;
    
  }
}
.component-preview p {
    font-size: 20px;
    margin: 27px 0 20px;
}

</style>
