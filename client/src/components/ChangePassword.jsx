import React from 'react'
import { Dialog } from '@headlessui/react'
import { appendErrors, useForm } from 'react-hook-form'
import Button from './Button'
import Loading from './Loader'
import ModalWrapper from './ModalWrapper'
import Textbox from './Textbox'
import { toast } from 'sonner'
import { useChangePasswordMutation } from '../redux/slices/api/userApiSlice'

const ChangePassword = ({open,setOpen}) => {
    const{
        register,
        handleSubmit,
        formState:{errors},

    }= useForm();
const [ changeUserPassword,{ isLoading}]= useChangePasswordMutation();
const handleOnSubmit= async(data)=>{
    if(data.password !== data.cpass){
        toast.warning("Password doesnt match");
        return;
    }
    try {
        const res= await changeUserPassword(data).unwrap();
        toast.success("New user added successfully");
        setTimeout(()=>{
            setOpen(false);
        },1500);
    } catch (error) {
        console.log(err);
        toast.error(err?.data?.message || err.error);
    }
};
  return (
    <>
    <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
            <Dialog.Title
            as='h2'
            className='text-base font-bold leading-6 text-gray-900 mb-4'>
                Change password
            </Dialog.Title>
            <div className='mt-2 flex flex-col gap-6'>
                <Textbox
                placeholder='New Password'
                type='password'
                name='password'
                label='new password'
                className='w-full rounded'
                register={register("password",{
                    required: "New password is required!",
                })}
                error={appendErrors.password ? appendErrors.password.message:""}
                />
                <Textbox
                placeholder='confirm new password'
                type='password'
                name='cpass'
                label='confirm new password'
                className='w-full rounded'
                register={register("cpass",{
                    required: "confirm New password is required!",
                })}
                error={errors.cpass ? errors.cpass.message:""}
                />
            </div>
            {isLoading ? (
                <div className='py-5'>
                    <Loading/>
                </div>
            ):(
                <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
                    <Button
                    type='submit'
                    className='bg-blue-600 px-8 text-sm font-semibold text-white'
                    label='Save'
                    />
                    <button
                    type='button'
                    onClick={()=>setOpen(false)}
                    >
                        Cancel
                    </button>
                </div>
            )
        }
        </form>
    </ModalWrapper>
    </>
  )
}

export default ChangePassword
