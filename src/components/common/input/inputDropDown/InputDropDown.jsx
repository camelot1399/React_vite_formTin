import React, { useState } from "react";
import { Wrapper } from "../../../wrapper/Wrapper";
import { BsChevronDown, BsCheck } from "react-icons/bs";
// @ts-ignore
import style from './style.module.scss';
import { DropDownList2 } from "../../dropDown/dropDownList/DropDownList2";
import { isExists } from "../../../../../tools/helpers";

export const InputDropDown = ({
	label,
	list
}) => {
	const [active, setActive] = useState(false);
	const [selectedItems, setSelectedItems] = useState([]);
	const dropZone = 'dropZone';

	const getCategoriesList = () => {
		if (!selectedItems.length) {
			return ''
		} else {
			let str = '';
			selectedItems.forEach( (el, index) => {

				if (index === selectedItems.length - 1) {
					str += `${el.name}`;
				} else {
					str += `${el.name}, `;
				}
				
			})

			return str;
		}
	}

	const isValidCountSelectedCategories = () => {
		if (selectedItems.length === 4) {
			return true
		} else {
			return false
		}
	}

	const handleSelectedItems = (item) => {
		if (isExists(item, selectedItems)) {
			const filteredCategories = selectedItems.filter(cat => cat.id !== item.id);
			setSelectedItems(filteredCategories);
		} else {
			if (selectedItems.length === 4) {
				return false;
			} 

			setSelectedItems([
				...selectedItems,
				item
			])
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
								<div className={[style.input__label, selectedItems.length ? style.active : '', dropZone].join(' ')}>{label}</div>
								<div className={[style.selectedItems, dropZone].join(' ')}>
									{getCategoriesList()}
								</div>
							</div>

							{statusIcon()}
						</div>
					</div>

					{active && (
						<DropDownList2 
							list={list}
							handleSelectedItems={handleSelectedItems}
							selectedItems={selectedItems}
							setActive={setActive}
							active={active}
							zoneName={dropZone}
						/>
					)}

				</div>
			</Wrapper>
		</>
	);
};