<template>
  <div id="search">
    <form
      class="d-flex mx-auto search mb-4"
      @submit.prevent="handleSearch(term)"
    >
      <input
        type="search"
        id="search"
        v-model="term"
        placeholder="Search for a part-time job in the Division of Student Life"
        class="form-control border-0 search-input"
      />
      <button type="submit" class="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
          />
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </form>
    <p class="small">More ways to find a job:</p>
    <ul class="small">
      <li>
        <a href="https://careers.uiowa.edu/handshake">Handshake</a> (full-time
        and part-time jobs, internships)
      </li>
      <li>
        <a href="https://jobs.uiowa.edu">Jobs@UIowa</a> (full-time jobs)
      </li>
    </ul>
  </div>
</template>
<script setup>
const search = ref([]);
const router = useRouter();
const props = defineProps({
  term: String,
});

var term = "";

if (props.term) {
  term = props.term;
}

function handleSearch(term) {
  if (term) {
    router.push("/search/" + term);
  }
}
</script>
