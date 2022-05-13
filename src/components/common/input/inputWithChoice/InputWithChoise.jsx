import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "../../../wrapper/Wrapper";
// @ts-ignore
import style from './input.module.scss';

import { BsChevronDown, BsCheck } from "react-icons/bs";
import { DropDownList } from "../../dropDown/dropDownList/DropDownList";
import { isExists } from "../../../../../tools/helpers";

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
		if (isExists(item, categoriesSelected)) {
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

	const isValidCountSelectedCategories = () => {
		if (categoriesSelected.length === 4) {
			return true
		} else {
			return false
		}
	}

	return (
		<>
			<Wrapper>
				<div className={[style.fields, 'dropBlock'].join(' ')}>
					<div 
						className={[style.input, active ? style.input__active : ''].join(' ')}
						onClick={() => setActive(!active)}
					>
						<div className={[style.input__wrap, 'dropBlock'].join(' ')}>
							<div>
								<div className={[style.input__label, categoriesSelected.length ? style.active : '', 'dropBlock'].join(' ')}>{label}</div>
								<div className={[style.selectedCategories, 'dropBlock'].join(' ')}>
									{getCategoriesList()}
								</div>
							</div>

							{isValidCountSelectedCategories() ? (
								<BsCheck color="green" size="24px" />
							) : (
								<div className={style.input__dropIcon}>
									<BsChevronDown />
								</div>
							)}
							
						</div>
					</div>

					{active && (
						<DropDownList 
							categories={categories}
							handleSelectedCategories={handleSelectedCategories}
							categoriesSelected={categoriesSelected}
							setActive={setActive}
							active={active}
						/>
					)}
				</div>
				
				
			</Wrapper>
		</>
	);
};