import { useDispatch, useSelector } from 'react-redux';
import { getShops } from 'actions/shopAction';
import ShopItem from 'pages/components/ShopItem';
import React, { useEffect, useState } from 'react';
import MainLayout from 'layouts/MainLayout'; import Modal from 'pages/components/Modal';
import store from 'store';
import { ShopApiItemType, ShopItemType } from 'types/Items';
import AddShopForm from 'pages/AddShopForm';
import { CircularProgress } from '@mui/material';
import ReactPaginate from 'react-paginate';
;
type RootState = ReturnType<typeof store.getState>

const ShopList = () => {

  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products);
  const { shops, loading, requestSuccess, pageCount } = products
  const [openModal, setOpenModal] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState<ShopApiItemType>({
    picture_url: "",
    chain: "",
    localisations: [],
    offers: []
  });
  const [offset, setOffset] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);
  let shopsData = shops ? shops.slice(offset, offset + 10) : [];


  function handleShops() {
    setItemToUpdate({
      picture_url: "",
      chain: "",
      localisations: [],
      offers: [{amount: "", reduction: ""}]
    })
    setOpenModal(true)
  }

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  function handleItemClick(arg: ShopApiItemType) {
    setItemToUpdate(arg)
    setOpenModal(true)
  }

  function handlePageClick(e: any) {
    const selectedPage = e.selected;
    const offset = selectedPage * 10;
    setCurrentPage(selectedPage);
    setOffset(offset);
  };



  return (
    <MainLayout>
      <div className="flex justify-between items-center py-3 border-b-[1px] border-gray-300 ">
        <h2 className="text-[22px] font-bold text-gray-800">Nos commerçants</h2>
        <div className="flex items-center h-full">
          <button className="w-52 rounded my-2 bg-[#1A78A8] h-10 text-sm text-center" onClick={handleShops}>Ajouter un commerce</button>
        </div>
      </div>
      <div className="text-sm text-gray-800 ">
        <div className="grid grid-cols-12 text-gray-400 py-5 sticky top-0 bg-[#f3f2f2b3] backdrop-blur-md">
          <div className="col-span-2"></div>
          <div className="col-span-2 my-auto"> <p className="ml-3">Nom</p> </div>
          <div className="col-span-3 my-auto"> <p className='ml-5'>Adresse</p> </div>
          <div className="col-span-2 my-auto"> <p className="ml-3">Meilleure offre</p> </div>
          <div className="col-span-3 ml-auto">
            <ReactPaginate
              previousLabel={
                <svg className='inline' width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.17188 1.15625L1.82812 6.5L7.17188 11.8438" stroke="#1A78A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              }
              nextLabel={
                <svg className='inline' width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.82812 1.15625L7.17188 6.5L1.82812 11.8438" stroke="#1A78A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"} />
          </div>
        </div>
        <div className='overflow-y-scroll h-[70vh] -mt-6'>

          {loading && !requestSuccess && <div className='w-full h-full flex items-center justify-center'> <CircularProgress /></div>}
          {requestSuccess &&
            shopsData.map((item: ShopApiItemType, i: number) => (
              <ShopItem key={i} picture_url={item.picture_url} chain={item.chain} localisations={item.localisations} offers={item.offers} onItemClick={handleItemClick} />
            ))
          }
          {!loading && !requestSuccess &&
            <div className='w-full h-full flex items-center justify-center'>
              <p className="text-center text-lg font-bold text-gray-500">Oups nous n'avons pas pu récupérer les commerçants <br /> veuillez réessayer !!!</p>
            </div>
          }
        </div>

      </div>
      <Modal open={openModal} onModalClose={() => setOpenModal(false)} modalTitle="Ajouter votre commerce" >
        <AddShopForm ItemToUpdate={itemToUpdate} />
      </Modal>
    </MainLayout>
  );
}

export default ShopList;
