<script>
  import giphyService from '../../giphyService'

  let imageSource = null;
  setNewImageSource();

  function setNewImageSource() {
    giphyService.getRandomImageUrl()
      .then(url => {
        imageSource = url
      })
  }
</script>

<style>
  .container {
    text-align: center;
  }
	.giphyImage {
    max-height: 80vh;
    height: auto;
    width: 100vw;
  }
</style>

<div class="container">
  <img alt="a random image" src={imageSource} class="giphyImage flexerino">
  <button on:click={setNewImageSource} class="flexerino">Random Image</button>
</div>
