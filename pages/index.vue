<template>
    <VContainer>
        <Timer />
    </VContainer>
</template>

<script lang="ts">
import Timer from '@/views/layouts/timer/index.vue';

export default defineComponent({
    components: {
        Timer,
    },
});
</script>