import React, { useRef, useState } from "react";
import { Wrapper } from "../../../wrapper/Wrapper";
// @ts-ignore
import style from './style.module.scss';
import { BsCheck } from "react-icons/bs";
import { CError } from "../../cerror/CError";

export const Input = ({
	label,
	name, 
	hasError,
	errors,
	percentFillability,
	regexp,
	addError,
	removeError,
	placeholder,
	incrementPercentFillabilityCount,
	decrementPercentFillabilityCount
}) => {
	const [active, setActive] = useState(false);
	const [value, setValue] = useState('');
	const inputTarget = useRef(null);

	const isValidValue = () => {
		if (!value.match(regexp())) {
			return false;
		}
		
		return true;
	}

	const onButtonClick = () => {
		inputTarget.current.focus();
		setActive(true)
	}

	const percent = () => <div className={style.persent__wrapper}>+{percentFillability}%</div>;
	const onBlurInput = () => {
		setActive(false);
		setError();
	}

	const handleValue = (e) => {
		if (!e.length) {
			setValue('');
			return true;
		}

		removeError(name);

		setValue(e);
	}

	const setError = (e = null) => {		
		if (e === null && value === '') {
			addError({
				name,
				msg: 'fieldDoNotEmpty'
			});

			return false;
		}

		if (e !== null && !value.match(regexp())) {
			addError({
				name,
				msg: 'someErrorText'
			});

			return false;
		}

		if (e === null && !value.match(regexp())) {
			addError({
				name,
				msg: 'someErrorText'
			});

			return false;
		}

		if (errors.has(name)) {
			removeError(name);
		}

		incrementPercentFillabilityCount(percentFillability);
	}

	return (
		<Wrapper>
			<CError 
				hasError={hasError} 
				errors={errors}
				name={name}
			>
				<div 
					className={[
								style.input, 
								active ? style.input__active : '',
								hasError ? style.input__error : ''
					].join(' ')}
					onClick={() => onButtonClick()}
				>
					<div className={style.input__wrap}>
						<div className={style.input__content}>
							<div className={[style.input__label, value.length ? style.active : ''].join(' ')}>{label}</div>
							<input 
								type="text" 
								value={value} 
								onChange={(e) => handleValue(e.target.value)}
								onBlur={() => onBlurInput()}
								ref={inputTarget}
								className={style.input__typeValue}
								name={name}
								placeholder={active ? placeholder : ''}
							/>
						</div>

						{isValidValue() ? (
							<BsCheck color="green" size="24px" />
						) : (
							percentFillability !== null && ( percent() )
						)}
					</div>
					
				</div>
			</CError>
		</Wrapper>
	)
}