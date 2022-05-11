import React, { useState } from "react";
import { Wrapper } from "../../../wrapper/Wrapper";
// @ts-ignore
import style from './input.module.scss';


import { BsChevronDown } from "react-icons/bs";
import { DropDownList } from "../../dropDown/dropDownList/DropDownList";

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
			if (categoriesSelected.length === 4) {
				return false;
			} 

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
						onClick={() => setActive(!active)}
					>
						<div className={style.input__wrap}>
							<div>
								<div className={style.input__label}>{label}</div>
								<div className={style.selectedCategories}>
									{getCategoriesList()}
								</div>
							</div>

							<BsChevronDown />
						</div>
					</div>

					{active && (
						<DropDownList 
							categories={categories}
							handleSelectedCategories={handleSelectedCategories}
							categoriesSelected={categoriesSelected}
						/>
					)}
				</div>
				
				
			</Wrapper>
		</>
	);
};