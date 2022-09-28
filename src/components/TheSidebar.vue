<script setup lang="ts">
import { ref } from "vue";
import ButtonLogin from "./UI/ButtonLogin.vue";
import SidebarNavItem from "./UI/SidebarNavItem.vue";
import SidebarSectionHeading from "./UI/SidebarSectionHeading.vue";
import SidebarSelection from "./UI/SidebarSelection.vue";
import TheFooter from "./TheFooter.vue";

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
      <TheFooter />
    </SidebarSelection>
  </aside>
</template>
