import React from 'react'
import { SocialIcon } from 'react-social-icons'

export const Footer = () => {
    return (
		<div className='bg-black text-white'>
			<div className='mx-auto max-w-[1100px] h-[40vh]'>
				<div className='flex flex-row'>
					<div className='basis-1/3'>
						<h1>Про нас</h1>
						<p>Мы предоставляем широкий ассортимент запчастей для бытовой техники в Усть-Каменогорске и продаем только самые надежные запчасти.</p>
						<span>Ерасыл Найманкумарулы</span>
					</div>
					<div>
						<h1>Мы в социальных сетях</h1>
						<div>
							<SocialIcon url="https://whatsapp.com/"/>
							<span>+7 707 137 6006</span>
						</div>
					</div>
					<div>
						<h1>Контакты</h1>

					</div>
				</div>
			</div>
		</div>
    )
}
