import React from "react";
// @ts-ignore
import style from './style.module.scss';

export const Wrapper = ({children}) => {
	return (
		<div className={style.wrapper}>
			{children}
		</div>
	);
};