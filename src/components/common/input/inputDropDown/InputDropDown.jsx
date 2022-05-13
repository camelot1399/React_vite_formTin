import React, { useState } from "react";
import { Wrapper } from "../../../wrapper/Wrapper";
import { BsChevronDown, BsCheck } from "react-icons/bs";
// @ts-ignore
import style from './style.module.scss';

export const InputDropDown = ({label}) => {
	const [active, setActive] = useState(false);
	const [categoriesSelected, setCategoriesSelected] = useState([]);
	const dropZone = 'dropZone';

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

	const isValidCountSelectedCategories = () => {
		if (categoriesSelected.length === 4) {
			return true
		} else {
			return false
		}
	}

	const statusIcon = () => {
		return isValidCountSelectedCategories() ? (
			<BsCheck color="green" size="24px" />
		) : (
			<div className={style.input__dropIcon}>
				<BsChevronDown />
			</div>
		)
	};

	return (
		<>
			<Wrapper>
				<div className={[style.fields, dropZone].join(' ')}>
					<div 
						className={[style.input, active ? style.input__active : ''].join(' ')}
						onClick={() => setActive(!active)}
					>
						<div className={[style.input__wrap, dropZone].join(' ')}>
							<div className={dropZone}>
								<div className={[style.input__label, categoriesSelected.length ? style.active : '', 'dropBlock'].join(' ')}>{label}</div>
								<div className={[style.selectedCategories, dropZone].join(' ')}>
									{getCategoriesList()}
								</div>
							</div>

							{statusIcon()}
						</div>
					</div>

					
				</div>
			</Wrapper>
		</>
	);
};