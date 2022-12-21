import React from "react";
import './Team.css';

function Team() {

    return (
        <>
            <div class="about-us">
                <div class="container">
                    <div class="about-us__inner">
                        <h3 class="about-project">О проекте</h3>
                        <p class="about-project__text">Чем сознательнее человек, тем меньше он склонен к бессмысленному потреблению. Хочется присоединиться к движению медленной моды, но не знаете с чего начать?
                            Забудьте об об очередях в секондах и авито-доставке, теперь все нужное и ненужное прямо в общежитиях! Любой студент сможет подарить вторую жизнь любой вещи, которой  не
                                нашел
                                применения.
                                <p class="about-project__text">Для более быстрого поиска и продажи разнообразных вещей внутри общежитий
                                    предлагается использовать
                                    приложение "Станкин Доска", предоставляющее пользователям удобный интерфейс и необходимый
                                        функционал.
                                        Кроме
                                        того, расхламление позволяет получить немного денег, вседа нужных любому студенту.</p>
                        </p>
                        <h3 class="about-command">О команде</h3>
                        <div class="about-command__block">
                            <ul class="about-command__list">
                                <li class="about-command__item">
                                    <a class="profile-pic" href="#">
                                        <img src="https://olfil.github.io/img/ol3.jpg" alt="" width="100" 
                                            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    </a>
                                    <h2 class="person__name">
                                        Филатова Ольга
                                    </h2>
                                    <div class="person__info">
                                        <p class="person__group">
                                            ИДМ-22-08
                                        </p>
                                        <p id="SP" class="person__position" data-SP="Системное программирование">
                                            СП
                                        </p>
                                    </div>
                                </li>

                                <li class="about-command__item">
                                    <a class="profile-pic" href="#">
                                        <img src="https://olfil.github.io/img/jo3.jpg" alt="" width="100" 
                                            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    </a>
                                    <h2 class="person__name">
                                        Гиголо Мпена Жоэль Вианни
                                    </h2>
                                    <div class="person__info2">
                                        <p class="person__group">
                                            ИДМ-22-08
                                        </p>
                                        <div class="person__position-more">
                                            <p id="AD" class="person__position" data-AD="Администрирование (тюнинг)">
                                                АД
                                            </p>
                                            <p id="KO" class="person__position" data-KO="Консалтинг (обучение)">
                                                КО
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li class="about-command__item">
                                    <a class="profile-pic" href="#">
                                        <img src="https://olfil.github.io/img/ks3.jpg" alt="" width="100"
                                            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    </a>
                                    <h2 class="person__name">
                                        Заложкина Ксения
                                    </h2>
                                    <div class="person__info">
                                        <p class="person__group">
                                            ИДМ-22-08
                                        </p>
                                        <div class="person__position-more">
                                            <p id="VN" class="person__position" data-VN="Внедрение (продажи)">
                                                ВН
                                            </p>
                                            <p id="BA" class="person__position" data-BA="Бизнес-анализ">
                                                БА
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li class="about-command__item">

                                    <a class="profile-pic" href="#">
                                        <img src="https://olfil.github.io/img/mil3.jpg" alt="" width="100"
                                            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    </a>
                                    <h2 class="person__name">
                                        Шереужева Милана
                                    </h2>
                                    <div class="person__info">
                                        <p class="person__group">
                                            ИДМ-22-08
                                        </p>
                                        <div class="person__position-more">
                                            <p id="NI" class="person__position" data-NI="Научные исследования">
                                                НИ
                                            </p>
                                            <p id="UP" class="person__position" data-UP="Управление проектом">
                                                УП
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li class="about-command__item">
                                    <a class="profile-pic" href="#">
                                        <img src="https://olfil.github.io/img/me2.jpg" alt="" width="100"
                                            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    </a>
                                    <h2 class="person__name">
                                        Муллин Владимир
                                    </h2>
                                    <div class="person__info">
                                        <p class="person__group">
                                            ИДМ-22-03
                                        </p>
                                        <p id="PP" class="person__position" data-PP="Прикладное программирование">
                                            ПП
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Team;