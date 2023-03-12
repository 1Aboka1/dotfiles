import React, { useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'

export const SignInUp = (props) => {
    const loginAlias = 'login'
	const registerAlias = 'register'
    const [windowType, setWindowType] = useState(props.type)

    const handleWindowChange = () => {
        setWindowType(windowType === loginAlias ? registerAlias : loginAlias)
    }

    // const handleSignUpClick = () => {

    // }
    
    const renderSignInWindow = () => {
        return (
            <div className='bg-gray-100 rounded-2xl w-[75vh]'>
                <div className='flex flex-row justify-between items-center px-6 py-4'>
                    <h1 className='font-semibold text-xl'>Вход</h1>
                    <div className='rounded-full border bg-gray-300 p-1'>
                        <CloseOutlinedIcon className='cursor-pointer' onClick={props.handleSignClick('')}/>
                    </div>
                </div>
                <div className='my-3'>
                    <form className='flex flex-col items-center px-10 space-y-3'>
                        <input className='rounded-xl w-full h-12 p-4 outline-none ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-green-400 transition ease-in-out duration-300' type="text" placeholder='E-mail' />
                        <div className='bg-white w-full flex flex-row justify-between items-center rounded-xl ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-green-400 transition ease-in-out duration-300'>
                            <input className='w-full h-12 p-4 rounded-xl outline-none' type="password" placeholder='Пароль' />
                            <VisibilityOutlinedIcon className='mx-3 cursor-pointer'/>
                        </div>
                        <p className='text-green-500 hover:text-green-600 transition ease-in-out duration-300' href="">Забыли пароль?</p>
                        <button className='w-full h-12 bg-green-500 text-white font-extrabold rounded-2xl hover:bg-green-600 transition ease-in-out duration-300'>Войти</button>
                    </form>
                </div>
                <div className='flex flex-row justify-center py-7 border-t border-gray-300'>
                    <p onClick={handleWindowChange} className='cursor-pointer text-green-500 hover:text-green-600 transition ease-in-out duration-300'>Нет аккаунта? Зарегистрироваться</p>
                </div>
            </div>
        )
    }

    const renderSignUpWindow = () => {
        return (
            <div className='bg-gray-100 rounded-2xl w-[75vh]'>
                <div className='flex flex-row justify-between items-center px-6 py-4'>
                    <h1 className='font-semibold text-xl'>Регистрация</h1>
                    <div className='rounded-full border bg-gray-300 p-1'>
                        <CloseOutlinedIcon className='cursor-pointer' onClick={props.handleSignClick('')}/>
                    </div>
                </div>
                <div className='my-3'>
                    <form className='flex flex-col items-center px-10 space-y-3'>
                        <input className='rounded-xl w-full h-12 p-4 outline-none ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-green-400 transition ease-in-out duration-300' type="text" placeholder='E-mail' />
                        <div className='bg-white w-full flex flex-row justify-between items-center rounded-xl ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-green-400 transition ease-in-out duration-300'>
                            <input className='w-full h-12 p-4 rounded-xl outline-none' type="password" placeholder='Пароль' />
                            <VisibilityOutlinedIcon className='mx-3 cursor-pointer'/>
                        </div>
                        <input className='w-full h-12 p-4 rounded-xl outline-none ring-1 ring-gray-400 focus-within:ring-1 focus-within:ring-green-400 transition ease-in-out duration-300' type="password" placeholder='Пароль' />
                        <p className='text-green-500 hover:text-green-600 transition ease-in-out duration-300'>Забыли пароль?</p>
                        <button className='w-full h-12 bg-green-500 text-white font-extrabold rounded-2xl hover:bg-green-600 transition ease-in-out duration-300'>Зарегистрироваться</button>
                    </form>
                </div>
                <div className='flex flex-row justify-center py-7 border-t border-gray-300'>
                    <p onClick={handleWindowChange} className='cursor-pointer text-green-500 hover:text-green-600 transition ease-in-out duration-300'>Уже есть аккаунт? Войти</p>
                </div>
            </div>
        )
    }

    return (
        <div className='fixed z-10 w-screen mx-auto animate-in fade-in zoom-in duration-300'>
            <div className='flex justify-center items-center h-[95vh]'>
                {windowType === loginAlias ? renderSignInWindow() : (null)}
                {windowType === registerAlias ? renderSignUpWindow() : (null)}
            </div>
        </div>
    )
}