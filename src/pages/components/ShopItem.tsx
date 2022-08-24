import React from 'react';
import fallBackImg from "assets/img/no-image.png";
import { ShopApiItemType } from 'types/Items';

interface ShopItemInterface extends ShopApiItemType {
  onItemClick: (arg: ShopApiItemType ) => void
}

const ShopItem = ({ picture_url, chain, localisations, offers, onItemClick }: ShopItemInterface) => {

  function getBestOffer(arr: any) {
    return arr.sort(compare)
  }

  function compare(a: any, b: any) {
    if (parseInt(a.reduction) > parseInt(b.reduction)) return -1
    if (parseInt(a.reduction) < parseInt(b.reduction)) return 1
    return 0;
  }

  function getReduction(percentage: string, amount: string) {
    return ((1 - parseInt(percentage) / 100) * parseInt(amount)).toFixed(2)
  }

  function handleclick() {
    onItemClick({picture_url, chain, localisations, offers})
  }

  const bestOffers = getBestOffer(offers)


  return (
    <div className="grid grid-cols-12 items-center bg-white rounded-lg py-5 my-3 mr-5">
      <div className="col-span-2">
        <img src={picture_url} onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = fallBackImg;
        }} className="rounded-lg w-28 h-24 ml-4" />
      </div>
      <div className="col-span-2"> <p className="ml-3 truncate">{chain}</p></div>
      <div className="col-span-3"> <p className="ml-5 truncate">{localisations[0].address}</p> </div>
      <div className="col-span-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg w-32 h-[100px] bg-meilleure-offre bg-no-repeat bg-contain ">
            <p className="text-[13px] font-medium">{getReduction(bestOffers[0].reduction, bestOffers[0].amount)}  €</p>
            <p className="text-[11px] font-medium line-through">{bestOffers[0].amount} €</p>
            <span className="text-white text-[11px] bg-red-700 py-1 p-[6px] rounded">-{parseInt(bestOffers[0].reduction)}%</span>
            <p className="text-[13px] font-semibold text-center mt-1">Meilleure offre</p>
          </div>

          <div className="p-3 rounded-lg w-[100px] h-20 bg-meilleure-offre bg-no-repeat">
            <p className="text-[13px] font-medium">{getReduction(bestOffers[1].reduction, bestOffers[1].amount)}  €</p>
            <p className="text-[11px] font-medium line-through">{bestOffers[1].amount} €</p>
            <span className="text-white text-[11px] bg-red-700 py-1 p-[6px] rounded">-{parseInt(bestOffers[1].reduction)}%</span>
          </div>

          <div className="p-3 rounded-lg w-[100px] h-20 bg-meilleure-offre bg-no-repeat">
            <p className="text-[13px] font-medium">{getReduction(bestOffers[2].reduction, bestOffers[2].amount)} €</p>
            <p className="text-[11px] font-medium line-through">{bestOffers[2].amount} €</p>
            <span className="text-white text-[11px] bg-red-700 py-1 p-[6px] rounded">-{parseInt(bestOffers[2].reduction)}%</span>
          </div>

        </div>
      </div>
      <div className="col-span-1 flex justify-end">
        <button onClick={handleclick} className='rounded bg-green-600 my-auto mr-5 p-1'>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.02344 17.2188H1.875V15.1777L13.9898 3.64006L16.1684 5.71002L4.02344 17.2188ZM16.6297 5.26953L14.4531 3.2018L15.6898 2.06403C15.8809 1.88145 16.1738 1.78125 16.4453 1.78125C16.579 1.78092 16.7114 1.80574 16.8348 1.85427C16.9583 1.90281 17.0705 1.9741 17.1648 2.06403L17.8289 2.69489C17.9232 2.78441 17.9979 2.89076 18.0487 3.00782C18.0995 3.12488 18.1254 3.25033 18.125 3.37696C18.125 3.63672 18.0191 3.91319 17.8273 4.09539L16.6297 5.26953Z" fill="white" />
          </svg>
        </button>
      </div>

    </div>
  );
}

export default ShopItem;
