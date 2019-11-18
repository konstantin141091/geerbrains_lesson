<template>
    <main>
        <div class="new_arrivals">
            <div class="block_show_top container">
                <p>New Arrivals </p>
                <div class="block_show_menu"> <a href="#" @click="getSelected(index)">Home</a>&nbsp;/ <a href="#" @click="getSelected(catalog)">Men</a>&nbsp;/ <a class="show_menu_activ" href="#">New Arrivals</a> </div>
            </div>
        </div>
        <div class="checkout container">
            <details class="checkout__details">
                <summary><span>01.</span>Shipping Adress</summary>
                <div class="details__container">
                    <div class="details__left">
                        <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <div class="control-group">
                            <label class="control control-radio"> checkout as&nbsp;guest
                                <input type="radio" name="radio" checked="checked" />
                                <div class="control_indicator"></div>
                            </label>
                            <label class="control control-radio"> register
                                <input type="radio" name="radio" />
                                <div class="control_indicator"></div>
                            </label>
                        </div>
                        <h3>register and save time!</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <p class="details__p">Fast and easy checkout</p>
                        <p class="details__p">Easy access to&nbsp;your order history and status</p>
                        <a href="#" class="checkout_button">Continue</a>
                    </div>
                    <div class="details__right">
                        <h3>Already registed?</h3>
                        <p class="details__p">Please log in&nbsp;below</p>
                        <form action="#" class="details__form">
                            <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                            <input type="email">
                            <p class="details__form__p">PASSWORD<span>*</span></p>
                            <input type="password">
                        </form>
                        <p class="details__righ__p">* Required Fileds</p>
                        <div class="button">
                            <a href="#" class="checkout_button">Log in</a>
                            <a href="#"><p>Forgot Password ?</p></a>
                        </div>
                    </div>
                </div>
            </details>
            <details class="checkout__details">
                <summary><span>02.</span>BILLING INFORMATION</summary>
                <div class="details__container">
                    <div class="details__left">
                        <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <div class="control-group">
                            <label class="control control-radio"> checkout as&nbsp;guest
                                <input type="radio" name="radio" checked="checked" />
                                <div class="control_indicator"></div>
                            </label>
                            <label class="control control-radio"> register
                                <input type="radio" name="radio" />
                                <div class="control_indicator"></div>
                            </label>
                        </div>
                        <h3>register and save time!</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <p class="details__p">Fast and easy checkout</p>
                        <p class="details__p">Easy access to&nbsp;your order history and status</p>
                        <a href="#" class="checkout_button">Continue</a>
                    </div>
                    <div class="details__right">
                        <h3>Already registed?</h3>
                        <p class="details__p">Please log in&nbsp;below</p>
                        <form action="#" class="details__form">
                            <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                            <input type="email">
                            <p class="details__form__p">PASSWORD<span>*</span></p>
                            <input type="password">
                        </form>
                        <p class="details__righ__p">* Required Fileds</p>
                        <div class="button">
                            <a href="#" class="checkout_button">Log in</a>
                            <a href="#"><p>Forgot Password ?</p></a>
                        </div>
                    </div>
                </div>
            </details>
            <details class="checkout__details">
                <summary><span>03.</span>SHIPPING INFORMATION</summary>
                <div class="details__container">
                    <div class="details__left">
                        <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <div class="control-group">
                            <label class="control control-radio"> checkout as&nbsp;guest
                                <input type="radio" name="radio" checked="checked" />
                                <div class="control_indicator"></div>
                            </label>
                            <label class="control control-radio"> register
                                <input type="radio" name="radio" />
                                <div class="control_indicator"></div>
                            </label>
                        </div>
                        <h3>register and save time!</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <p class="details__p">Fast and easy checkout</p>
                        <p class="details__p">Easy access to&nbsp;your order history and status</p>
                        <a href="#" class="checkout_button">Continue</a>
                    </div>
                    <div class="details__right">
                        <h3>Already registed?</h3>
                        <p class="details__p">Please log in&nbsp;below</p>
                        <form action="#" class="details__form">
                            <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                            <input type="email">
                            <p class="details__form__p">PASSWORD<span>*</span></p>
                            <input type="password">
                        </form>
                        <p class="details__righ__p">* Required Fileds</p>
                        <div class="button">
                            <a href="#" class="checkout_button">Log in</a>
                            <a href="#"><p>Forgot Password ?</p></a>
                        </div>
                    </div>
                </div>
            </details>
            <details class="checkout__details">
                <summary><span>04.</span>SHIPPING METHOD</summary>
                <div class="details__container">
                    <div class="details__left">
                        <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <div class="control-group">
                            <label class="control control-radio"> checkout as&nbsp;guest
                                <input type="radio" name="radio" checked="checked" />
                                <div class="control_indicator"></div>
                            </label>
                            <label class="control control-radio"> register
                                <input type="radio" name="radio" />
                                <div class="control_indicator"></div>
                            </label>
                        </div>
                        <h3>register and save time!</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <p class="details__p">Fast and easy checkout</p>
                        <p class="details__p">Easy access to&nbsp;your order history and status</p>
                        <a href="#" class="checkout_button">Continue</a>
                    </div>
                    <div class="details__right">
                        <h3>Already registed?</h3>
                        <p class="details__p">Please log in&nbsp;below</p>
                        <form action="#" class="details__form">
                            <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                            <input type="email">
                            <p class="details__form__p">PASSWORD<span>*</span></p>
                            <input type="password">
                        </form>
                        <p class="details__righ__p">* Required Fileds</p>
                        <div class="button">
                            <a href="#" class="checkout_button">Log in</a>
                            <a href="#"><p>Forgot Password ?</p></a>
                        </div>
                    </div>
                </div>
            </details>
            <details class="checkout__details">
                <summary><span>05.</span>PAYMENT METHOD</summary>
                <div class="details__container">
                    <div class="details__left">
                        <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <div class="control-group">
                            <label class="control control-radio"> checkout as&nbsp;guest
                                <input type="radio" name="radio" checked="checked" />
                                <div class="control_indicator"></div>
                            </label>
                            <label class="control control-radio"> register
                                <input type="radio" name="radio" />
                                <div class="control_indicator"></div>
                            </label>
                        </div>
                        <h3>register and save time!</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <p class="details__p">Fast and easy checkout</p>
                        <p class="details__p">Easy access to&nbsp;your order history and status</p>
                        <a href="#" class="checkout_button">Continue</a>
                    </div>
                    <div class="details__right">
                        <h3>Already registed?</h3>
                        <p class="details__p">Please log in&nbsp;below</p>
                        <form action="#" class="details__form">
                            <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                            <input type="email">
                            <p class="details__form__p">PASSWORD<span>*</span></p>
                            <input type="password">
                        </form>
                        <p class="details__righ__p">* Required Fileds</p>
                        <div class="button">
                            <a href="#" class="checkout_button">Log in</a>
                            <a href="#"><p>Forgot Password ?</p></a>
                        </div>
                    </div>
                </div>
            </details>
            <details class="checkout__details">
                <summary><span>06.</span>ORDER REVIEW</summary>
                <div class="details__container">
                    <div class="details__left">
                        <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <div class="control-group">
                            <label class="control control-radio"> checkout as&nbsp;guest
                                <input type="radio" name="radio" checked="checked" />
                                <div class="control_indicator"></div>
                            </label>
                            <label class="control control-radio"> register
                                <input type="radio" name="radio" />
                                <div class="control_indicator"></div>
                            </label>
                        </div>
                        <h3>register and save time!</h3>
                        <p class="details__p">Register with&nbsp;us for future convenience</p>
                        <p class="details__p">Fast and easy checkout</p>
                        <p class="details__p">Easy access to&nbsp;your order history and status</p>
                        <a href="#" class="checkout_button">Continue</a>
                    </div>
                    <div class="details__right">
                        <h3>Already registed?</h3>
                        <p class="details__p">Please log in&nbsp;below</p>
                        <form action="#" class="details__form">
                            <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                            <input type="email">
                            <p class="details__form__p">PASSWORD<span>*</span></p>
                            <input type="password">
                        </form>
                        <p class="details__righ__p">* Required Fileds</p>
                        <div class="button">
                            <a href="#" class="checkout_button">Log in</a>
                            <a href="#"><p>Forgot Password ?</p></a>
                        </div>
                    </div>
                </div>
            </details>

        </div>
    </main>
