import React, { useEffect, useRef, useState } from 'react';

const Auth = ({ toggleModal, setIsAuthenticated, setUsernameHeader }) => {
    const modalRef = useRef(null);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');
        if (savedUsername && savedPassword) {
            setUsername(savedUsername);
            setPassword(savedPassword);
        }
    }, []);

    useEffect(() => {
        const modalElem = modalRef.current;
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        modalElem.style.display = 'block';
    }, []);

    const closeModal = () => {
        const modalElem = modalRef.current;
        modalElem.style.opacity = 0;
        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
            toggleModal();
        }, 300);
    };

    const handleLogin = (e) => {
        e.preventDefault();
    
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');
    
        if (username === savedUsername && password === savedPassword) {
            setIsAuthenticated(true);
            setUsernameHeader(username); // Передаем логин в Header
            alert('Вход выполнен!');
            closeModal();
        } else {
            setError('Неправильный логин или пароль');
        }
    };
    

    const handleRegister = (e) => {
        e.preventDefault();
    
        if (username && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Регистрация успешна!');
            setIsAuthenticated(true);
            setUsernameHeader(username); // Передаем логин в Header
            closeModal();
        } else {
            setError('Пожалуйста, заполните все поля');
        }
    };

    return (
        <div ref={modalRef} className="modal modal-1">
            <div className="modal__owl">
                <p>Войдите в систему или обратитесь к менеджеру учебной части, если у вас еще нет аккаунта</p>
                <img className="owl-2" src="./img/owl-2.svg" alt="#" />
                <img className="owl-1" src="./img/owl.svg" alt="Сова" />
            </div>

            <div className="modal__main">
                <h3 className="modal__title">{isLoginMode ? 'Вход' : 'Регистрация'}</h3>

                <form onSubmit={isLoginMode ? handleLogin : handleRegister}>
                    <label htmlFor="login">
                        <span>Логин</span>
                        <input
                            type="text"
                            id="login"
                            placeholder="Введите имя пользователя"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>

                    <label htmlFor="password">
                        <span>Пароль</span>
                        <input
                            type="password"
                            id="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>

                    {error && <div className="error">{error}</div>}

                    <div className="modal__toggle">
                        <p
                            onClick={() => setIsLoginMode(!isLoginMode)}
                            style={{ cursor: 'pointer', marginBottom: '10px' }}
                            className="toggle-link"
                        >
                            {isLoginMode ? 'Нет аккаунта? Зарегистрироваться' : 'Есть аккаунт? Войти'}
                        </p>
                    </div>
                    <button>{isLoginMode ? 'Войти' : 'Зарегистрироваться'}</button>
                </form>

                <button className="modal__close" onClick={closeModal}>×</button>
            </div>
        </div>
    );
};

export default Auth;
