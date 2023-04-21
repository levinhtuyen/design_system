<template>
  <div>
    <div>
      <p class="is-title">Basic usage</p>
    </div>
    <div>
      <div class="section-color">
        <el-row class="component-preview">
            <el-checkbox 
            :indeterminate="isIndeterminate" 
            v-model="checkAll" 
            @change="handleCheckAllChange">All option</el-checkbox>
            <div style="padding-left: 16px;">
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group 
              v-model="checkedCities" 
              @change="handleCheckedCitiesChange">
                <el-checkbox 
                v-for="city in cities" 
                :label="city" 
                :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </div>
        </el-row>
      </div>
    </div>
    <div style="padding-top: 32px;">
      <p class="is-title">With borders</p>
    </div>
    <div>
      <div class="section-color">
        <el-row class="component-preview">
            <el-checkbox 
            :indeterminate="isIndeterminate" 
            v-model="checkAll" 
            @change="handleCheckAllChange">All option</el-checkbox>
            <div style="padding-left: 16px;">
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group 
              v-model="checkedCities" 
              @change="handleCheckedCitiesChange">
                <el-checkbox 
                v-for="city in cities" 
                :label="city" 
                :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
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
          <el-checkbox v-model="checked1" disabled>Disable</el-checkbox>
          <el-checkbox v-model="checked2" disabled>Selected disable</el-checkbox>
        </el-row>
      </div>
    </div>
    <div>
      <div class="section-color">
        <el-row class="component-preview">
          <el-checkbox v-model="checked1" border disabled>Disable</el-checkbox>
          <el-checkbox v-model="checked2" border disabled>Selected disable</el-checkbox>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
const cityOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
export default {
  name: 'Checkbox',
  components : {
  },
  data() {
    return {
      checkAll: false,
      checked1: '',
      checked2: true,
      checkedCities: ['Option 2'],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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
