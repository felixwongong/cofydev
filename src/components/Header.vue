<template>
  <div class="fixed top-0 left-0 w-screen h-16 bg-yellow-100 shadow-lg">
    <nav class="max-w-screen-md h-full mx-auto">
      <div class="h-full flex flex-row justify-between items-center px-8">
        <div>
          <h2 class="font-rain font-bold text-lg antialiased">V-USE</h2>
        </div>
        <div class="w-16">
          <img
            src="@/assets/dist/img/coffee.png"
            class="object object-scale-down"
          />
        </div>
        <ul class="flex flex-row justify-evenly items-center">
          <li class="mx-3 font-rain tracking-wider">
            <a
              href="#"
              class="py-0.5 border-transparent border-b-2 hover:border-gray-600"
              >Work</a
            >
          </li>
          <li class="mx-3 font-rain tracking-wider">
            <a
              href="#"
              class="py-0.5 border-transparent border-b-2 hover:border-gray-600"
              >Post</a
            >
          </li>
          <li class="mx-3 font-rain tracking-wider">
            <a
              href="#"
              class="py-0.5 border-transparent border-b-2 hover:border-gray-600"
              >Tutorial</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
