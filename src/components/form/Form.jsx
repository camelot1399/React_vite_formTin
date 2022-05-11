import React, { useState } from "react";
import { Input } from "../common/input/input/Input";
import { InputWithChoise } from "../common/input/inputWithChoice/InputWithChoise";
import { Container } from "../container/Container";
import { Wrapper } from '../wrapper/Wrapper';
// @ts-ignore
import style from './form.module.scss';

export const Form = () => {
	const [errors, setErrors] = useState([]);
	const [categories, setCategories] = useState([
		{id: 1, name: '1% - Все покупки', img: 'all_products.png'},
		{id: 2, name: '5% - Аптеки', img: 'apteka.png'},
		{id: 3, name: '5% - Ozon.ru', img: 'ozon.png'},
		{id: 4, name: '3% - Пятерочка', img: 'pyateroxka.png'},
		{id: 5, name: '5% - Спорттовары', img: 'sportmaster.png'},
		{id: 6, name: '5% - Такси', img: 'taxi.png'},
		{id: 7, name: '5% - Рестораны', img: 'restorane.png'},
	])

	return (
		<Container>
			<div className={style.form}>
				<div className={style.form__left}>
					<Wrapper>
						<h4 className={style.form__label}>Заполните заявку за 5 минут</h4>
					</Wrapper>

					<InputWithChoise 
						categories={categories}
						setCategories={setCategories}
						label='Выберите повышенный кэшбэк (четыре категории)'
					/>

					<Input 
						label="Введите Имя и Фамилию"
					/>
				</div>
				<div className={style.form__right}>
					уже заполнено
				</div>
			</div>
		</Container>	
	);
};