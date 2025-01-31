import { Link } from "react-router-dom";
import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import FeedBack from "./FeedBack";
import Application from "./Application";
const Home = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    
        const openModal = () => setModalVisible(true);
        const closeModal = () => setModalVisible(false);
    return (
        <main>
            <section class="hero">
                <div class="hero__bg-1">
                    <div class="hero__bg-2">
                        <div class="hero__bg-3">
                            <div class="container">
                                <div class="hero__wrapper">
                                    <h1 class="hero__title"><span class="hero__title__margin">образовательная платформа</span> ХОД Future Academy</h1>

                                    <p>Актуальные знания для новичков и&nbsp;профессионалов</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="options">
                <div class="container">
                    <h2 class="options__title">Направления академии</h2>

                    <div class="tabs__container">
                        <div class="tab">
                            <button class="tablinks active" onclick="openCity(event, 'London')">
                                <img src="./img/options-children.svg" alt="Дети" />

                                <div class="tablinks__text">
                                    <div class="tablinks__text-1">Дети</div>

                                    <div class="tablinks__text-2">8 - 14 лет</div>
                                </div>
                            </button>

                            <button class="tablinks" onclick="openCity(event, 'Paris')">
                                <img src="./img/options-teenagers.svg" alt="Подростки" />

                                <div class="tablinks__text">
                                    <div class="tablinks__text-1">Подростки</div>

                                    <div class="tablinks__text-2">14 - 18 лет</div>
                                </div>
                            </button>
                        </div>

                        <div class="tab__content-wrapper">
                            <div id="London" class="tabcontent" style={{ display: 'flex' }}>
                                <a  class="tab__card tab__card tab__card_chess" onClick={openModal}>
                                    <div class="tab__card__text">Шахматы</div>

                                    <picture>
                                        <source srcset="./img/options-chess.webp" type="image/webp" />
                                        <img src="./img/options-chess.png" alt="Шахматы" loading="lazy" width="200" height="200" />
                                    </picture>
                                </a>

                                <a  class="tab__card tab__card_designer" onClick={openModal}>
                                    <div class="tab__card__text">Дизайн</div>

                                    <picture>
                                        <source srcset="./img/options-designer.webp" type="image/webp" />
                                        <img src="./img/options-designer.png" alt="Дизайн" loading="lazy" width="200" height="200" />
                                    </picture>
                                </a>

                                <a  class="tab__card tab__card_programmer" onClick={openModal}>
                                    <div class="tab__card__text">Программирование</div>

                                    <picture>
                                        <source srcset="./img/options-programmer.webp" type="image/webp" />
                                        <img src="./img/options-programmer.png" alt="Программирование" loading="lazy" width="200" height="200" />
                                    </picture>
                                </a>

                                <a  class="tab__card tab__card_english-language" onClick={openModal}>
                                    <div class="tab__card__text">Английский язык</div>

                                    <picture>
                                        <source srcset="./img/options-english-language.webp" type="image/webp" />
                                        <img src="./img/options-english-language.png" alt="Английский язык" loading="lazy" width="200" height="200" />
                                    </picture>
                                </a>
                            </div>

                            <div id="Paris" class="tabcontent">
                                <a href="#" class="tab__card tab__card_programmer">
                                    <div class="tab__card__text">Программирование</div>

                                    <picture>
                                        <source srcset="./img/options-programmer.webp" type="image/webp" />
                                        <img src="./img/options-programmer.png" alt="Программирование" loading="lazy" width="200" height="200" />
                                    </picture>
                                </a>

                                <a href="#" class="tab__card tab__card_data">
                                    <div class="tab__card__text">Аналитик данных</div>

                                    <picture>
                                        <source srcset="./img/options-data.webp" type="image/webp" />
                                        <img src="./img/options-data.png" alt="Аналитик данных" loading="lazy" width="200" height="200" />
                                    </picture>
                                </a>

                                <a href="#" class="tab__card tab__card_website">
                                    <div class="tab__card__text">Разработка сайтов</div>

                                    <picture>
                                        <source srcset="./img/options-website.webp" type="image/webp" />
                                        <img src="./img/options-website.png" alt="Разработка сайтов" loading="lazy" width="200" height="200" />
                                    </picture>
                                </a>

                                <a href="#" class="tab__card tab__card tab__card_chess">
                                    <div class="tab__card__text">Шахматы</div>

                                    <picture>
                                        <source srcset="./img/options-chess.webp" type="image/webp" />
                                        <img src="./img/options-chess.png" alt="Шахматы" loading="lazy" width="200" height="200" />
                                    </picture>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="about">
                <div class="contain__wrapper">

                    <img class="about__anime i1" src="./img/hero-figure-1.svg" alt="Анимация" />
                    <img class="about__anime i2" src="./img/hero-figure-2.svg" alt="Анимация" />
                    <img class="about__anime i3" src="./img/hero-figure-3.svg" alt="Анимация" />

                    <div class="container">
                        <div class="about__block">
                            <h2 class="about__title">Об академии</h2>

                            <p class="about__block__text-1">Актуальные знания от признанных экспертов рынка для новичков и практикующих специалистов.
                            </p>

                            <p class="about__block__text-2">Лицензия на осуществление образовательной деятельности №Л9999-9999-99/99999999 от&nbsp;02.02.2024 года</p>

                            <div class="about__numbers">
                                <div class="about__numbers__box">
                                    <div class="about__numbers__box__text">Более</div>

                                    <div class="about__numbers__box__num">70</div>

                                    <div class="about__numbers__box__text">программ</div>
                                </div>

                                <div class="about__numbers__box">
                                    <div class="about__numbers__box__text">Более</div>

                                    <div class="about__numbers__box__num">850</div>

                                    <div class="about__numbers__box__text">студентов</div>
                                </div>

                                <div class="about__numbers__box">
                                    <div class="about__numbers__box__text">Более</div>

                                    <div class="about__numbers__box__num">1100</div>

                                    <div class="about__numbers__box__text">защищенных проектов</div>
                                </div>
                            </div>

                            <Link to="/about" class="about__link" >Подробнее о нас</Link>
                        </div>

                        <div class="about__block">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/1Y5n0nu98Vg?si=tCYx7GeYM7Fyh_A4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section class="master-class">
                <div class="container master-class__container">
                    <div class="master-class__contain">
                        <div class="master-class__box master-class__box-1">
                            <h2 class="master-class__title">Мастер-класс для&nbsp;детей</h2>

                            <div class="master-class__subtitle">SculptGL - создание 3D-модели Roblox</div>

                            <div class="master-class__list-title">В программе урока:</div>

                            <ul>
                                <li>- Главные инструменты для создания 3D-персонажей.</li>
                                <li>- Как создать своего 3D-персонажа с нуля. Пошаговая инструкция.</li>
                                <li>- Технологии, которые нужно освоить, чтобы начать заниматься 3D-моделированием.</li>
                                <li>- Советы по созданию 3D-персонажей от профессионала.</li>
                                <li>- Практическое занятие по 3D-моделированию.</li>
                                <li>Дети узнают, что компьютер — это не только развлечения, а еще источник знаний и инструмент для творчества.</li>
                            </ul>

                            <p class="master-class__description">Ждём Вас и Вашего ребенка 15 мая в 16:30. Мастер-классы проходят с помощью дистанционной платформы. Особые навыки не требуются!</p>
                        </div>

                        <div class="master-class__box master-class__box-2">
                            <div class="master-class__data">
                                <div class="master-class__data__num">15</div>

                                <div class="master-class__data__month">мая</div>
                            </div>

                            <picture>
                                <source srcset="./img/master-class-img.webp" type="image/webp" />
                                <img src="./img/master-class-img.png" alt="Игра Роблокс" loading="lazy" width="423" height="280" />
                            </picture>

                            <button class="master-class__btn modal-btn-2" onClick={openModal} >Записаться</button>
                        </div>
                    </div>

                    <Application isVisible={isModalVisible} onClose={closeModal} />
                </div>
            </section>

            <section class="reviews">
                <div class="container reviews__container">
                    <h2 class="reviews__title">Отзывы наших студентов</h2>

                    <Swiper
                        modules={[Scrollbar]}
                        direction="horizontal"
                        speed={500}
                        spaceBetween={20}
                        scrollbar={{draggable:true}}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            600: { slidesPerView: 2 },
                            900: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                            1500: { slidesPerView: 5 },
                            1920: { slidesPerView: 7 },
                        }}  
                        class="swiper">

                        <div class="swiper-wrapper">

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-1.webp" type="image/webp" />
                                            <img src="./img/reviews-user-1.png" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Марина Кузнецова</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Программирование»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Онлайн IT школа предоставила мне глубокие знания в области программирования. Теперь я могу создавать собственные приложения! Учебный процесс в онлайн IT школе был настолько захватывающим, что я не замечал, как пролетали часы за изучением кода.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>4,87 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-2.webp" type="image/webp" />
                                            <img src="./img/reviews-user-2.png" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Ольга Петрова</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Аналитик данных»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Эта онлайн IT школа - настоящий прорыв в образовании! Качество материалов и подход преподавателей заслуживают высших похвал. Спасибо онлайн IT школе за их инновационную платформу обучения. Это был уникальный и плодотворный опыт.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>5 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-3.webp" type="image/webp" />
                                            <img src="./img/reviews-user-3.png" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Екатерина Васильева</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Разработка сайтов»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Онлайн IT школа помогла мне освоить сложные IT концепции в комфортной домашней обстановке, что было невероятно удобно.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>5 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-4.webp" type="image/webp" />
                                            <img src="./img/reviews-user-4.png" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Анна Павлова</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Разработка сайтов»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Прошла курс в онлайн IT школе и остался доволен. Материалы курса были актуальны, а задания - практичны. Онлайн IT школа дала мне ценные навыки, которые сразу же нашли применение в моей работе. Рекомендую!
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>4,98 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-5.webp" type="image/webp" />
                                            <img src="./img/reviews-user-5.png" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Юлия Сергеева</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Программирование»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Обучение в онлайн IT школе было насыщенным и информативным. Особенно ценю доступ к последним технологиям и методикам.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>4,5 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-6.webp" type="image/webp" />
                                            <img class="swiper-slide__box-img" src="./img/reviews-user-6.jpg" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Алексей Воронин</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Аналитик данных»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Онлайн IT школа изменила моё представление об образовании. Удобный доступ к материалам и поддержка преподавателей сделали обучение эффективным. Интерактивные задания и живое общение с наставниками в онлайн IT школе помогли мне быстро освоить сложные темы.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>4,8 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-7.webp" type="image/webp" />
                                            <img class="swiper-slide__box-img" src="./img/reviews-user-7.jpg" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Игорь Соловьёв</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Разработка сайтов»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Гибкость графика в онлайн IT школе позволила мне совмещать учёбу с работой, не теряя в качестве образования.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>5 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-8.webp" type="image/webp" />
                                            <img class="swiper-slide__box-img" src="./img/reviews-user-8.jpg" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Сергей Михайлов</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Программирование»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Курсы онлайн IT школы оказались очень практичными. Применяю полученные знания каждый день в своей работе. Благодаря онлайн IT школе, я смог переквалифицироваться и найти работу в IT, что было моей давней мечтой.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>4,9 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-9.webp" type="image/webp" />
                                            <img class="swiper-slide__box-img" src="./img/reviews-user-9.jpg" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Николай Жуков</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Программирование»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Профессиональные преподаватели и актуальные курсы - вот что делает эту онлайн IT школу стоящей инвестицией в будущее.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>4,9 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-10.webp" type="image/webp" />
                                            <img class="swiper-slide__box-img" src="./img/reviews-user-10.jpg" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Дмитрий Егоров</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Разработка сайтов»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Онлайн IT школа предоставила мне все необходимые инструменты для успешного старта в программировании. Система обучения в онлайн IT школе настолько гибкая, что я могла учиться в удобное для меня время и в комфортной обстановке.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>4,97 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-11.webp" type="image/webp" />
                                            <img class="swiper-slide__box-img" src="./img/reviews-user-11.jpg" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Егор Костин</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Аналитик данных»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        После окончания курсов в онлайн IT школе, я чувствую себя уверенно в своих знаниях и готова к сложным задачам.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>5 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-12.webp" type="image/webp" />
                                            <img class="swiper-slide__box-img" src="./img/reviews-user-12.jpg" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Артем Никифоров</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Аналитик данных»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        После окончания курсов в онлайн IT школе, я чувствую себя уверенно в своих знаниях и готова к сложным задачам. Сообщество студентов онлайн IT школы оказалось очень поддерживающим, что важно для обучения и профессионального роста.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>4,6 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-13.webp" type="image/webp" />
                                            <img class="swiper-slide__box-img" src="./img/reviews-user-13.jpg" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Леонид Брежнев</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Программирование»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Занимаясь в онлайн IT школе, я получил необходимые знания для старта карьеры в IT. Удобно, что можно учиться в любое время. Преподаватели школы всегда на связи, готовы помочь с любым вопросом. Материалы курса актуальны и понятны.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>5 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-14.webp" type="image/webp" />
                                            <img class="swiper-slide__box-img" src="./img/reviews-user-14.jpg" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Борис Ельцин</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Разработка сайтов»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Благодаря курсам этой школы, я освоил новый язык программирования и уже работаю над собственным проектом. Онлайн IT школа дала мне возможность обучаться без отрыва от работы. Гибкий график и практические задания очень помогли.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>4,8 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide class="swiper-slide">
                                <div class="swiper-slide__wrapper">
                                    <div class="swiper-slide__box">
                                        <picture>
                                            <source srcset="./img/reviews-user-15.webp" type="image/webp" />
                                            <img class="swiper-slide__box-img" src="./img/reviews-user-15.jpg" alt="фото студента" loading="lazy" width="60" height="60" />
                                        </picture>

                                        <div class="swiper-slide__box__user">
                                            <div class="swiper-slide__box__user__name">Александр Трубин</div>

                                            <div class="swiper-slide__box__user__course">Студент курса «Аналитик данных»</div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide__text">
                                        Школа предоставляет широкий спектр курсов, что позволяет выбрать именно то, что нужно для вашего развития. Интерактивные уроки и проекты на практике помогли мне лучше усвоить материал.
                                    </div>

                                    <div class="swiper-slide__grade">
                                        <img src="./img/reviews-star.svg" alt="звезда" />

                                        <span>4,8 / 5</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </div>

                        <div class="swiper-scrollbar"></div>
                    </Swiper>
                </div>
            </section>

            <FeedBack />
        </main>
    )
}
export default Home;