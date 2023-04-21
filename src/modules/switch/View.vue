<template>
  <div>
    <div>
      <p class="is-title">Basic usage</p>
    </div>
    <div>
      <div class="section-color">
        <el-row class="component-preview">
          <div style="display:flex;gap:16px">
            <el-switch
              v-model="value1"
              active-text="Switch on">
            </el-switch>
            <el-switch
            v-model="value2"
            active-text="Switch off">
          </el-switch>
          </div>
          
        </el-row>
      </div>
    </div>
    <div style="padding-top: 32px;">
      <p class="is-title">Disabled</p>
    </div>
    <div>
      <div class="section-color">
        <el-row class="component-preview">
          <div style="display:flex;gap:16px">
            <el-switch
              disabled
              v-model="value1"
              active-text="Switch on">
            </el-switch>
            <el-switch
            disabled
            v-model="value2"
            active-text="Switch off">
          </el-switch>
          </div>
          
        </el-row>
      </div>
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
