<template>
  <div>
    <SidebarSection>
      <ul>
        <SidebarNavItem label="Главная" iconName="home" is-active is-fill />
        <SidebarNavItem label="Навигатор" iconName="compass" />
        <SidebarNavItem label="Shorts" iconName="shorts" />
        <SidebarNavItem label="Подписки" iconName="subscribe" />
      </ul>
    </SidebarSection>

    <SidebarSection>
      <ul>
        <SidebarNavItem
          label="Библиотека"
          iconName="library"
          viewBox="0 0 218 218"
        />
        <SidebarNavItem label="История" iconName="history" />
        <SidebarNavItem label="Ваши видео" iconName="myVideo" is-fill />
        <SidebarNavItem
          label="Смотреть позже"
          iconName="time"
          viewBox="0 0 16 16"
          is-fill
        />
        <SidebarNavItem label="Понравившиеся" iconName="like" is-fill />
      </ul>
    </SidebarSection>

    <SidebarSection class="px-8 py-4 font-medium leading-5 border-b">
      <span class="text-sm">
        Вы сможете ставить отметки "Нравится", писать комментарии и
        подписываться на каналы.
      </span>
      <ButtonLogin />
    </SidebarSection>

    <SidebarSection>
      <SidebarSectionHeading title="навигатор" />
      <ul>
        <SidebarNavItem
          label="Музыка"
          iconName="music"
          is-fill
          is-black
          viewBox="0 0 20 20"
        />
        <SidebarNavItem
          label="Спорт"
          iconName="sport"
          is-fill
          is-black
          viewBox="0 0 20 20"
        />
        <SidebarNavItem
          label="Видеоигры"
          iconName="videoGames"
          is-fill
          is-black
          viewBox="0 -3 20 20"
        />
        <SidebarNavItem
          label="Фильмы"
          iconName="films"
          is-fill
          is-black
          viewBox="0 0 18 18"
        />
        <SidebarNavItem
          label="Трансляции"
          iconName="broadcast"
          is-fill
          is-black
          viewBox="0 0 18 18"
        />
        <SidebarNavItem
          label="В центре внимания"
          iconName="inCenter"
          is-fill
          is-black
          viewBox="-1 0 18 18"
        />
        <SidebarNavItem
          label="Панорамные видео"
          iconName="panoramicVideo"
          is-fill
          is-black
          viewBox="-1 0 18 18"
        />
      </ul>
    </SidebarSection>

    <SidebarSection>
      <ul>
        <SidebarNavItem
          label="Каталог каналов"
          iconName="plusCircle"
          is-fill
          viewBox="0 0 18 18"
        />
      </ul>
    </SidebarSection>

    <SidebarSection>
      <SidebarSectionHeading title="другие возможности" />
      <ul>
        <DropdownAppListItem title="YouTube Music">
          <BaseIcon name="play" class="w-4 h-4 text-white" isFill />
        </DropdownAppListItem>
        <DropdownAppListItem title="YouTube Детям">
          <BaseIcon name="children" class="w-4 h-4 text-white" isFill />
        </DropdownAppListItem>
        <DropdownAppListItem title="YouTube TV">
          <BaseIcon name="tv" class="w-4 h-4 text-white" isFill />
        </DropdownAppListItem>
      </ul>
    </SidebarSection>

    <SidebarSection>
      <ul>
        <SidebarNavItem label="Настройки" iconName="settings" is-fill />
        <SidebarNavItem
          label="Жалобы"
          iconName="complaint"
          is-fill
          view-box="-2 0 18 18"
        />
        <SidebarNavItem label="Справка" iconName="help" is-fill />
        <SidebarNavItem label="Отправить отзыв" iconName="reviews" is-fill />
      </ul>
    </SidebarSection>

    <TheFooter></TheFooter>
  </div>
</template>

<script>
import ButtonLogin from '~/components/ButtonLogin'
import BaseIcon from '~/components/BaseIcon'
import SidebarSectionHeading from '@/components/SidebarSectionHeading'
import SidebarNavItem from '@/components/SidebarNavItem'
import SidebarSection from '@/components/SidebarSection'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'SidebarContent',
  components: {
    ButtonLogin,
    BaseIcon,
    SidebarSectionHeading,
    SidebarNavItem,
    SidebarSection,
    TheFooter,
  },
}
</script>

<style scoped></style>
