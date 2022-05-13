import React from "react";
// @ts-ignore
import style from './style.module.scss';

export const Button = ({title}) => {
	return (
		<>
			<button className={style.button}>{title}</button>
		</>
	)
}