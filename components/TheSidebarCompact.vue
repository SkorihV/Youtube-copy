<template>
  <aside :class="classes">
    <ul>
      <SidebarCompactNavItem title="Главная" is-active>
        <BaseIcon
          name="home"
          class="w-6 h-6 mb-1.5"
          viewBox="0 0 20 20"
          is-fill
        />
      </SidebarCompactNavItem>
      <SidebarCompactNavItem title="Навигатор">
        <BaseIcon name="compass" class="w-6 h-6 mb-1.5" viewBox="0 0 16 16" />
      </SidebarCompactNavItem>

      <SidebarCompactNavItem title="Shorts">
        <BaseIcon name="shorts" class="w-6 h-6 mb-1.5" viewBox="0 0 16 16" />
      </SidebarCompactNavItem>
      <SidebarCompactNavItem title="Подписки">
        <BaseIcon name="subscribe" class="w-6 h-6 mb-1.5" viewBox="0 0 16 16" />
      </SidebarCompactNavItem>
      <SidebarCompactNavItem title="Библиотека">
        <BaseIcon name="library" class="w-6 h-6 mb-1.5" viewBox="0 0 250 250" />
      </SidebarCompactNavItem>

      <SidebarCompactNavItem title="История">
        <BaseIcon name="history" class="w-6 h-6 mb-1.5 text-gray-600" />
      </SidebarCompactNavItem>

      <SidebarCompactNavItem title="Ваши видео">
        <BaseIcon name="myVideo" class="w-6 h-6" viewBox="0 0 24 24" is-fill />
      </SidebarCompactNavItem>
      <SidebarCompactNavItem title="Смотреть позже">
        <BaseIcon name="time" class="w-6 h-6 mb-1.5" viewBox="0 0 16 16" />
      </SidebarCompactNavItem>
      <SidebarCompactNavItem title="Понравившиеся">
        <BaseIcon
          name="like"
          class="w-6 h-6 mb-1.5"
          viewBox="0 0 24 24"
          is-fill
        />
      </SidebarCompactNavItem>
    </ul>
  </aside>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'
import SidebarCompactNavItem from '@/components/SidebarCompactNavItem'

export default {
  name: 'TheSidebarCompact',
  components: {
    BaseIcon,
    SidebarCompactNavItem,
  },
  computed: {
    classes() {
      return [
        'min-h-screen',
        'overflow-x-auto',
        'w-20',
        'fixed',
        'pt-14',
        'bg-white',
        'z-20',
        'h-screen',
      ]
    },
  },
}
</script>

<style scoped></style>
