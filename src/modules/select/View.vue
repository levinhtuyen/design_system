<template>
  <div>
    <div>
      <p class="is-title">Basic usage</p>
    </div>
    <div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Active</p >
            <el-select v-model="value" placeholder="Select an option">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Disable</p >
            <el-select disabled v-model="value" placeholder="Select an option">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Filled</p >
            <el-select disabled v-model="value1" placeholder="Select an option">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-row>
      </div>
    </div>
    <div style="padding-top:40px">
      <p class="is-title">Multiple select</p>
    </div>
    <div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Active</p >
            <el-select  multiple allow-create v-model="value2" placeholder="Select an option">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-row>
      </div>
      <div class="section-color">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Disable</p >
            <el-select disabled v-model="value" placeholder="Select an option">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-row>
      </div>
      <div class="section-color" style="padding-bottom: 24px;">
        <el-row class="component-preview">
          <p class="text-medium text-h4">Filled</p >
            <el-select  v-model="value3"  multiple allow-create placeholder="Select an option" @change="changeValue">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
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
