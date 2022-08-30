<template>
  <div>
    <div class="flex justify-center items-center">
      <span
        v-show="isStatus('listening', 'recording')"
        :class="buttonAnimationClasses"
      ></span>
      <button :class="buttonClasses" @click="toggleRecording">
        <BaseIcon name="microphone" class="w-5 h-5" isFill></BaseIcon>
      </button>
    </div>
    <span :class="buttonHintClasses"
      >Переключитесь на микрофон и попробуйте снова</span
    >
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'

const STATUS_IDLE = 'idle'
const STATUS_LISTENING = 'listening'
const STATUS_RECORDING = 'recording'
const STATUS_QUIET = 'quiet'

export default {
  name: 'TheButtonSearchWithVoice',
  components: {
    BaseIcon,
  },
  data() {
    return {
      status: STATUS_LISTENING,
      recordingTimer: null,
    }
  },
  mounted() {
    this.handleRecordingTimeout()
  },
  beforeDestroy() {
    clearTimeout(this.recordingTimer)
  },
  methods: {
    toggleRecording() {
      clearTimeout(this.recordingTimer)

      this.updateStatus()

      this.handleRecordingTimeout()
    },
    handleRecordingTimeout() {
      if (this.isStatus(STATUS_LISTENING, STATUS_RECORDING)) {
        this.recordingTimer = setTimeout(() => {
          this.updateStatus(STATUS_QUIET)
        }, 5000)
      }
    },
    isStatus(...statuses) {
      return statuses.includes(this.status)
    },
    updateStatus(status) {
      if (status) {
        this.status = status
      } else if (this.isStatus(STATUS_RECORDING)) {
        this.status = STATUS_IDLE
      } else if (this.isStatus(STATUS_LISTENING)) {
        this.status = STATUS_RECORDING
      } else {
        this.status = STATUS_LISTENING
      }
    },
  },
  watch: {
    status: {
      handler() {
        let text = 'Микрофон выключен. Попробуйте снова.'

        if (this.isStatus(STATUS_QUIET)) {
          text = 'Вас не слышно. Попробуйте снова.'
        }

        if (this.isStatus(STATUS_LISTENING, STATUS_RECORDING)) {
          text = 'Прослушиваю...'
        }

        this.$emit('change-text', text)
      },
      immediate: true,
    },
  },

  computed: {
    buttonClasses() {
      return [
        this.isStatus(STATUS_LISTENING, STATUS_RECORDING)
          ? 'text-white'
          : 'text-black',
        this.isStatus(STATUS_LISTENING, STATUS_RECORDING)
          ? 'bg-red-600'
          : 'bg-gray-300',
        'w-16',
        'h-16',
        'mx-auto',
        'rounded-full',
        'flex',
        'justify-center',
        'items-center',
        'focus:outline-none',
        'z-10',
      ]
    },
    buttonHintClasses() {
      return [
        this.isStatus(STATUS_LISTENING, STATUS_RECORDING)
          ? 'invisible'
          : 'visible',
        'flex',
        'justify-center',
        'mt-4',
        'text-sm',
      ]
    },
    buttonAnimationClasses() {
      return [
        this.isStatus(STATUS_RECORDING)
          ? 'bg-gray-300'
          : 'border border-gray-300',
        'animate-ping',
        'absolute',
        'w-14',
        'h-14',
        'rounded-full',
      ]
    },
  },
}
</script>

<style scoped></style>
