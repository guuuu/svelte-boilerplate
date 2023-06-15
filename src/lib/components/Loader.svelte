<div class="w-full h-full absolute top-0 left-0 center bg-black bg-opacity-70">
  <span class="loader" />
</div>

<style>
  .loader {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    position: relative;
  }
  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    inset: 0;
    background: #7565b8;
    transform: rotate(0deg) translate(30px);
    animation: rotate 1s ease infinite;
  }
  .loader:after {
    animation-delay: 0.5s;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg) translate(30px);
    }
  }
</style>
