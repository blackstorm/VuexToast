<template>
  <div id="{{'toast' + index}}" class="toast" v-for="(index, m) in message" v-bind:style="transform(index)" track-by="$index">
    <div class="toast-alert">
      <div class="alert {{type}}">
        <span>{{ m }}</span>
        <i class="delete icon" @click="onClick(index)"></i>
      </div>
    </div>
  </div>
</template>
<script>
import store from '../../store'

export default {
  computed: {
    message () {
      return store.state.toast.message
    },
    type () {
      return store.state.toast.type
    }
  },
  methods: {
    onClick (index) {
      document.getElementById('toast' + index).setAttribute('class', 'toastHidden')
    },
    transform (index) {
      return 'transform: translateY(-' + (index * 100) + '%);'
    }
  }
}
</script>
<style>
.toastHidden {
  display: none;
}
.toast{  
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1024;
  opacity: .9;
  /*The good stuff */  
  -webkit-transition: opacity 0.5s ease-out; /* Saf3.2+, Chrome */  
  -moz-transition: opacity 0.5s ease-out; /* FF4+ */  
  -ms-transition: opacity 0.5s ease-out; /* IE10? */  
  -o-transition: opacity 0.5s ease-out; /* Opera 10.5+ */  
  transition: opacity 0.5s ease-out;  
}
.toast .alert{
  display: inline-block;
  margin-top: 20px;
  -webkit-box-shadow: 0 2px 6px rgba(0,0,0,0.35);
  box-shadow: 0 2px 6px rgba(0,0,0,0.35)
}
.alert {
  padding: 12px 16px;
  border-radius: 4px;
  background: #fff2ae;
  line-height: 1.5;
}
.alert.error{
  background: #d83e3e;
}
.alert span {
  font-size: 13px;
  color:white;
}
.alert i{
  padding: 0;
  margin: 0 -8px 0 8px;
}
</style>
