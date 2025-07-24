import { create } from 'zustand';

type ExchangeStoreState = {
  singleCarExchangeData: any | null;
  isSubmitLoading: boolean;
  isSubmitSuccess: boolean;
  isSubmitError: boolean;
  submit: () => Promise<object>;
};

export const useExchangeStore = create<ExchangeStoreState>(() => ({
  singleCarExchangeData: null,
  isSubmitLoading: false,
  isSubmitSuccess: false,
  isSubmitError: false,

  submit:async()=>{
   return { success: true }
  }
  
}));