</template>

<script>
    export default {
        name: "CheckoutContent"
    }
</script>

<style scoped>
    .checkout__details summary {
        color: #222222;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        outline: none;
    }
    .checkout__details summary:hover {
        color: #f16d7f;
    }
    .checkout__details summary span {
        margin-right: 7px;
    }
    details summary::-webkit-details-marker {
        display: none;
    }
    .checkout__details h3 {
        color: #222222;
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
    .details__p {
        color: #b3b2b2;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
    }
    .checkout__details p:nth-child(6) {
        margin-top: 28px;
    }
    .checkout__details {
        border-bottom: solid 1px #e8e8e8;
        padding-bottom: 31px;
        margin-top: 29px;
    }
    .details__left {
        margin-left: 35px;
        margin-bottom: 48px;
    }
    .control {
        display: block;
        position: relative;
        padding-left: 27px;
        margin-bottom: 14px;
        padding-top: 0px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
    }
    .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .control_indicator {
        position: absolute;
        top: 2px;
        left: 0;
        height: 10px;
        width: 10px;
        background: #ffffff;
        border: 2px solid #000000;
    }
    .control-radio .control_indicator {
        border-radius: 50%;
    }
    .control:hover input ~ .control_indicator,
    .control input:focus ~ .control_indicator {
        background: #ffffff;
    }
    .control input:checked ~ .control_indicator {
        background: #ffffff;
    }
    .control input:disabled ~ .control_indicator {
        background: #555555;
        opacity: 0.6;
        pointer-events: none;
    }
    .control_indicator:after {
        box-sizing: unset;
        content: '';
        position: absolute;
        display: none;
    }
    .control input:checked ~ .control_indicator:after {
        display: block;
    }
    .control-radio .control_indicator:after {
        left: 2px;
        top: 2px;
        height: 6px;
        width: 6px;
        border-radius: 50%;
        background: #000000;
    }
    .control-radio input:disabled ~ .control_indicator:after {
        background: #7b7b7b;
    }
    .checkout_button {
        margin-top: 33px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 178px;
        height: 48px;
        border: 1px solid #eaeaea;
        background-color: #ffffff;
        text-decoration: none;
        color: #4a4a4a;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        transition: 0.5s;
    }
    .checkout_button:hover {
        border: 1px solid #f16d7f;
        color: #f16d7f;
        transform: scale(1.1);
    }
    .control-group {
        margin-top: 28px;
        margin-bottom: 24px;
    }
    .checkout {
        padding-top: 58px;
        padding-bottom: 93px;
    }
    .details__form__p {
        color: #222222;
        font-family: Lato;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        text-transform: uppercase;
    }
    .details__form span {
        color: #ff0d0d;
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
    }
    .details__container {
        display: flex;
        justify-content: space-between;
        margin-top: 39px;
    }
    .details__form input {
        width: 390px;
        height: 43px;
        border: 1px solid #eaeaea;
        background-color: #ffffff;
        outline: none;
        padding: 0 10px;
        margin-top: 9px;
        margin-bottom: 14px;
    }
    .details__righ__p {
        color: #ff0d0d;
        font-size: 13px;
        font-weight: 400;
    }
    .button p {
        color: #222222;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        margin-top: 30px;
        margin-left: 32px;
    }
    .button p:hover {
        color: #f16d7f;
    }
    .button {
        display: flex;
        align-items: center;
        margin-top: -3px;
    }
    .details__form {
        margin-top: 13px;
    }
</style>