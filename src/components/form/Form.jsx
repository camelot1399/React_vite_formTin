import React, { useEffect, useState } from "react";
import { regexpIsEmail, regexpisValidMobile, regexpIsValidSymbols } from "../../../tools/regexp";
import { Button } from "../common/button/Button";
import { Input } from "../common/input/input/Input";
import { InputDropDown } from "../common/input/inputDropDown/InputDropDown";
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
	]);
	const [percentFillabilityCount, setPercentFillabilityCount] = useState(0);

	const errorsMessages = {
		fieldDoNotEmpty: 'Поле обязательно для заполнения',
		someErrorText: 'Ошибка ввода текста',
		formatPhone: 'Формат номера телефона: 89169001020'
	};

	const addError = ({name, msg}) => {
		setErrors(new Map([
			...errors,
			[name, errorsMessages[msg]]
		]));
	};

	const removeError = (payload) => {
		const newErrors = new Map(errors);
		newErrors.delete(payload);
		setErrors(newErrors);
	};

	const incrementPercentFillabilityCount = (number) => {
		setPercentFillabilityCount(percentFillabilityCount + +number);
	}
	const decrementPercentFillabilityCount = (number) => {
		setPercentFillabilityCount(percentFillabilityCount - +number);
	}

	return (
		<Container>
			<div className={style.form}>
				<div className={style.form__left}>

					<div className="fieldset">
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
							hasError={errors.has('lastName') ? true : false}
							errors={errors}
							percentFillability="20"
							regexp={regexpIsValidSymbols}
							addError={addError}
							removeError={removeError}
							placeholder="Михаил"
							incrementPercentFillabilityCount={incrementPercentFillabilityCount}
							decrementPercentFillabilityCount={decrementPercentFillabilityCount}
						/>

						<Input 
							label="Введите Фамилию"
							name="firstName"
							hasError={errors.has('firstName') ? true : false}
							errors={errors}
							percentFillability="10"
							regexp={regexpIsValidSymbols}
							addError={addError}
							removeError={removeError}
							placeholder="Иванов"
							incrementPercentFillabilityCount={incrementPercentFillabilityCount}
							decrementPercentFillabilityCount={decrementPercentFillabilityCount}
						/>

						<div className="row">
							<Input 
								label="Мобильный телефон"
								name="mobile"
								hasError={errors.has('mobile') ? true : false}
								errors={errors}
								percentFillability="20"
								regexp={regexpisValidMobile}
								addError={addError}
								removeError={removeError}
								placeholder="89169001020"
								incrementPercentFillabilityCount={incrementPercentFillabilityCount}
								decrementPercentFillabilityCount={decrementPercentFillabilityCount}
							/>

							<Input 
								label="Электронная почта"
								name="email"
								hasError={errors.has('email') ? true : false}
								errors={errors}
								percentFillability={null}
								regexp={regexpIsEmail}
								addError={addError}
								removeError={removeError}
								placeholder="email@mail.ru"
								incrementPercentFillabilityCount={incrementPercentFillabilityCount}
								decrementPercentFillabilityCount={decrementPercentFillabilityCount}
							/>
						</div>

						<Input 
							label="Дата рождения"
							name="bithday"
							hasError={errors.has('bithday') ? true : false}
							errors={errors}
							percentFillability={15}
							regexp={regexpIsValidSymbols}
							addError={addError}
							removeError={removeError}
							placeholder="01.08.1977"
							incrementPercentFillabilityCount={incrementPercentFillabilityCount}
							decrementPercentFillabilityCount={decrementPercentFillabilityCount}
						/>

						<InputDropDown 
							label="Гражданство*"
						/>
					</div>

					<div className="fieldset">
						<h4 className={style.form__label}>Настройте карту</h4>

						<div className="row">
							
						</div>

					</div>

					<hr className={style.hr}/>

					<div className={style.form__footer}>
						<div className={style.form__information}>
							<span>Заполняя форму, я принимаю условия передачи информации</span>
						</div>

						<Button title="Оформить" />
					</div>

				</div>
				<div className={style.form__right}>
					уже заполнено {percentFillabilityCount} %
				</div>
			</div>
		</Container>	
	);
};