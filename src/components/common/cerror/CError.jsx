import React from "react";
// @ts-ignore
import style from './style.module.scss';

export const CError = ({children, hasError, errors, name}) => {
	return (
		<>
			{children}

			{hasError ? (
				<div className={style.error__msg}>
					{errors.get(name)}
				</div>
			) : ''}
		</>
	)
}