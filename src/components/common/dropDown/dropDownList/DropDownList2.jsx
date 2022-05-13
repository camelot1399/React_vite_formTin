import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { isExists } from "../../../../../tools/helpers";
// @ts-ignore
import style from './style.module.scss';


export const DropDownList2 = ({
	list, 
	handleSelectedItems, 
	selectedItems, 
	setActive, 
	active,
	zoneName
}) => {
	const targetInput = useRef(null);

	useEffect(() => {
		setListener();
	}, []);

	const setListener = useCallback(() => {
		if (active) {
			document.addEventListener('click', (e) => {
				if (!e.target.classList.contains(zoneName)) {
					setActive(false)
				}
			})
		}
	}, [active]);

	const onButtonClick = () => {
		targetInput.current.focus();
	}

	return (
		<div className={style.drop}>
			<div className={style.drop__wrapper}>
				<ul className={style.drop__ul}>
					{list.length ? (
						list.map(item => (
							<li 
								key={item.id}
								className={style.drop__li}
								onClick={(e) => handleSelectedItems(item)}
							>
								<div className={[style.drop__liWrap, zoneName].join(' ')}>
									<div className={[style.checkbox, isExists(item, selectedItems) ? style.checkbox__active : ''].join(' ')}>
										<BsCheck2 />
									</div>
									{item?.img && (
										<div className={style.drop__icon}>
											<img src={`./images/categories/${item.img}`} alt="" />
										</div>
									)}
									<div className={style.drop__name}>
										{item.name}
									</div>
								</div>
							</li>
						))
					) : (
						<li>нет категорий</li>
					)}

						<input 
							type="text" 
							ref={targetInput} 
						/>
				</ul>
			</div>
		</div>
	)
}