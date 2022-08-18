
import DragAndDrop from 'pages/components/DragAndDrop';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';


const AddShopForm = () => {

  const defaultValues = {
    chain: "",
    adress: "",
    picture_url: "",
  };

  const {
    register,
    control,
    formState: { isDirty, isValid },
  } = useForm({ defaultValues, mode: "all" });

  return (

    <div className='w-3/4 mx-auto py-3'>
      <>
        <h3 className="font-medium text-gray-700 mb-2">Nom de votre commerce</h3>
        <input className={`form--custom w-full`} type="text"  {...register("chain", { required: "Veuillez renseigner le nom" })} />
      </>

      <div className='mt-5'>
        <h3 className="font-medium text-gray-700 mb-2">Adresse de votre commerce  </h3>
        <input className={`form--custom w-full`} type="text" {...register("adress", { required: "Veuillez renseigner l'adresse" })} />
      </div>

      <Controller name="picture_url" 
            control={control}
            render={({ field }) => (
            <DragAndDrop onChange={field.onChange}/>
        )} />


      <div className='my-5 grid grid-cols-12 gap-3 w-full'>
        <div className='col-span-5'>
          <input className={`form--custom w-full`} type="text" placeholder="Nom de l'offre" />
        </div>
        <div className='col-span-3'>
          <input className={`form--custom w-full`} type="text" placeholder='Montant' />
        </div>
        <div className='col-span-3'>
          <input className={`form--custom w-full`} type="number" min={0} placeholder='% de réduction' />
        </div>
        <div className='col-span-1 flex items-end'>
          <button disabled={true} className="w-full rounded text-white bg-gray-300 h-10 text-sm flex justify-center items-center">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.09998 2V1C6.09998 0.734784 6.2005 0.48043 6.37945 0.292893C6.55839 0.105357 6.80108 0 7.05414 0H10.8708C11.1239 0 11.3665 0.105357 11.5455 0.292893C11.7244 0.48043 11.825 0.734784 11.825 1V2H15.6416C16.1477 2 16.6331 2.21071 16.991 2.58579C17.3489 2.96086 17.5499 3.46957 17.5499 4V5C17.5499 5.53043 17.3489 6.03914 16.991 6.41421C16.6331 6.78929 16.1477 7 15.6416 7H15.5147L14.8659 17.2C14.8175 17.9593 14.4956 18.6709 13.9653 19.1908C13.4351 19.7107 12.7362 19.9999 12.0101 20H5.93395C5.20848 20 4.51007 19.7113 3.97993 19.1922C3.44979 18.6732 3.12748 17.9626 3.07814 17.204L2.41405 7H2.28333C1.77721 7 1.29182 6.78929 0.933936 6.41421C0.576055 6.03914 0.375 5.53043 0.375 5V4C0.375 3.46957 0.576055 2.96086 0.933936 2.58579C1.29182 2.21071 1.77721 2 2.28333 2H6.09998ZM15.6416 4H2.28333V5H15.6416V4ZM4.32619 7L4.9817 17.068C4.99815 17.3209 5.10563 17.5578 5.28241 17.7309C5.45919 17.9039 5.69207 18.0001 5.93395 18H12.0101C12.2522 18 12.4854 17.9036 12.6622 17.7301C12.839 17.5567 12.9463 17.3193 12.9623 17.066L13.6016 7H4.32714H4.32619ZM7.05414 8C7.3072 8 7.54989 8.10536 7.72883 8.29289C7.90777 8.48043 8.0083 8.73478 8.0083 9V16C8.0083 16.2652 7.90777 16.5196 7.72883 16.7071C7.54989 16.8946 7.3072 17 7.05414 17C6.80108 17 6.55839 16.8946 6.37945 16.7071C6.2005 16.5196 6.09998 16.2652 6.09998 16V9C6.09998 8.73478 6.2005 8.48043 6.37945 8.29289C6.55839 8.10536 6.80108 8 7.05414 8ZM10.8708 8C11.1239 8 11.3665 8.10536 11.5455 8.29289C11.7244 8.48043 11.825 8.73478 11.825 9V16C11.825 16.2652 11.7244 16.5196 11.5455 16.7071C11.3665 16.8946 11.1239 17 10.8708 17C10.6177 17 10.375 16.8946 10.1961 16.7071C10.0172 16.5196 9.91663 16.2652 9.91663 16V9C9.91663 8.73478 10.0172 8.48043 10.1961 8.29289C10.375 8.10536 10.6177 8 10.8708 8Z" fill="#fff" />
            </svg>
          </button>
        </div>
      </div>

      <button className="mt-10 mb-5 ml-auto text-md font-semibold text-[#1A78A8] flex items-center">
        Ajouter une offre
        <svg className='ml-2' width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5662 2.8125C8.84604 2.8125 3.37866 8.27988 3.37866 15C3.37866 21.7201 8.84604 27.1875 15.5662 27.1875C22.2863 27.1875 27.7537 21.7201 27.7537 15C27.7537 8.27988 22.2863 2.8125 15.5662 2.8125ZM20.2537 15.9375H16.5037V19.6875C16.5037 19.9361 16.4049 20.1746 16.2291 20.3504C16.0533 20.5262 15.8148 20.625 15.5662 20.625C15.3175 20.625 15.0791 20.5262 14.9032 20.3504C14.7274 20.1746 14.6287 19.9361 14.6287 19.6875V15.9375H10.8787C10.63 15.9375 10.3916 15.8387 10.2157 15.6629C10.0399 15.4871 9.94116 15.2486 9.94116 15C9.94116 14.7514 10.0399 14.5129 10.2157 14.3371C10.3916 14.1613 10.63 14.0625 10.8787 14.0625H14.6287V10.3125C14.6287 10.0639 14.7274 9.8254 14.9032 9.64959C15.0791 9.47377 15.3175 9.375 15.5662 9.375C15.8148 9.375 16.0533 9.47377 16.2291 9.64959C16.4049 9.8254 16.5037 10.0639 16.5037 10.3125V14.0625H20.2537C20.5023 14.0625 20.7408 14.1613 20.9166 14.3371C21.0924 14.5129 21.1912 14.7514 21.1912 15C21.1912 15.2486 21.0924 15.4871 20.9166 15.6629C20.7408 15.8387 20.5023 15.9375 20.2537 15.9375Z" fill="#1A78A8" />
        </svg>
      </button>



      <button className="mx-4 w-full rounded text-white text-base font-semibold mt-10 bg-[#1A78A8] h-12 text-center">Enregistrer</button>



    </div>
  );
}

export default AddShopForm;
