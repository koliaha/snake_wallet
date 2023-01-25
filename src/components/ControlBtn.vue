<template>
    <div class="controller">
        <div class="control-item">
            <button class="control_btn" id="btn_up">
                <img src="../assets/controls/up.svg" alt="controls">
            </button>
        </div>
        <div class="control-item item-second">
            <button class="control_btn" id="btn_left">
                <img src="../assets/controls/left.svg" alt="controls">
            </button>
            <button class="control_btn" id="btn_right">
                <img src="../assets/controls/right.svg" alt="controls">
            </button>
        </div>
        <div class="control-item">
            <button class="control_btn" id="btn_down">
                <img src="../assets/controls/down.svg" alt="controls">
            </button>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style>
.controller {}

.control-item {
    max-width: 215px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.item-second {
    justify-content: space-between;
}

.control_btn {
    width: 70px;
    background: none;
    border: none;
    outline: none;
}
</style>