<script lang="ts">
  import { onMount } from "svelte";
  import { updateVisitedCookie } from "../scripts/visited.js";

  let content = "loading...";

  onMount(() => {
    updateVisitedCookie();

    const visitedCount = parseInt(
      document.cookie
        .split(";")
        .find((row) => row.startsWith("timesVisited="))
        ?.split("=")[1]!,
    );

    content = "You've been here ";
    if (visitedCount == 1) {
      content += "once!<br>You should come by more often!";
    } else {
      content += visitedCount + " times!";
      if (visitedCount >= 1000) {
        content += "<br>What are you some kind of stalker?";
      } else if (visitedCount >= 100) {
        content += "<br>Can't get enough of me can you?";
      }
    }
  });
</script>

<div>
  <p>{@html content}</p>
</div>
