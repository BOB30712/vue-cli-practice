<template>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      title: '這是標題',
    }
  },
  /*
  created(){
  axios.get("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
      .then((response)=>{
        console.log(response.data.data.XML_Head.Infos.Info)});
  }
  */
}
</script>
