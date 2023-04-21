<template>
  <div class="design-system" >
    <el-container>
      <el-aside class="left-section">
        <DesignSystemSidebar />
      </el-aside>
      <el-container class="main-section">
        <router-view />
      </el-container>
  </el-container>
  </div>
</template>
<script>
import DesignSystemSidebar from './DesignSystemSidebar.vue';
export default {
  name: 'Main',
  components: {
    DesignSystemSidebar
  },
  data() {
    return {
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }],
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        region: [
          { required: true, message: 'Please select Activity zone', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
        ],
        resource: [
          { required: true, message: 'Please select activity resource', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please input activity form', trigger: 'blur' }
        ]
      },
      select: '',
      input: '',
      textarea: '',
      radio: '1',
      radio1: 'New York',
      checked1: true,
      checked2: false,
      checked: true,
      checkboxGroup1: ['Shanghai'],
      cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
      switchValue: true,
      activeName: 'first',
      currentPage: 4,
      datePicker: '',
      dateRangePicker: '',
      input3: ''
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },
    open1() {
      this.$notify({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
        duration: 1000000
      });
    },
    open2() {
      this.$notify({
        title: 'Warning',
        message: 'This is a warning message',
        type: 'warning'
      });
    },
    open3() {
      this.$notify.info({
        title: 'Info',
        message: 'This is an info message'
      });
    },
    open4() {
      this.$notify.error({
        title: 'Error',
        message: 'This is an error message'
      });
    },
    openMessage3() {
      this.$message('This is a message.');
    },
    openMessage1() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success'
      });
    },

    openMessage2() {
      this.$message({
        message: 'Warning, this is a warning message.',
        type: 'warning'
      });
    },
    openMessage4() {
      this.$message.error('Oops, this is a error message.');
    },
    openConfirm () {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });          
      });
    },
    onFocus() {

    }
  }
}
</script>

<style lang="scss">

.design-system {

  .left-section {
      z-index     : 99;
      position    : fixed;
      text-align  : left;

      width       : 250px !important;
      animation   : flash 2s forwards;
      transition  : width 0.5s;
      
      top         : 0;
      bottom      : 0;
      overflow-y  : scroll;
      overflow-x  : hidden;

      animation-duration: 3s;
      animation-name: fadeIn;
      
      /* custome crollbar css */
      &::-webkit-scrollbar
      {
          width   : 0;
          display: none;
      }
      &::-webkit-scrollbar-track {
          -webkit-box-shadow: white; 
      }
      &::-webkit-scrollbar-thumb {
          background: white;
      }
  }
  .main-section {
    margin-left: 300px;
  }

}
</style>
