import { useDispatch, useSelector } from 'react-redux';
import { getShops } from 'actions/shopAction';
import ShopItem from 'pages/components/ShopItem';
import React, { useEffect, useState } from 'react';
import MainLayout from 'layouts/MainLayout'; import Modal from 'pages/components/Modal';
import store from 'store';
import { ShopApiItemType, ShopItemType } from 'types/Items';
import AddShopForm from 'pages/AddShopForm';
import { loadavg } from 'os';
;
type RootState = ReturnType<typeof store.getState>

const ShopList = () => {

  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const { shops, loading } = products
  const [openModal, setOpenModal] = useState(false);

  function handleShops() {
    // dispatch(getShops())
    // console.log(shops);

    setOpenModal(true)
  }
  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);



  return (
    <MainLayout>
      <div className="flex justify-between items-center py-3 border-b-[1px] border-gray-300 ">
        <h2 className="text-[22px] font-bold text-gray-800">Nos commerçants</h2>
        <div className="flex items-center h-full">
          <button className="w-52 rounded my-2 bg-[#1A78A8] h-10 text-sm text-center" onClick={handleShops}>Ajouter un commerce</button>
        </div>
      </div>
      <div className="text-sm text-gray-800">
        <div className="grid grid-cols-12 text-gray-400 my-5">
          <div className="col-span-2"></div>
          <div className="col-span-3"> <p className="ml-3">Nom</p> </div>
          <div className="col-span-3">Adresse</div>
          <div className="col-span-4"> <p className="ml-3">Meilleure offre</p> </div>
        </div>
        <div className='overflow-y-scroll h-[70vh]'>
        {loading ? ("Loading")
          : shops.map((item: ShopApiItemType, i: number) => (
            <ShopItem key={i} picture_url={item.picture_url} chain={item.chain} localisations={item.localisations} offers={item.offers} />
          ))
        }
        </div>

      </div>
      <Modal open={openModal} onModalClose={() => setOpenModal(false)} modalTitle="Ajouter votre commerce" >
        <AddShopForm />
      </Modal>
    </MainLayout>
  );
}

export default ShopList;
