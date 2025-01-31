import React, {useState} from "react";

import FeedBack from "./FeedBack";
const About = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    return (
        <main>
            <section className="aboutUs">
                <div className="container">
                    <h2 className="aboutUs__title">Об академии</h2>

                    <article className="aboutUs__block">
                        <picture>
                            <source srcset="./img/aboutUs-1-1.webp" type="image/webp" />
                            <img src="./img/aboutUs-1-1.png" alt="Команда учителей" loading="lazy" width="636" height="491" />
                        </picture>

                        <div className="aboutUs__block__description">
                            <div className="aboutUs__block__description__subtitle">Команда профессионалов</div>

                            <p className="aboutUs__block__description__text">
                                Мы создали академию, чтобы каждый мог получить образование в любой точке мира. Наши программы основаны на уникальных методиках, а наши преподаватели — наставники, которые стремятся к достижению целей студентов.
                            </p>

                            <p className="aboutUs__block__description__text-2">Мы постоянно учимся, чтобы давать только актуальные знания.
                            </p>
                        </div>
                    </article>

                    <article className="aboutUs__block">
                        <div className="aboutUs__block__description">
                            <div className="aboutUs__block__description__subtitle">История развития</div>

                            <p className="aboutUs__block__description__text">
                                Несколько лет мы разрабатывали программы обучения с фокусом на возрастные и индивидуальные особенности учеников. Сегодня мы имеем
                            </p>

                            <p className="aboutUs__block__description__text-2">Сотрудничаем с ВШЭ, университетом Лобачевского, Академией Вассермана и МТС.
                            </p>
                        </div>

                        <picture className="article_picture-2">
                            <source srcset="./img/aboutUs-1-2.webp" type="image/webp" />
                            <img src="./img/aboutUs-1-2.png" alt="Команда учителей" loading="lazy" width="636" height="491" />
                        </picture>
                    </article>

                    <article className="aboutUs__block">
                        <picture>
                            <source srcset="./img/aboutUs-1-3.webp" type="image/webp" />
                            <img src="./img/aboutUs-1-3.png" alt="Команда учителей" loading="lazy" width="636" height="491" />
                        </picture>

                        <div className="aboutUs__block__description">
                            <div className="aboutUs__block__description__subtitle">Наша миссия</div>

                            <p className="aboutUs__block__description__text">
                                Детям помогаем в развитии и становлении личности, подросткам даем возможность получить реальный опыт и собрать портфолио, взрослым — начать новую карьеру или углубить свои знания. Обучаем с помощью новых технологий — геймификации, виртуальной и дополненной реальности, роботов, искусственного интеллекта.
                            </p>

                            <p className="aboutUs__block__description__text-2">Поэтому наша миссия – предоставлять современное образование в сфере IT для всех возрастов
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="approach">
                <div className="container">
                    <h2 className="approach__title">Подход к обучению</h2>

                    <div className="approach__flex">
                        <div className="approach__flex__card" data-aos="fade-up" data-aos-once="true">
                            <picture>
                                <source srcset="./img/approach-1.webp" type="image/webp" />
                                <img src="./img/approach-1.jpg" alt="Записная книжка" loading="lazy" width="186" height="160" />
                            </picture>

                            <div className="approach__flex__card__descriotion">
                                <div className="approach__flex__card__descriotion__title">Актуальные знания</div>

                                <p className="approach__flex__card__descriotion__text">и проверенные методики. Обновляем программы обучения каждый год и добавляем практические задания.</p>
                            </div>
                        </div>

                        <div className="approach__flex__card" data-aos="fade-up" data-aos-delay="150" data-aos-once="true">
                            <picture>
                                <source srcset="./img/approach-2.webp" type="image/webp" />
                                <img src="./img/approach-2.jpg" alt="Учитель" loading="lazy" width="186" height="160" />
                            </picture>

                            <div className="approach__flex__card__descriotion">
                                <div className="approach__flex__card__descriotion__title">Профессионализм педагогов.</div>

                                <p className="approach__flex__card__descriotion__text">Опыт более 10 лет и индивидуальный подход к каждому ученику.</p>
                            </div>
                        </div>
                    </div>

                    <div className="approach__flex approach__flex-2">
                        <div className="approach__flex__card" data-aos="fade-right" data-aos-delay="150" data-aos-once="true">
                            <picture>
                                <source srcset="./img/approach-3.webp" type="image/webp" />
                                <img src="./img/approach-3.jpg" alt="Чтение" loading="lazy" width="186" height="160" />
                            </picture>

                            <div className="approach__flex__card__descriotion">
                                <div className="approach__flex__card__descriotion__title">В основе — боли студента.</div>

                                <p className="approach__flex__card__descriotion__text">Составляем план обучения в соответствии с вашими запросами и интересами.</p>
                            </div>
                        </div>

                        <div className="approach__flex__card" data-aos="fade-up" data-aos-delay="250" data-aos-once="true">
                            <picture>
                                <source srcset="./img/approach-4.webp" type="image/webp" />
                                <img src="./img/approach-4.jpg" alt="Картинка" loading="lazy" width="186" height="160" />
                            </picture>

                            <div className="approach__flex__card__descriotion">
                                <div className="approach__flex__card__descriotion__title">Каждый достигнет результатов.</div>

                                <p className="approach__flex__card__descriotion__text">Мотивируем, консультируем и помогаем вам получить знания.</p>
                            </div>
                        </div>

                        <div className="approach__flex__card" data-aos="fade-left" data-aos-delay="350" data-aos-once="true">
                            <picture>
                                <source srcset="./img/approach-5.webp" type="image/webp" />
                                <img src="./img/approach-5.jpg" alt="Чтение" loading="lazy" width="186" height="160" />
                            </picture>

                            <div className="approach__flex__card__descriotion">
                                <div className="approach__flex__card__descriotion__title">Каждый достигнет результатов.</div>

                                <p className="approach__flex__card__descriotion__text">Мотивируем, консультируем и помогаем вам получить знания.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FeedBack />

        </main>
    )
}
export default About;