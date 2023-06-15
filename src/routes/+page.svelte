<script lang="ts">
  import {browser} from '$app/environment';

  if (browser) {
    window.history.pushState(null, '', window.location.href);
    window.location.href = '/home';
  }
</script>
