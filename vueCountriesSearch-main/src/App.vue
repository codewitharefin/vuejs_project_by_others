<script setup>
import { ref } from 'vue';
import countries from './data/data'

let q = ref('')

const getCountriesStartWithLetterB = (target) => {
  return countries.filter(item => {

    if ((target.length === 1) && item.country[0].toLowerCase() === target.toLowerCase()) {
      return item
    }

    if ((target.length > 1) && item.country.toLowerCase().includes(target)) {
      return item
    }

    if ((target.length === 0)) {
      return item
    }

  })
}


</script>


<template>
  <div class="max-w-5xl p-5 mx-auto my-20 bg-white/70 rounded-xl">
    <div class="p-3 mb-5 bg-green-100 rounded-xl">
      <input class="w-full h-10 p-3 rounded-xl focus:outline-none outline-gray-400 focus:bg-gray-100"
        placeholder="Search your desire country" type="text" v-model="q" id="">
    </div>
    <nav class="h-full overflow-y-auto" aria-label="Directory">
      <div class="relative">
        <div
          class="sticky top-0 z-10 px-5 py-2 mb-3 text-lg font-semibold leading-6 text-gray-900 rounded-lg border-y border-b-gray-200 border-t-gray-100 bg-gray-50">
          <h3>Countries {{ q ? `filtered by : ${q}` : '' }}</h3>
        </div>
        <ul role="list" class="grid grid-cols-4 gap-5">

          <template v-if="getCountriesStartWithLetterB(q).length" v-for="(item, index) in getCountriesStartWithLetterB(q)"
            :key="index">
            <li class="flex flex-col justify-between p-3 rounded-lg shadow-md bg-white/60 gap-x-4">
              <div class="mb-2">
                <h2 class="font-bold leading-6 text-gray-700">{{ item.country }} <span
                    class="inline-flex items-center px-2 py-1 ml-2 text-xs text-pink-700 bg-pink-100 rounded-md">{{
                      item.abbreviation }}</span></h2>
                <p class="leading-5 text-gray-800 truncate">{{ item.city }}</p>
              </div>
              <img class="flex-none rounded" :src="item.flag_src" :alt="item.flag_src">

              <div class="min-w-0">
                <h3 class="py-2 text-lg font-bold text-gray-700">Currency details</h3>
                <p class="text-xs leading-5 text-gray-500 truncate"></p>

                <p>
                  Symbol:
                  <span class="text-lg font-bold">{{ item.currency_details?.symbol }}</span>
                  <span :class="item.currency_details?.code ? 'inline-flex' : 'hidden'"
                    class="items-center px-2 py-0.5 ml-2 font-bold text-indigo-700 bg-indigo-100 rounded-md">
                    {{ item.currency_details?.symbol_native }}
                  </span>
                </p>
                <p class="mt-2">
                  {{ item.currency_details?.name }}
                  <span class="items-center px-2 py-1 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-md"
                    :class="item.currency_details?.code ? 'inline-flex' : 'hidden'">
                    {{ item.currency_details?.code }}
                  </span>
                </p>
              </div>

            </li>
          </template>
          <li v-else class="col-span-4 p-3 border-2 border-red-300 rounded-lg bg-red-200/70">
            <h3 class="py-2 text-lg font-bold text-red-500">Sorry 💔 No result found</h3>
          </li>

        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
