import React from 'react'
import { SocialIcon } from 'react-social-icons'
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

export const Footer = () => {
    return (
		<div className='bg-black text-white'>
			<div className='mx-auto max-w-[1100px] h-[40vh] mt-7'>
				<div className='flex flex-row space-x-4 justify-center'>
					<div className='basis-1/3'>
						<h1 className='font-bold py-3 text-xl'>Про нас</h1>
						<p className='text-sm py-4'>Мы предоставляем широкий ассортимент запчастей для бытовой техники в Усть-Каменогорске и продаем только самые надежные запчасти.</p>
						<p className='text-right'>Ерасыл Найманкумарулы</p>
					</div>
					<div>
						<h1 className='font-bold py-3 text-xl'>Мы в социальных сетях</h1>
						<div className='flex flex-row space-x-2 items-center'>
							<SocialIcon url="https://whatsapp.com/" style={{ height: 35, width: 35 }}/>
							<span>+7 707 137 6006</span>
						</div>
					</div>
					<div>
						<h1 className='font-bold py-3 text-xl'>Контакты</h1>
						<div className='flex flex-row space-x-3 items-center'>
							<MapsHomeWorkOutlinedIcon/>
							<p className='text-sm'>30-й Гвардейской дивизии 22, Усть-Каменогорск 070000, Казахстан</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
