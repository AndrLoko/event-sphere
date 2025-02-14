import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");

    // Обновление состояния формы
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Валидация email
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Обработка регистрации
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.username.length < 3) {
            setMessage("Имя пользователя должно быть не менее 3 символов");
            return;
        }
        if (!validateEmail(formData.email)) {
            setMessage("Введите корректный Email");
            return;
        }
        if (formData.password.length < 6) {
            setMessage("Пароль должен быть не менее 6 символов");
            return;
        }

        // Сохранение данных в LocalStorage (эмуляция регистрации)
        localStorage.setItem("user", JSON.stringify(formData));
        setMessage("Регистрация успешна!");
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Имя пользователя"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Зарегистрироваться</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
