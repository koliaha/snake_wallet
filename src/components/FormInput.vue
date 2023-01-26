<template>
    <div>
        <div v-if="isSended">Success </div>
        <form v-else class="form_wrapper" @submit.prevent="send">
            <input class="form_input" v-model="wallet_input" type="text" placeholder="0x000000000000000000000000000000"
                required>
            <button  class="form_btn" type="submit">
                <img src="../assets/send.svg" alt="send">
            </button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'FormInput',
    data() {
        return {
            wallet_input: '',
            url: "https://sheetdb.io/api/v1/xdjeo5uo03fpw",
            isSended: false
        }
    },
    methods: {
        async send() {
            const walldata = {
                wallet: this.wallet_input
            }
            const data = JSON.stringify(walldata);
            const res = await fetch(this.url, {
                method: "POST",
                // mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            });
            this.isSended = res.ok
            console.log('res', res);
        }
    },

}
</script>
<style>
.form_wrapper {
    margin: 30px 0;
}

.form_input {
    width: 100%;
}

.form_btn {
    max-width: 50%;
    width: 100%;
    margin: 10px 0;
    background: none;
    border: none;
    outline: none;
}

.form_btn:hover {
    opacity: 0.8;
}
</style>