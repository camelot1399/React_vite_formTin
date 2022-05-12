import React, { useEffect, useState } from "react";
import { regexpIsEmail, regexpisValidMobile, regexpIsValidSymbols } from "../../../tools/regexp";
import { Input } from "../common/input/input/Input";
import { InputWithChoise } from "../common/input/inputWithChoice/InputWithChoise";
import { Container } from "../container/Container";
import { Wrapper } from '../wrapper/Wrapper';
// @ts-ignore
import style from './form.module.scss';

export const Form = () => {
	const [errors, setErrors] = useState(new Map());
	const [categories, setCategories] = useState([
		{id: 1, name: '1% - Все покупки', img: 'all_products.png'},
		{id: 2, name: '5% - Аптеки', img: 'apteka.png'},
		{id: 3, name: '5% - Ozon.ru', img: 'ozon.png'},
		{id: 4, name: '3% - Пятерочка', img: 'pyateroxka.png'},
		{id: 5, name: '5% - Спорттовары', img: 'sportmaster.png'},
		{id: 6, name: '5% - Такси', img: 'taxi.png'},
		{id: 7, name: '5% - Рестораны', img: 'restorane.png'},
	])

	const errorsMessages = {
		fieldDoNotEmpty: 'Поле обязательно для заполнения',
		someErrorText: 'Ошибка ввода текста'
	}

	const addError = ({name, msg}) => {
		setErrors(new Map([
			...errors,
			[name, errorsMessages[msg]]
		]));
	}

	const removeError = (payload) => {
		console.log('removeError', payload);
		const newErrors = new Map(errors);
		newErrors.delete(payload);
		setErrors(newErrors);
	}

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
						label="Введите Имя"
						name="lastName"
						setErrors={setErrors}
						hasError={errors.has('lastName') ? true : false}
						errors={errors}
						percentFillability="20"
						regexp={regexpIsValidSymbols}
						addError={addError}
						removeError={removeError}
					/>

					<Input 
						label="Введите Фамилию"
						name="firstName"
						setErrors={setErrors}
						hasError={errors.has('firstName') ? true : false}
						errors={errors}
						percentFillability="20"
						regexp={regexpIsValidSymbols}
						addError={addError}
						removeError={removeError}
					/>

					<div className="row">
						<Input 
							label="Мобильный телефон"
							name="mobile"
							setErrors={setErrors}
							hasError={errors.has('mobile') ? true : false}
							errors={errors}
							percentFillability="20"
							regexp={regexpisValidMobile}
							addError={addError}
							removeError={removeError}
						/>

						<Input 
							label="Электронная почта"
							name="email"
							setErrors={setErrors}
							hasError={errors.has('email') ? true : false}
							errors={errors}
							percentFillability={null}
							regexp={regexpIsEmail}
							addError={addError}
							removeError={removeError}
						/>
					</div>


				</div>
				<div className={style.form__right}>
					уже заполнено
				</div>
			</div>
		</Container>	
	);
};