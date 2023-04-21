<template>
  <div>
    <div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Basic usage</p >
            <el-radio v-model="value" label="1">Option 1</el-radio>
            <el-radio v-model="value" label="2">Option 2</el-radio>
            <el-radio v-model="value" label="3">Option 3</el-radio>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">With borders</p >
            <el-radio v-model="value" border label="1">Option 1</el-radio>
            <el-radio v-model="value" border label="2">Option 2</el-radio>
            <el-radio v-model="value" border label="3">Option 3</el-radio>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Disabled</p >
            <el-radio disabled v-model="value4" label="1">Disable</el-radio>
            <el-radio disabled v-model="value4" label="2">Selected disable</el-radio>
        </el-row>
      </div>
      <div class="selection-color" style="padding:24px 0">
        <el-row class="component-preview">
            <el-radio disabled v-model="value4" border label="1">Disable</el-radio>
            <el-radio disabled v-model="value4" border label="2">Selected disable</el-radio>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  components : {
  },
  data() {
    return {
      colorsPrimary: [
        
      ],
      options : [
        {
          label: 'Option 1',
          value: 1
        },
        {
          label: 'Option 2',
          value: 2
        },
        {
          label: 'Option 3',
          value: 3
        },
        {
          label: 'Option 4',
          value: 4
        }
      ],
      value: null,
      value1: 1,
      value2: [],
      value3: [1, 2],
      value4: '2',
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
    },
    changeValue (value) {
      console.log('value :>> ', value);
      console.log('this.value3 :>> ', this.value3);
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
