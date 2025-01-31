import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';

const Header = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [isSubAccordionOpen, setSubAccordionOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [username, setUsername] = useState(''); // Для хранения логина пользователя
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Ссылки на элементы аккордеонов
  const accordionRef = useRef(null);
  const subAccordionRef = useRef(null);

  const toggleAccordion = () => {
    const accordionContent = accordionRef.current;
    const subAccordionContent = subAccordionRef.current;

    // Устанавливаем высоту контента аккордеона
    if (isAccordionOpen) {
      accordionContent.style.maxHeight = null;
      if (subAccordionContent) subAccordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight =  "260px";
      if (subAccordionContent) {
        subAccordionContent.style.maxHeight = subAccordionContent.scrollHeight+100 + "px";
      }
    }

    setAccordionOpen(!isAccordionOpen);
  };

  const toggleSubAccordion = () => {
    const subAccordionContent = subAccordionRef.current;
    
    // Устанавливаем высоту контента под-аккордеона
    if (isSubAccordionOpen) {
      subAccordionContent.style.maxHeight = null;
    } else {
      subAccordionContent.style.maxHeight = subAccordionContent.scrollHeight+"100" + "px";
    }

    setSubAccordionOpen(!isSubAccordionOpen);
  };

  const toggleModal = () => setModalOpen(!isModalOpen);
  const toggleBurger = () => setBurgerOpen(!isBurgerOpen);

  const handleLogin = (username) => {
    setUsername(username);
    setIsAuthenticated(true);
    setModalOpen(false); // Закрываем модальное окно после входа
  };
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <svg width="90" height="64">
            <use href="./img/sprite.svg#logo"></use>
          </svg>
        </Link>

        <nav className="header__menu">
          <ul className="header__list" id="menu">
            <li className="header__item header__item-1">
              <div className="accordion-1 active">
                <div className="accordion-1__item">
                  <div className="accordion-1__header" onClick={toggleAccordion}>
                    <svg className="accordion-arrow" width="8" height="4">
                      <use href="/img/sprite.svg#arrow-bot"></use>
                    </svg>
                    <span>Все курсы</span>
                  </div>

                  <div ref={accordionRef} className="accordion-1__content">
                    <li>
                      <div className="accordion-2">
                        <div className={`accordion-2__item ${isSubAccordionOpen ? 'active' : ''}`}>
                          <div className="accordion-2__header" onClick={toggleSubAccordion}>
                            <svg className="accordion-2-arrow" width="8" height="4">
                              <use href="./img/sprite.svg#arrow-bot"></use>
                            </svg>
                            Дети
                          </div>

                          <div ref={subAccordionRef} className="accordion-2__content">
                            <ul>
                              <li><a href="#">Шахматы</a></li>
                              <li><a href="#">Дизайнер</a></li>
                              <li><a href="#">Программист</a></li>
                              <li><a href="#">Английский язык</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="accordion-2">
                        <div className={`accordion-2__item ${isSubAccordionOpen ? 'active' : ''}`}>
                          <div className="accordion-2__header" onClick={toggleSubAccordion}>
                            <svg className="accordion-2-arrow" width="8" height="4">
                              <use href="./img/sprite.svg#arrow-bot"></use>
                            </svg>
                            Подростки и взрослые
                          </div>

                          <div ref={subAccordionRef} className="accordion-2__content">
                            <ul>
                              <li><a href="#">Шахматы</a></li>
                              <li><a href="#">Аналитик данных</a></li>
                              <li><a href="#">Программист</a></li>
                              <li><a href="#">Разработка сайтов</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </li>

            <li className="header__item">
              <Link to="/events">Мероприятия</Link>
            </li>

            <li className="header__item">
              <Link to="/about">Об академии</Link>
            </li>

            <li className="header__item">
              <Link to="/news">Новости</Link>
            </li>

            <li className="header__item header__item-2">
              <div className="accordion-2 accordion-2_3">
                <div className="accordion-2__item">
                  <div className="accordion-2__header">
                    <svg className="accordion-2-location" width="17" height="20">
                      <path d="M16 8.5C16 11.3282 14.13 13.9545 12.0535 15.9699C11.036 16.9575 10.0146 17.754 9.24613 18.304C8.95504 18.5123 8.70155 18.6843 8.5 18.8171C8.29845 18.6843 8.04496 18.5123 7.75387 18.304C6.98537 17.754 5.96395 16.9575 4.94648 15.9699C2.86999 13.9545 1 11.3282 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" stroke="#00093C" strokeWidth="2"/>
                      <circle cx="8.5" cy="7.5" r="2.5" fill="#00093C"/>
                    </svg>
                    <span>Online</span>
                    <svg className="accordion-2-arrow" width="8" height="4">
                      <use href="./img/sprite.svg#arrow-bot"></use>
                    </svg>
                  </div>
                  <div className="accordion-2__content">
                    <div className="accordion-2__content__wrapper">
                      <p>Где планируете учиться?</p>

                      <form action="https://jsonplaceholder.typicode.com/posts" method="POST">
                        <fieldset>
                          <input type="radio" id="cityonline" name="city" value="online" checked/>
                          <label htmlFor="cityonline">Online</label>
                        </fieldset>
                        
                        <fieldset>
                          <input type="radio" id="cityMoscow" name="city" value="Moscow"/>
                          <label htmlFor="cityMoscow">Москва</label>
                        </fieldset>
                        
                        <fieldset>
                          <input type="radio" id="cityEkaterinburg" name="city" value="Ekaterinburg"/>
                          <label htmlFor="cityEkaterinburg">Екатеринбург</label> 
                        </fieldset>
                        
                        <fieldset>
                          <input type="radio" id="cityChelyabinsk" name="city" value="Chelyabinsk"/>
                          <label htmlFor="cityChelyabinsk">Челябинск</label>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="header__item">
              <a className="header__item__link" href="tel:8 800 950-33-98">8 800 950-33-98</a>
            </li>

            <li className="header__item">
              {isAuthenticated ? (
                <span>{username}</span> // Если авторизован, показываем логин
              ) : (
                <a className="header__item__link modal-btn-1" href="#" onClick={toggleModal}>Войти</a>
              )}
            </li>
          </ul>
        </nav>
        
        <div className="header__burger" id="burger" onClick={toggleBurger}>
          <span></span><span></span><span></span>
        </div>
      </div>
      {isModalOpen && <Auth toggleModal={toggleModal} setIsAuthenticated={setIsAuthenticated} setUsernameHeader={handleLogin} />}
    </header>
  );
};

export default Header;
