<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Team', href: 'team', icon: UsersIcon, current: false },
  { name: 'Projects', href: 'projects', icon: FolderIcon, current: false },
  { name: 'Calendar', href: 'calendar', icon: CalendarIcon, current: false },
  { name: 'Documents', href: 'documents', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: 'reports', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

const sidebarOpen = ref(false)
const positionScroll = ref(0)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
function handleScroll() {
  positionScroll.value = window.scrollY
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex flex-1 w-full max-w-xs mr-16">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 flex justify-center w-16 pt-5 left-full">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex flex-col px-6 pb-4 overflow-y-auto bg-primary-400 grow gap-y-5">
                <div class="flex items-center h-16 shrink-0">
                  <img class="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
                </div>
                <nav class="flex flex-col flex-1">
                  <ul role="list" class="flex flex-col flex-1 gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <RouterLink :to="item.href" class="flex p-2 text-sm font-semibold leading-6 text-indigo-200 rounded-md group gap-x-3 hover:text-white hover:bg-primary-700">
                            <component :is="item.icon" class="w-6 h-6 shrink-0" aria-hidden="true" />
                            {{ item.name }}
                          </RouterLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="text-xs font-semibold leading-6 text-indigo-200">
                        Your teams
                      </div>
                      <ul role="list" class="mt-2 -mx-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a :href="team.href" class="flex p-2 text-sm font-semibold leading-6 rounded-md group gap-x-3" :class="[team.current ? 'bg-primary-700 text-white' : 'text-indigo-200 hover:text-white hover:bg-primary-700']">
                            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">{{ team.initial }}</span>
                            <span class="truncate">{{ team.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                      <RouterLink to="setting" class="flex p-2 text-sm font-semibold leading-6 text-indigo-200 rounded-md group gap-x-3 hover:text-white hover:bg-primary-700">
                        <Cog6ToothIcon class="w-6 h-6 text-indigo-200 shrink-0 group-hover:text-white" aria-hidden="true" />
                        Settings
                      </RouterLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col px-6 pb-4 overflow-y-auto bg-primary-400 grow gap-y-5">
        <div class="flex items-center h-16 shrink-0">
          <img class="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
        </div>
        <nav class="flex flex-col flex-1">
          <ul role="list" class="flex flex-col flex-1 gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <RouterLink :to="item.href" class="flex p-2 text-sm font-semibold leading-6 text-indigo-200 rounded-md group gap-x-3 hover:text-white hover:bg-primary-700">
                    <component :is="item.icon" class="w-6 h-6 shrink-0" aria-hidden="true" />
                    {{ item.name }}
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-indigo-200">
                Your teams
              </div>
              <ul role="list" class="mt-2 -mx-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a :href="team.href" class="flex p-2 text-sm font-semibold leading-6 rounded-md group gap-x-3" :class="[team.current ? 'bg-primary-700 text-white' : 'text-indigo-200 hover:text-white hover:bg-primary-700']">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">{{ team.initial }}</span>
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <RouterLink to="setting" class="flex p-2 text-sm font-semibold leading-6 text-indigo-200 rounded-md group gap-x-3 hover:text-white hover:bg-primary-700">
                <Cog6ToothIcon class="w-6 h-6 text-indigo-200 shrink-0 group-hover:text-white" aria-hidden="true" />
                Settings
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div class="sticky top-0 z-40 flex items-center h-16 px-4 bg-white border-b border-gray-200 shadow-sm shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="w-6 h-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="w-px h-6 bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex self-stretch flex-1 gap-x-4 lg:gap-x-6">
          <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <MagnifyingGlassIcon class="absolute inset-y-0 left-0 w-5 h-full text-gray-400 pointer-events-none" aria-hidden="true" />
            <input id="search-field" class="block w-full h-full py-0 pl-8 pr-0 text-gray-900 border-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." type="search" name="search">
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="w-6 h-6" aria-hidden="true" />
            </button>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <span class="hidden lg:flex lg:items-center">
                  <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">Tom Cook</span>
                  <ChevronDownIcon class="w-5 h-5 ml-2 text-gray-400" aria-hidden="true" />
                </span>
              </MenuButton>
              <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href" class="block px-3 py-1 text-sm leading-6 text-gray-900" :class="[active ? 'bg-gray-50' : '']">{{ item.name }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <!-- Your content -->
          <RouterView />
        </div>
      </main>
    </div>
    <div v-if="positionScroll > 100" class="fixed z-10 mx-2 my-8 mb-[80px] cursor-pointer right-3 bottom-2">
      <button class="md:whitespace-nowrap inline-flex gap-2  rounded flex-row-reverse py-1 px-2 text-sm !p-[6px] border  border-indigo-700 bg-primary-700 text-white  hover:shadow-lg items-center justify-center m-2 " @click="scrollToTop()">
        <svg
          xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6"
          class="stroke-[none] flex-row-reverse fill-current h-5 w-5"
        >
          <path class="fill-white" d="M9.99559 4.31263L5.91667 0.281245C5.82828 0.192128 5.72312 0.121394 5.60726 0.0731232C5.49139 0.0248524 5.36712 0 5.2416 0C5.11609 0 4.99181 0.0248524 4.87595 0.0731232C4.76008 0.121394 4.65492 0.192128 4.56654 0.281245L0.535151 4.31263C0.446034 4.40102 0.3753 4.50618 0.327029 4.62204C0.278758 4.73791 0.253906 4.86218 0.253906 4.9877C0.253906 5.11321 0.278758 5.23749 0.327029 5.35335C0.3753 5.46922 0.446034 5.57437 0.535151 5.66276C0.713295 5.83985 0.954276 5.93925 1.20546 5.93925C1.45665 5.93925 1.69763 5.83985 1.87578 5.66276L5.2416 2.29694L8.60743 5.66276C8.78453 5.83842 9.02356 5.93744 9.27299 5.9385C9.39812 5.93922 9.52216 5.91524 9.63801 5.86792C9.75385 5.8206 9.85921 5.75089 9.94806 5.66276C10.0404 5.57756 10.1149 5.4749 10.1672 5.36073C10.2196 5.24657 10.2489 5.12315 10.2533 4.99761C10.2577 4.87207 10.2372 4.7469 10.193 4.62933C10.1488 4.51176 10.0817 4.40412 9.99559 4.31263Z" fill="black" />
        </svg>
      </button>
    </div>
  </div>
</template>
