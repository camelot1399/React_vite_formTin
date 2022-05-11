import React, { useRef, useState } from "react";
import { Wrapper } from "../../../wrapper/Wrapper";
// @ts-ignore
import style from './style.module.scss';
import { BsChevronDown, BsCheck } from "react-icons/bs";

export const Input = ({label}) => {
	const [active, setActive] = useState(false);
	const [value, setValue] = useState('');
	const inputTarget = useRef(null);

	const isValidCountSelectedCategories = () => {
		if (value.length >= 4) {
			return true
		} else {
			return false
		}
	}

	const onButtonClick = () => {
		inputTarget.current.focus();
		setActive(!active)
	}

	const percent = () => <div className={style.persent__wrapper}>20%</div>;

	return (
		<Wrapper>
			<div 
				className={[style.input, active ? style.input__active : ''].join(' ')}
				onClick={() => onButtonClick()}
			>
				<div className={style.input__wrap}>
					<div className={style.input__content}>
						<div className={[style.input__label, value.length ? style.active : ''].join(' ')}>{label}</div>
						<input 
							type="text" 
							value={value} 
							onChange={(e) => setValue(e.target.value)}
							onBlur={() => setActive(false)}
							ref={inputTarget}
							className={style.input__typeValue}
						/>
					</div>

					{isValidCountSelectedCategories() ? (
						<BsCheck color="green" size="24px" />
					) : (
						percent()
					)}
				</div>
			</div>
		</Wrapper>
	)
}