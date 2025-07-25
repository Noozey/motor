import { ExchangeEVDataDetail } from '@/types';
import toast from 'react-hot-toast';
import { create } from 'zustand';

type ExchangeStoreState = {
  singleCarExchangeData: any | null;
  isSubmitLoading: boolean;
  isSubmitSuccess: boolean;
  isSubmitError: boolean;
  exchangeEvSubmit: (data: ExchangeEVDataDetail) => void;
};

export const useExchangeStore = create<ExchangeStoreState>((set) => ({
  singleCarExchangeData: null,
  isSubmitLoading: false,
  isSubmitSuccess: false,
  isSubmitError: false,
  exchangeEvSubmit:async(data)=>{
    set({ isSubmitLoading: true, isSubmitSuccess: false, isSubmitError: false });
       try{
        const response = await fetch('/api/exchange-ev', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const responseData = await response.json();
         if (!responseData.success) {
      toast.error(responseData.message || 'Failed to submit exchange');
      set({ isSubmitLoading: false, isSubmitError: true });
      return;
    }
        set({
        isSubmitLoading: false,
        isSubmitSuccess: true,
        singleCarExchangeData: responseData.data ,
      });
          
       } catch (error:any) {
        toast.error(error.message || 'Something went wrong');
    set({ isSubmitLoading: false, isSubmitError: true });
       }
  }
  
}));


