<template>
  <div>
    <div>
      <p class="is-title">Basic usage</p>
    </div>
    <div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Active</p >
          <el-input
            placeholder="Please enter text here"
            v-model="input"
            clearable>
          </el-input>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Disable</p >
          <el-input
            disabled
            placeholder="Please enter text here"
            v-model="input"
            clearable>
          </el-input>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Filled disable</p >
          <el-input
            disabled
            placeholder="Please enter text here"
            v-model="input1"
            clearable>
          </el-input>
        </el-row>
      </div>
    </div>
    <div style="padding-top:40px">
      <p class="is-title">Input with icon</p>
    </div>
    <div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Active</p >
          <el-input
            placeholder="Please enter text here"
            v-model="input"
            clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Disable</p >
          <el-input
          disabled
            placeholder="Please enter text here"
            v-model="input"
            clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Filled disable</p >
          <el-input
            disabled
            placeholder="Please enter text here"
            v-model="input1"
            clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-row>
      </div>
    </div>
    <div style="padding-top:40px">
      <p class="is-title">Textarea with limit length</p>
    </div>
    <div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Active</p >
          <el-input
            placeholder="Please enter text here"
            v-model="input"
            type="textarea"
            >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Disable</p >
          <el-input
          disabled
          type="textarea"
            placeholder="Please enter text here"
            v-model="input"
            >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Filled disable</p >
          <el-input
            disabled
            type="textarea"
            placeholder="Please enter text here"
            v-model="input1"
            >
          </el-input>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Focus and Error</p >
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="name">
              <el-input placeholder="Please enter text here" v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-form>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  components : {
  },
  data() {
    return {
      colorsPrimary: [
        
      ],
      input:'',
      input1: 'Hello',
      ruleForm : {
        name: ''
      },
      rules : {
        name: [
          { required: true, message: 'Error message', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    getClass (item) {
      let className = `bg-${item.Name}-${item.Sub}`
      return className.toLowerCase()
    }
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
