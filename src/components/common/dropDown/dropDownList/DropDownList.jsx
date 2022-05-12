import React, { useEffect, useRef } from "react";
import { BsCheck2 } from "react-icons/bs";
import { isExists } from "../../../../../tools/helpers";
// @ts-ignore
import style from './style.module.scss';


export const DropDownList = ({
	categories, 
	handleSelectedCategories, 
	categoriesSelected, 
	setActive, 
	active
}) => {
	const targetInput = useRef(null);

	const onButtonClick = () => {
		targetInput.current.focus();
	}

	//useEffect(() => {
	//	if (active) {
	//		console.log('да');
	//		onButtonClick();
	//	}
	//}, [active]);

	return (
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
									<div className={[style.checkbox, isExists(item, categoriesSelected) ? style.checkbox__active : ''].join(' ')}>
										<BsCheck2 />
									</div>
									<div className={style.drop__icon}>
										<img src={`./images/categories/${item.img}`} alt="" />
									</div>
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
							onBlur={() => setActive(false)}
						/>
				</ul>
			</div>
		</div>
	)
}