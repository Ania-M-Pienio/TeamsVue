<template>
<main-container v-on:reload="onReload">
</main-container>        
</template>

<script>
import MainContainer from './MainContainer';
export default {
    name: 'AppBox',
    components: {
    MainContainer
    },    
}
</script>