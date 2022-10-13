<template>
  <div class="input-wrapper">
    <input
      type="text"
      placeholder="Search for a country"
      class="w-80 p-3 shadow-md outline-none"
    />
    <select
      name="Filter by Region"
      placeholder="Filter by Region"
      id="Filter by Region"
      class="w-60 p-3 shadow-md outline-none"
    >
      <option value="">Filter by Region</option>

      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input-wrapper {
  @apply flex p-5 mt-4  md:flex justify-between flex-row lg:flex justify-between flex-row xl:flex justify-between flex-row max-w-screen-xl mx-auto;
}
</style>
