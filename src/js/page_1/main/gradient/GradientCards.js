import React from 'react';
import styles from './GradientCards.module.css'

const GradientCards = () => {
    return (
        <>
            <section className={styles.box}>
                <div className={styles.card1}>
                    <div className={styles.cardInsideBox}>
                        <h4>
                            V12
                        </h4>
                        <p>
                            Поршневой двигатель внутреннего сгорания с 12 цилиндрами
                        </p>
                        <button className={styles.button}>
                            <a>
                                Показать
                            </a>
                        </button>
                    </div>
                </div>
                <div className={styles.card2}>
                    <div className={styles.cardInsideBox}>
                        <h4>
                            Turboback
                        </h4>
                        <p>
                            Группа элементов выхлопной системы, находящаяся после турбины двигателя
                        </p>
                        <button className={styles.button}>
                            <a>
                                Показать
                            </a>
                        </button>
                    </div>
                </div>
                <div className={styles.card3}>
                    <div className={styles.cardInsideBox}>
                        <h4>
                            Slick
                        </h4>
                        <p>
                            Абсолютно гладкая шина, не имеющая ни канавок , ни иных элементов, уменьшающих пятно контакта с трассой
                        </p>
                        <button className={styles.button}>
                            <a>
                                Показать
                            </a>
                        </button>
                    </div>
                </div>
            </section>
            <div className={styles.dinamycBorderBox}>
                <div className={styles.item}>
                    <div className={styles.itemContent}>
                        <h2>
                            Двигатели
                        </h2>
                        <p>
                            Дви́гатель — устройство, преобразующее какой-либо вид энергии в механическую работу. Термин мотор заимствован в первой половине XIX века из немецкого языка[1] (нем. Motor — «двигатель», от лат. mōtor — «приводящий в движение») и преимущественно им называют электрические двигатели и двигатели внутреннего сгорания[2].<br/><br/>
                            Двигатели подразделяют на первичные и вторичные. К первичным относят непосредственно преобразующие природные энергетические ресурсы в механическую работу, а ко вторичным — преобразующие энергию, выработанную или накопленную другими источниками[3].
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemContent}>
                        <h2>
                            Компрессоры
                        </h2>
                        <p>
                            Компрессор имеет входную камеру, рабочую полость и выходную камеру. Газ из входного патрубка попадает в рабочую полость, в которой происходит повышение давления газа за счет совершения над ним работы, затем выводится в выходную камеру и попадает в выходной патрубок. К выходному патрубку присоединена сеть, на которую работает компрессор. К компрессору подводится механическая энергия, которая используется для повышения давления газа за счёт взаимодействия последнего с подвижной частью компрессора.
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemContent}>
                        <h2>
                            Запчасти
                        </h2>
                        <p>
                            Запасная часть (сокр. запчасть) — изделие, деталь, являющееся составной частью более крупного (составного) изделия, предназначенная для замены находившейся в эксплуатации такой же части с целью ремонта (поддержания или восстановления исправного или работоспособного состояния изделия). Используется преимущественно в контексте техники[1] (машин (автомобиля, трактора), механизмов, приборов и т. п.).
                        </p>
                    </div>
                </div>
                <div className={styles.blur}></div>
            </div>
        </>
    );
};

export default GradientCards;