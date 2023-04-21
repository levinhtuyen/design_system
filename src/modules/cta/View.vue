<template>
  <div>
      <p class="is-title">Basic usage</p>
      <div>
        <p style="font-weight: 600;font-size: 16px;padding-top: 24px;">Primary button</p>
        <div class="section-cta">
          
          <div v-for="(cta,index) in ctasPrimary" :key="index">
            <el-button :icon="cta.icon??null" :type="cta.type">{{ cta.Label }} <i v-if="cta.iconRight" :class="cta.iconRight"></i></el-button>
          </div>
        </div>
      </div>
      <div>
        <p style="font-weight: 600;font-size: 16px;padding-top: 24px;">Secondary button</p>
        <div class="section-cta">
          
          <div v-for="(cta,index) in ctasSecondary" :key="index">
            <el-button plain :icon="cta.icon??null" :type="cta.type">{{ cta.Label }} <i v-if="cta.iconRight" :class="cta.iconRight"></i></el-button>
          </div>
        </div>
      </div>
      <div>
        <p style="font-weight: 600;font-size: 16px;padding-top: 24px;">Link</p>
        <div class="section-cta-link">
          
          <div v-for="(cta,index) in ctasLink" :key="index">
            <el-link :type="cta.type">{{ cta.Label }} </el-link>
          </div>
        </div>
      </div>
      <p class="is-title" style="padding-top: 24px;">Disabled</p>
      <div>
        <p style="font-weight: 600;font-size: 16px;padding-top: 24px;">Primary button</p>
        <div class="section-cta">
          
          <div v-for="(cta,index) in ctasPrimary" :key="index">
            <el-button disabled :icon="cta.icon??null" :type="cta.type">{{ cta.Label }} <i v-if="cta.iconRight" :class="cta.iconRight"></i></el-button>
          </div>
        </div>
      </div>
      <div>
        <p style="font-weight: 600;font-size: 16px;padding-top: 24px;">Secondary button</p>
        <div class="section-cta">
          
          <div v-for="(cta,index) in ctasSecondary" :key="index">
            <el-button disabled plain :icon="cta.icon??null" :type="cta.type">{{ cta.Label }} <i v-if="cta.iconRight" :class="cta.iconRight"></i></el-button>
          </div>
        </div>
      </div>
      <div>
        <p style="font-weight: 600;font-size: 16px;padding-top: 24px;">Link</p>
        <div class="section-cta-link">
          
          <div v-for="(cta,index) in ctasLink" :key="index">
            <el-link disabled :type="cta.type">{{ cta.Label }} </el-link>
          </div>
        </div>
      </div>
      <p class="is-title" style="padding-top: 24px;">Button size</p>
      <div style="padding-bottom: 24px;">
        <p style="font-weight: 600;font-size: 16px;padding-top: 24px;">Primary button</p>
          <div class="section-cta">
            
            <div v-for="(cta,index) in ctasButtonSize" :key="index">
              <el-button :size="cta.size" :icon="cta.icon??null" :type="cta.type">{{ cta.Label }} <i v-if="cta.iconRight" :class="cta.iconRight"></i></el-button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CTA',
  data() {
    return {
      ctasPrimary : [
        {
          Name: '',
          Label: 'Primary Info',
          type: 'info',
          icon: ''
        },
        {
          Name: '',
          Label: 'Primary Info',
          type: 'info',
          icon: 'el-icon-setting'
        },
        {
          Name: '',
          Label: 'Primary Info',
          type: 'info',
          icon: '',
          iconRight: 'el-icon-caret-bottom el-icon-right'
        },
        {
          Name: '',
          Label: 'Primary Success',
          type: 'success',
          icon: ''
        },
        {
          Name: '',
          Label: 'Primary Success',
          type: 'success',
          icon: 'el-icon-setting'
        },
        {
          Name: '',
          Label: 'Primary Success',
          type: 'success',
          icon: '',
          iconRight: 'el-icon-caret-bottom el-icon-right'
        },
        {
          Name: '',
          Label: 'Primary Warning',
          type: 'warning',
          icon: ''
        },
        {
          Name: '',
          Label: 'Primary Warning',
          type: 'warning',
          icon: 'el-icon-setting'
        },
        {
          Name: '',
          Label: 'Primary Warning',
          type: 'warning',
          icon: '',
          iconRight: 'el-icon-caret-bottom el-icon-right'
        },
        {
          Name: '',
          Label: 'Primary Danger',
          type: 'danger',
          icon: ''
        },
        {
          Name: '',
          Label: 'Primary Danger',
          type: 'danger',
          icon: 'el-icon-setting'
        },
        {
          Name: '',
          Label: 'Primary Danger',
          type: 'danger',
          icon: '',
          iconRight: 'el-icon-caret-bottom el-icon-right'
        }
      ],
      ctasSecondary : [
        {
          Name: '',
          Label: 'Primary Info',
          type: 'info',
          icon: ''
        },
        {
          Name: '',
          Label: 'Primary Info',
          type: 'info',
          icon: 'el-icon-setting'
        },
        {
          Name: '',
          Label: 'Primary Info',
          type: 'info',
          icon: '',
          iconRight: 'el-icon-caret-bottom el-icon-right'
        },
        {
          Name: '',
          Label: 'Primary Success',
          type: 'success',
          icon: ''
        },
        {
          Name: '',
          Label: 'Primary Success',
          type: 'success',
          icon: 'el-icon-setting'
        },
        {
          Name: '',
          Label: 'Primary Success',
          type: 'success',
          icon: '',
          iconRight: 'el-icon-caret-bottom el-icon-right'
        },
        {
          Name: '',
          Label: 'Primary Warning',
          type: 'warning',
          icon: ''
        },
        {
          Name: '',
          Label: 'Primary Warning',
          type: 'warning',
          icon: 'el-icon-setting'
        },
        {
          Name: '',
          Label: 'Primary Warning',
          type: 'warning',
          icon: '',
          iconRight: 'el-icon-caret-bottom el-icon-right'
        },
        {
          Name: '',
          Label: 'Primary Danger',
          type: 'danger',
          icon: ''
        },
        {
          Name: '',
          Label: 'Primary Danger',
          type: 'danger',
          icon: 'el-icon-setting'
        },
        {
          Name: '',
          Label: 'Primary Danger',
          type: 'danger',
          icon: '',
          iconRight: 'el-icon-caret-bottom el-icon-right'
        },
        {
          Name: '',
          Label: 'Secondary Neuture',
          type: '',
          icon: ''
        },
        {
          Name: '',
          Label: 'Secondary Neuture',
          type: '',
          icon: 'el-icon-setting'
        },
        {
          Name: '',
          Label: 'Secondary Neuture',
          type: '',
          icon: '',
          iconRight: 'el-icon-caret-bottom el-icon-right'
        }
      ],
      ctasLink : [
        {
          Name: '',
          Label: 'Info Link',
          type: 'info',
          href: ''
        },
        {
          Name: '',
          Label: 'Success Link',
          type: 'success',
          href: ''
        },
        {
          Name: '',
          Label: 'Warning Link',
          type: 'warning',
          href: ''
        },
        {
          Name: '',
          Label: 'Danger Link',
          type: 'danger',
          href: ''
        }
      ],
      ctasButtonSize : [
        {
          Name: '',
          Label: 'Medium Primary Info',
          type: 'info',
          icon: '',
          size: 'medium'
        },
        {
          Name: '',
          Label: 'Small Primary Info',
          type: 'info',
          size: 'small'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.is-title {
  font-weight: 600;
  font-size: 25px;
  color: #000000;
}
.section-cta {
  padding-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  .block-info {
    padding-top: 10px;
    
  }
}
.section-cta-link {
  padding-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
  .block-info {
    padding-top: 10px;
    
  }
}
</style>
