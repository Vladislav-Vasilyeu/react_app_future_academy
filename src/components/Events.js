import React, {useState} from "react";
import Application from "./Application";
import FeedBack from "./FeedBack";
const Events = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    return (
        <main>
            <div className="container events__container">
                <h2 className="events__title">Мероприятия on&#8209;line</h2>
            </div>
            <Application isVisible={isModalVisible} onClose={closeModal} />
            <article className="events master-class">
                <div className="container master-class__container">
                    <div className="master-class__contain">
                        <div className="master-class__box master-class__box-1">
                            <h2 className="master-class__title">Мастер-класс для&nbsp;взрослых</h2>

                            <div className="master-class__subtitle">Основы веб-дизайна на Tilda</div>

                            <div className="master-class__list-title">В программе урока:</div>

                            <ul>
                                <li>- Основные секреты работы в Tilda</li>
                                <li>- Технологии, которые нужно освоить, чтобы cоздать свой первый сайт в Tilda</li>
                                <li>- Создание собственной дизайн-страницы.</li>
                                <li>На мастер-классе вы попробуете себя в новой профессии, познакомитесь с преподавателем курса и создадите свой первый проект!</li>
                            </ul>

                            <p className="master-class__description">Ждём Вас 25 мая в 18:30. Мастер-классы проходят с помощью дистанционной платформы. Особые навыки не требуются!</p>
                        </div>

                        <div className="master-class__box master-class__box-2">
                            <div className="master-class__data">
                                <div className="master-class__data__num">25</div>

                                <div className="master-class__data__month">мая</div>
                            </div>

                            <picture>
                                <source srcset="./img/events-tilda.webp" type="image/webp" />
                                <img src="./img/events-tilda.png" alt="Тильда" loading="lazy" width="420" height="418" />
                            </picture>

                            <button className="master-class__btn modal-btn-2" onClick={openModal}>Записаться</button>
                        </div>
                    </div>

                    
                </div>
            </article>

            <article className="events master-class">
                <div className="container master-class__container">
                    <div className="master-class__contain">
                        <div className="master-class__box master-class__box-1">
                            <h2 className="master-class__title">Мастер-класс для&nbsp;взрослых</h2>

                            <div className="master-class__subtitle">Создание чат-бота на Python</div>

                            <div className="master-class__list-title">В программе урока:</div>

                            <ul>
                                <li>- Основные секреты программирования на Python</li>
                                <li>- Технологии, которые нужно освоить, чтобы разработать чат-бот</li>
                                <li>- Создание собственного чат-бота.</li>
                                <li>На мастер-классе вы попробуете себя в новой профессии, познакомитесь с преподавателем курса и создадите свой первый проект!</li>
                            </ul>

                            <p className="master-class__description">Ждём Вас 26 мая в 19:00. Мастер-классы проходят с помощью дистанционной платформы. Особые навыки не требуются!</p>
                        </div>

                        <div className="master-class__box master-class__box-2">
                            <div className="master-class__data">
                                <div className="master-class__data__num">26</div>

                                <div className="master-class__data__month">мая</div>
                            </div>

                            <picture>
                                <source srcset="./img/events-python.webp" type="image/webp" />
                                <img src="./img/events-python.png" alt="Тильда" loading="lazy" width="430" height="430" />
                            </picture>

                            <button className="master-class__btn modal-btn-2" onClick={openModal}>Записаться</button>
                        </div>
                    </div>
                </div>
            </article>

            <article className="events master-class">
                <div className="container master-class__container">
                    <div className="master-class__contain">
                        <div className="master-class__box master-class__box-1">
                            <h2 className="master-class__title">Мастер-класс для&nbsp;детей</h2>

                            <div className="master-class__subtitle">Создание игры "Кошки-мышки" Scratch Online</div>

                            <div className="master-class__list-title">В программе урока:</div>

                            <ul>
                                <li>- Основные секреты программирования на PythonОсновные секреты программирования компьютерных игр</li>
                                <li>- Технологии, которые нужно освоить, чтобы разработать свою игру</li>
                                <li>- Создание собственной компьютерной игры.</li>
                                <li>Дети узнают, что компьютер — это не только развлечения, а еще источник знаний и инструмент для творчества.</li>
                            </ul>

                            <p className="master-class__description">Ждём Вас и Вашего ребенка 27 мая в 18:30. Мастер-классы проходят с помощью дистанционной платформы. Особые навыки не требуются!</p>
                        </div>

                        <div className="master-class__box master-class__box-2">
                            <div className="master-class__data">
                                <div className="master-class__data__num">27</div>

                                <div className="master-class__data__month">мая</div>
                            </div>

                            <picture>
                                <source srcset="./img/events-scratch.webp" type="image/webp" />
                                <img src="./img/events-python.png" alt="Тильда" loading="lazy" width="450" height="422" />
                            </picture>

                            <button className="master-class__btn modal-btn-2" onClick={openModal}>Записаться</button>
                        </div>
                    </div>
                </div>
            </article>

            <FeedBack/>
        </main>
    )
}
export default Events;