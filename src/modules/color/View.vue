<template>
  <div>
    <div>
      <p class="is-title">Primary color</p>
    </div>
    <div>
      <div class="section-color">
        <div v-for="(color,index) in colorsPrimary" :key="index">
          <div class="block-color" :class="getClass(color)">
          </div>
          <div class="block-info">
            <p class="is-title-block-info"><span>{{ color.Name }} {{ color.Sub }}</span></p>
            <p class="is-title-block-info">{{ color.Color }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="is-title" style="padding-top: 42px;">Secondary Color</p>
    </div>
    <div>
      <div class="section-bg">
        <div v-for="(bg,index) in colorsSuccess" :key="index">
          <div class="block-color" :class="getClass(bg)">
          </div>
          <div class="block-info">
            <p class="is-title-block-info"><span>{{ bg.Name }} {{ bg.Sub }}</span></p>
            <p class="is-title-block-info">{{ bg.Color }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="is-title" style="padding-top: 42px;">Warning Color</p>
    </div>
    <div>
      <div class="section-bg">
        <div v-for="(bg,index) in colorsWarning" :key="index">
          <div class="block-color" :class="getClass(bg)">
          </div>
          <div class="block-info">
            <p class="is-title-block-info"><span>{{ bg.Name }} {{ bg.Sub }}</span></p>
            <p class="is-title-block-info">{{ bg.Color }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="is-title" style="padding-top: 42px;">Danger Color</p>
    </div>
    <div>
      <div class="section-bg">
        <div v-for="(bg,index) in colorsDanger" :key="index">
          <div class="block-color" :class="getClass(bg)">
          </div>
          <div class="block-info">
            <p class="is-title-block-info"><span>{{ bg.Name }} {{ bg.Sub }}</span></p>
            <p class="is-title-block-info">{{ bg.Color }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="is-title" style="padding-top: 42px;">Neutral Color</p>
    </div>
    <div>
      <div class="section-neutral">
        <div v-for="(bg,index) in colorsNeutral" :key="index">
          <div class="block-color" :class="getClass(bg)">
          </div>
          <div class="block-info">
            <p class="is-title-block-info"><span>{{ bg.Name }} {{ bg.Sub }}</span></p>
            <p class="is-title-block-info">{{ bg.Color }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Color',
  components : {
  },
  data() {
    return {
      colorsPrimary: [
        {
          Name: 'Primary',
          Sub: 'Main',
          Color: '#579CFF',
        },
        {
          Name: 'Primary',
          Sub: 'Hover',
          Color: '#64B5F6'
        },
        {
          Name: 'Primary',
          Sub: 'Disable',
          Color: '#BBDEFB'
        },
        {
          Name: 'Primary',
          Sub: 'BG',
          Color: '#E3F2FD'
        }
      ],
      colorsSuccess: [
        {
          Name: 'Success',
          Sub: 'Main',
          Color: '#4CAF50'
        },
        {
          Name: 'Success',
          Sub: 'Hover',
          Color: '#81C784'
        },
        {
          Name: 'Success',
          Sub: 'Disable',
          Color: '#C8E6C9'
        },
        {
          Name: 'Success',
          Sub: 'BG',
          Color: '#E8F5E9'
        }
      ],
      colorsWarning : [
        {
          Name: 'Warning',
          Sub: 'Main',
          Color: '#FF9800'
        },
        {
          Name: 'Warning',
          Sub: 'Hover',
          Color: '#FFB74D'
        },
        {
          Name: 'Warning',
          Sub: 'Disable',
          Color: '#FFE0B2'
        },
        {
          Name: 'Warning',
          Sub: 'BG',
          Color: '#FFF3E0'
        }
      ],
      colorsDanger : [
        {
          Name: 'Danger',
          Sub: 'Main',
          Color: '#E64A19'
        },
        {
          Name: 'Danger',
          Sub: 'Hover',
          Color: '#FF8A65'
        },
        {
          Name: 'Danger',
          Sub: 'Disable',
          Color: '#FFCCBC'
        },
        {
          Name: 'Danger',
          Sub: 'BG',
          Color: '#FBE9E7'
        }
      ],
      colorsNeutral :[
        {
          Name: 'Newtral',
          Sub: '900',
          Color: '#212121'
        },
        {
          Name: 'Newtral',
          Sub: '800',
          Color: '#424242'
        },
        {
          Name: 'Newtral',
          Sub: '700',
          Color: '#616161'
        },
        {
          Name: 'Newtral',
          Sub: '600',
          Color: '#757575'
        },
        {
          Name: 'Newtral',
          Sub: '500',
          Color: '#9E9E9E'
        },
        {
          Name: 'Newtral',
          Sub: '400',
          Color: '#BDBDBD'
        },
        {
          Name: 'Newtral',
          Sub: '300',
          Color: '#E0E0E0'
        },
        {
          Name: 'Newtral',
          Sub: '200',
          Color: '#EEEEEE'
        },
        {
          Name: 'Newtral',
          Sub: '100',
          Color: '#F5F5F5'
        },
        {
          Name: 'Newtral',
          Sub: '50',
          Color: '#FAFAFA'
        },
        {
          Name: 'Newtral',
          Sub: 'white',
          Color: '#FFFFFF'
        }
      ]
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
.section-bg {
  padding-top: 24px;
  display: flex;
  gap: 40px;
  .block-info {
    padding-top: 10px;  
  }
}
.section-neutral {
  padding-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 40px;
  .block-info {
    padding-top: 10px;  
  }
}
.block-color {
  width: 100px;
  height: 100px;
  border-radius: 4px;
}
.is-title-block-info {
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  line-height: 18px;
}
</style>
