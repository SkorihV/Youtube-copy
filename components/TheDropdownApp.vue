<template>
  <div
    class="opacity-0 group-hover:opacity-100 absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0"
  >
    <section class="py-2 border-b">
      <ul>
        <DropdownAppListItem title="Главная">
          <BaseIcon name="home" class="w-4 h-4 text-white" isFill />
        </DropdownAppListItem>
      </ul>
    </section>
    <section class="py-2">
      <ul>
        <DropdownAppListItem title="YouTube Music">
          <BaseIcon name="play" class="w-4 h-4 text-white" isFill />
        </DropdownAppListItem>
        <DropdownAppListItem title="YouTube Детям">
          <BaseIcon name="children" class="w-4 h-4 text-white" isFill />
        </DropdownAppListItem>
        <DropdownAppListItem title="YouTube Детям">
          <BaseIcon name="tv" class="w-4 h-4 text-white" isFill />
        </DropdownAppListItem>
      </ul>
    </section>
  </div>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'
import DropdownAppListItem from '~/components/DropdownAppListItem'

export default {
  name: 'TheDropdownApp',
  components: {
    BaseIcon,
    DropdownAppListItem,
  },
}
</script>

<style scoped></style>
