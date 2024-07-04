<template>
  <div >sdhfks</div>
</template>

<script>
import user from '@/api/user.js'
export default {
    data() {
        return {
            userInfo: {}
        }
    },
    mounted() {
        this.getUserInfo()
    },
    methods: {
        getUserInfo() {
            user.getUserInfo().then(res => {
                this.userInfo = res.data
            })
        }
    },
}
</script>

<style>

</style>