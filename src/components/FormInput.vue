<template>
    <div>
        <div v-if="isSended">Success </div>
        <form v-else class="form_wrapper" @submit.prevent="send">
            <input class="form_input" v-model="wallet_input" type="text" placeholder="0x000000000000000000000000000000"
                required>
            <button class="form_btn" type="submit">
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
            const score = localStorage.getItem("snakeScore") ?? 0
            const res = await fetch(this.url, {
                method: "POST",
                // mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: [
                        {
                            'data': this.formatDate(new Date()),
                            'wallet': this.wallet_input,
                            'count': score || 0
                        }
                    ]
                }),
            });
            this.isSended = res.ok
            console.log('res', res);
        },
        formatDate(date) {
            var dd = date.getDate();
            if (dd < 10) dd = '0' + dd;
            var mm = date.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
            var yy = date.getFullYear() % 100;
            if (yy < 10) yy = '0' + yy;
            return dd + '.' + mm + '.' + yy;
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