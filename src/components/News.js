import Application from "./Application"
import React, {useState} from "react"
const News = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <main>
      <section className="news">
        <div className="container">
          <h2 className="news__title">Новости on-line</h2>

          <div className="news__content">
            <article className="article">
              <picture>
                <source srcset="./img/news-1.webp" type="image/webp" />
                <img src="./img/news-1.png" alt="Женщина за компьютером" loading="lazy" width="106" height="106" />
              </picture>

              <div className="article__description">
                <div className="article__description__data">27 апреля 2024</div>

                <a className="article__description__link" href="#">
                  <span>Интервью для РБК: как за 8 месяцев освоить самую востребованную профессию Аналитик данных</span>
                </a>

                <p className="article__description__text">
                  Любой компании нужны специалисты, которые умеют не просто собирать данные о продажах, но и выявлять закономерности, делать выводы на их основе и презентовать другим. Этим занимается аналитик данных.
                </p>
              </div>
            </article>

            <article className="article">
              <picture>
                <source srcset="./img/news-2.webp" type="image/webp" />
                <img src="./img/news-2.png" alt="Женщина за компьютером" loading="lazy" width="106" height="106" />
              </picture>

              <div className="article__description">
                <div className="article__description__data">15 марта 2024</div>

                <a className="article__description__link" href="#">
                  <span>Шахматный турнир, парк Швейцария</span>
                </a>

                <p className="article__description__text">
                  Дорогие друзья 08.03 и 14.03 Академия Будущего ХОД совместно с Региональным центром развитии талантов Вега при поддержке Шахматной Федерации Нижегородской области провели турнир по шахматам в парке Швейцария
                </p>
              </div>
            </article>

            <article className="article">
              <picture>
                <source srcset="./img/news-3.webp" type="image/webp" />
                <img src="./img/news-3.png" alt="Прихожая" loading="lazy" width="106" height="106" />
              </picture>

              <div className="article__description">
                <div className="article__description__data">09 февраля 2024</div>

                <a className="article__description__link" href="#">
                  <span>РБК и ХОД. Как войти в IT – пошаговая инструкция для детей и взрослых</span>
                </a>

                <p className="article__description__text">
                  Генеральный директор образовательной платформы Академия будущего ХОД Павел Ханин рассказал РБК, как формируются образовательные программы, объединяющие интересы детей, родителей и будущих работодателей.
                </p>
              </div>
            </article>

            <article className="article">
              <picture>
                <source srcset="./img/news-4.webp" type="image/webp" />
                <img src="./img/news-4.png" alt="учебный класс" loading="lazy" width="106" height="106" />
              </picture>

              <div className="article__description">
                <div className="article__description__data">17 июля 2023</div>

                <a className="article__description__link" href="#">
                  <span>Летние IT-каникулы для детей в Нижнем Новгороде!</span>
                </a>

                <p className="article__description__text">
                  Академия Будущего «ХОД» теперь открыла свои двери подрастающему поколению программистов, дизайнеров и юных блогеров в Нижнем Новгороде!
                </p>
              </div>
            </article>

            <article className="article">
              <picture>
                <source srcset="./img/news-5.webp" type="image/webp" />
                <img src="./img/news-5.png" alt="Ученики" loading="lazy" width="106" height="106" />
              </picture>

              <div className="article__description">
                <div className="article__description__data">22 июня 2023</div>

                <a className="article__description__link" href="#">
                  <span>IT - каникулы в Вышке!</span>
                </a>

                <p className="article__description__text">
                  НИУ ВШЭ - Нижний Новгород совместно с образовательной платформой ХОД Future Academy объявляет набор на программу "IT - каникулы".
                </p>
              </div>
            </article>

            <article className="article">
              <picture>
                <source srcset="./img/news-6.webp" type="image/webp" />
                <img src="./img/news-6.png" alt="Учебный процесс" loading="lazy" width="106" height="106" />
              </picture>

              <div className="article__description">
                <div className="article__description__data">02 июня 2023</div>

                <a className="article__description__link" href="#">
                  <span>Яркие, энергичные и талантливые: дзержинские участники конкурса «Большая перемена» проводят каникулы с пользой</span>
                </a>

                <p className="article__description__text">
                  Пока у большинства школьников идут долгожданные каникулы, у дзержинских победителей и финалистов конкурса «Большая перемена» в самом разгаре насыщенная культ-массовая программа. Для них городская администрация организовала в «Городе спорта» образовательные лекции, дискуссии и встречи с интересными людьми. Что больше всего оценили дети?
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Application isVisible={isModalVisible} onClose={closeModal} />
    </main>
  )
}
export default News