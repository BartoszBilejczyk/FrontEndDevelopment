<template>
    <div class="panel panel-default">
      <div class="panel-body quote">
        <div class="box">
          <span class="fa fa-quote-right"></span>
        </div>
        <slot></slot> <!-- panel body has to come from outside -->
      </div>
    </div>


</template>


<script>
  export default {
    props: ['myQuotes']


  }
</script>


<style scoped>

   * {
    box-sizing: border-box
  }

  .panel {
    margin: 2rem
  }

    .panel-body {
    font-family: 'Arizonia';
    font-size: 30px;
      padding: 2rem;
  }

  .quote {
    cursor: pointer;
    position: relative;
    max-width: 400px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  }

  .quote:hover {
    background-color: palevioletred
  }

  .box {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background: #444;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    margin-left: -25px;
    top: -25px;
    border: 1px solid black;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);


  }

  span {
    color: #eee;
    font-size: 1.2rem;
  }

</style>




<!--

.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.card-1:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

}

.card-2 {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

card-3 {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.card-4 {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-5 {
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

-->
