<template>
  <div>
      <p class="text-h1 text-bold">Desktop</p>
      <div style="padding-left: 32px;">
        <div class="section-type">
          <div class="grid-section">
            <p class="text-h1 text-bold">Main title</p>
            <p class="text-h1 text-bold">Inter, Semi Bold, Size 25, Line height 38</p>
          </div>
          <div class="grid-section">
            <p class="text-h2 text-bold">Title</p>
            <p class="text-h2 text-bold">Inter, Semi Bold, Size 20, Line height 30 </p>
          </div>
          <div class="grid-section">
            <p class="text-h3 text-bold">Small title</p>
            <p class="text-h3 text-bold">Inter, Semi Bold, Size 16pt, Line height 24 </p>
          </div>
          <div class="grid-section">
            <p class="text-h4 text-bold">Body (Bold)</p>
            <p class="text-h4 text-bold">Inter, Semi Bold, Size 14, Line height 20</p>
          </div>
          <div class="grid-section">
            <p class="text-h4 text-medium">Body (medium)</p>
            <p class="text-h4 text-medium">Inter, Medium, Size 14, Line height 20</p>
          </div>
          <div class="grid-section">
            <p class="text-h4 text-regular">Body (Regular)</p>
            <p class="text-h4 text-regular">Inter, Regular, Size 14, Line height 20</p>
          </div>
          <div class="grid-section">
            <p class="text-h4 text-regular font-italic">Body (regular)</p>
            <p class="text-h4 text-regular font-italic">Inter, Italic, Size 14, Line height 20</p>
          </div>
          <div class="grid-section">
            <p class="text-h5 text-medium font-normal">Supplementary Text (Medium)</p>
            <p class="text-h5 text-medium font-normal">Inter, Medium, Size12, Line height 16</p>
          </div>
          <div class="grid-section">
            <p class="text-h5 text-regular font-normal">Supplementary Text (Regular)</p>
            <p class="text-h5 text-regular font-normal">Inter, Regular, Size12, Line height 16</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Typography',
  data() {
    return {
      ctas: [
        {
          Name: '',
          Label: 'Primary Info',
          type: 'primary',
          icon: ''
        },
        {
          Name: '',
          Label: 'Primary Info',
          type: 'primary',
          icon: ''
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
.section-type {
  padding-top: 24px;
  gap: 40px;
  width: 100%;
  .grid-section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr; 
    gap:40px;
    padding-bottom: 16px;
  }
  .block-info {
    padding-top: 10px;
    
  }
}
</style>
