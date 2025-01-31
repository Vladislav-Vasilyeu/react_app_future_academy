import React, { useState } from 'react';

const Application = ({ isVisible, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [submitStatus, setSubmitStatus] = useState(null); // Для показа статуса отправки

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Простая валидация
        if (!formData.name || !formData.phone || !formData.email) {
            setSubmitStatus('Пожалуйста, заполните все обязательные поля.');
            return;
        }

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Ответ сервера:', data); // Лог для проверки
                setSubmitStatus('Заявка успешно отправлена!');
                setFormData({ name: '', phone: '', email: '', message: '' }); // Очистка формы
            } else {
                setSubmitStatus('Ошибка при отправке заявки.');
            }
        } catch (error) {
            setSubmitStatus('Ошибка сети. Попробуйте позже.');
            console.error('Ошибка при отправке:', error);
        }
    };

    return (
        <div
            className="modal--2"
            style={{
                display: isVisible ? 'flex' : 'none',
                visibility: isVisible ? 'visible' : 'hidden',
                opacity: isVisible ? 1 : 0,
            }}
        >
            <div className="modal-2">
                <h3 className="modal-2__title">Отправить заявку</h3>

                <div className="modal-2__box">
                    <picture>
                        <source srcSet="./img/modal-2.webp" type="image/webp" />
                        <img
                            src="./img/modal-2.png"
                            alt="Email"
                            loading="lazy"
                            width="562"
                            height="497"
                        />
                    </picture>

                    <form onSubmit={handleSubmit}>
                        <div className="form__grid">
                            <input
                                className="form-name"
                                type="text"
                                name="name"
                                placeholder="Ваше имя"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                className="form-tel"
                                type="tel"
                                name="phone"
                                placeholder="Ваш телефон"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                className="form-email"
                                type="email"
                                name="email"
                                placeholder="Ваш e-mail"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                className="form-text"
                                type="text"
                                name="message"
                                placeholder="Ваше сообщение"
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-box">
                            <p className="form-box__text">
                                Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и с правилами пользования Платформой
                            </p>
                            <button type="submit">Отправить</button>
                        </div>
                    </form>

                    {submitStatus && <p className="submit-status">{submitStatus}</p>}
                </div>

                <button className="modal__close" onClick={onClose}>
                    &#10006;
                </button>
            </div>
        </div>
    );
};

export default Application;
