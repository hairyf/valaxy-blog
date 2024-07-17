<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const frontmatter = useFrontmatter()
const router = useRouter()
const meting = ref()

router.afterEach(() => {
  if (frontmatter.value.tags?.includes('music'))
    return
  setTimeout(() => meting.value?.aplayer?.play?.(), 500)
})

onMounted(() => {
  meting.value = document.querySelector('meting-js')
  if (frontmatter.value.tags?.includes('music'))
    return
  meting.value?.setAttribute('theme', 'var(--hy-c-primary)')
  meting.value?.setAttribute('autoplay', 'true')
})
</script>
