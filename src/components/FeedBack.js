const FeedBack = () => {
    return(
<section class="helper">
                <div class="container helper__container">
                    <div class="helper__wrapper">
                        <div class="helper-box helper-box__1">
                            <div class="helper-box__1__title">Помочь с выбором?</div>

                            <p class="helper-box__1__text">
                                Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы и подберут подходящий вариант обучения.
                            </p>
                        </div>
                        <div class="helper-box helper-box__2">
                            <form action="https://jsonplaceholder.typicode.com/posts" method="POST">
                                <div class="form-box">
                                    <input class="form-name" type="text" placeholder="Ваше имя" required />

                                    <input class="form-tel" type="tel" placeholder="Ваш телефон" required />

                                    <input class="form-email" type="email" placeholder="Ваш e-mail" required />
                                </div>

                                <div class="form__box-2">
                                    <p class="form__box-2__text">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и с правилами пользования Платформой</p>

                                    <button type="submit">Отправить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default FeedBack;