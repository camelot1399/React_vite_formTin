import React from "react";
// @ts-ignore
import style from './container.module.scss';

export const Container = ({children}) => {
	return (
		<div className={style.container}>
			{children}
		</div>
	);
};