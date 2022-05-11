import React, { useState } from "react";
import { Wrapper } from "../../../wrapper/Wrapper";
// @ts-ignore
import style from './input.module.scss';


import { BsChevronDown, BsCheck2 } from "react-icons/bs";

export const InputWithChoise = ({categories, setCategories, label}) => {

	const [categoriesSelected, setCategoriesSelected] = useState([]);

	const [active, setActive] = useState(false);

	const getCategoriesList = () => {
		if (!categoriesSelected.length) {
			return ''
		} else {
			let str = '';
			categoriesSelected.forEach( (el, index) => {

				if (index === categoriesSelected.length - 1) {
					str += `${el.name}`;
				} else {
					str += `${el.name}, `;
				}
				
			})

			return str;
		}
	}

	const handleSelectedCategories = (item) => {
		if (isExists(item)) {
			const filteredCategories = categoriesSelected.filter(cat => cat.id !== item.id);
			setCategoriesSelected(filteredCategories);
		} else {
			setCategoriesSelected([
				...categoriesSelected,
				item
			])
		}
	}

	const isExists = (category) => {
		return categoriesSelected.includes(category);
	}

	return (
		<>
			<Wrapper>
				<div className={style.field}>
					<div 
						className={[style.input, active ? style.input__active : ''].join(' ')}
						onFocus={() => setActive(!active)}
						onBlur={() => setActive(false)}
					>
						<div className={style.input__wrap}>
							<div>
								<div className={style.input__label}>{label}</div>
								<div className={style.selectedCategories}>
									{getCategoriesList()}
								</div>
							</div>
							<div>
								<BsChevronDown />
							</div>
						</div>
					</div>

					<div className={style.drop}>
						<div className={style.drop__wrapper}>
							<ul className={style.drop__ul}>
								{categories.length ? (
									categories.map(item => (
										<li 
											key={item.id}
											className={style.drop__li}
											onClick={() => handleSelectedCategories(item)}
										>
											<div className={style.drop__liWrap}>
												<div className={[style.checkbox, isExists(item) ? style.checkbox__active : ''].join(' ')}>
													<BsCheck2 />
												</div>
												<div className={style.drop__icon}>
													<img src={`./images/categories/${item.img}`} alt="" />
												</div>
												<div className="drop__name">
													{item.name}
												</div>
											</div>
										</li>
									))
								) : (
									<li>нет категорий</li>
								)}
							</ul>
						</div>
					</div>
				</div>
				
				
			</Wrapper>
		</>
	);
};