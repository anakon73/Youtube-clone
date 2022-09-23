<script setup lang="ts">
import { ref } from "vue";
import ButtonLogin from "./UI/ButtonLogin.vue";
import SidebarNavItem from "./UI/SidebarNavItem.vue";
import SidebarSectionHeading from "./UI/SidebarSectionHeading.vue";
import SidebarSelection from "./UI/SidebarSelection.vue";

const SidebarItemList = ref([
  { label: "Home", icon: "home", isActive: true },
  { label: "Trending", icon: "fire", isActive: false },
  { label: "Subscriptions", icon: "collection", isActive: false },
]);
</script>

<template>
  <aside
    class="
      hidden
      xl:block
      w-64
      max-h-screen
      overflow-auto
      fixed
      top-0
      pt-12
      bg-white
      z-20
    "
  >
    <SidebarSelection>
      <SidebarNavItem label="Home" icon="home" is-active />
      <SidebarNavItem label="Trending" icon="fire" />
      <SidebarNavItem label="Subscriptions" icon="collection" />
    </SidebarSelection>
    <SidebarSelection>
      <SidebarNavItem label="Library" icon="duplicate" />
      <SidebarNavItem label="History" icon="clock"
    /></SidebarSelection>
    <section class="px-8 py-4 leading-5 border-b">
      <span class="text-sm font-medium">
        Sign in to like videos, comment, and subscribe.
      </span>
      <ButtonLogin class="mt-4">Sign In</ButtonLogin>
    </section>

    <SidebarSelection>
      <SidebarSectionHeading title="Best of YouTube" />
      <SidebarNavItem label="Music" icon="musicNote" />
      <SidebarNavItem label="Sports" icon="speakerphone" />
      <SidebarNavItem label="Gaming" icon="puzzle" />
      <SidebarNavItem label="Movies" icon="film" />
      <SidebarNavItem label="News" icon="newspaper" />
      <SidebarNavItem label="Live" icon="statusOnline" />
      <SidebarNavItem label="360&deg; Video" icon="eye"
    /></SidebarSelection>

    <SidebarSelection
      ><SidebarNavItem label="Browse channels" icon="plusCircle"
    /></SidebarSelection>

    <SidebarSelection>
      <SidebarSectionHeading title="More from YouTube" />
      <SidebarNavItem label="YouTube Premium" icon="play" />
      <SidebarNavItem label="Live" icon="statusOnline"
    /></SidebarSelection>

    <SidebarSelection>
      <SidebarNavItem label="Settings" icon="cog" />
      <SidebarNavItem label="Report history" icon="flag" />
      <SidebarNavItem label="Help" icon="questionMarkCircle" />
      <SidebarNavItem label="Send feedback" icon="annotation"
    /></SidebarSelection>
    <SidebarSelection class="px-6 py-4 text-xs font-semibold space-y-4">
      <div>
        <a href="#" class="mr-2">About</a>
        <a href="#" class="mr-2">Press</a>
        <a href="#" class="mr-2">Copyright</a>
        <a href="#" class="mr-2">Contact us</a>
        <a href="#" class="mr-2">Creators</a>
        <a href="#" class="mr-2">Advertise</a>
        <a href="#" class="mr-2">Developers</a>
      </div>
      <div class="mt-4">
        <a href="#" class="mr-2">Terms</a>
        <a href="#" class="mr-2">Privacy</a>
        <a href="#" class="mr-2">Policy & Safety</a>
        <a href="#" class="mr-2">How YouTube works</a>
        <a href="#" class="mr-2">Test new features</a>
      </div>
      <div class="mt-4 font-normal text-gray-500">&copy; 2022 Google LLC</div>
    </SidebarSelection>
  </aside>
</template>
