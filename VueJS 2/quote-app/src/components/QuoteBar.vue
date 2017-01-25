<template>
   <div class="wrapper">
       <div class="logo">
        <h3>Quote App</h3>
      </div>
      <div class="progress-wrapper">
        <div class="progress grey">
          <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="min-width: 50px":style="{width: howManyQuotes / maxQuotes * 100 + '%'}">
            {{howManyQuotes}} / {{maxQuotes}}
          </div>
        </div>
      </div>
  </div>
</template>


<script>
  export default {
    props: ['howManyQuotes', 'maxQuotes'],
    data() {
      return {

      }
    }
  }
</script>


<style scoped>

   * {
    box-sizing: border-box
  }


  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #eee;
    box-shadow: 0 10px 10px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);


  }
  .logo {
    width: 20%;
    background: #222;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    box-shadow: 0 10px 10px rgba(0,0,0,0.25), 5px 10px 10px rgba(0,0,0,0.22);
    z-index: 99999


  }

  .progress-wrapper {
    width: 80%;
    background: #ddd;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
  }
  .progress {
    height: 20px;
    margin: 0;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.30), 0 1px 2px rgba(0,0,0,0.34);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  }
  .progress:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,0.36), 0 3px 6px rgba(0,0,0,0.33);

  }

  .progress-bar {
    border-radius: 20px;
    background-color: #3cb878

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
