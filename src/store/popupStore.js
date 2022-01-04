import { defineStore } from "pinia";

export const PopupStore = defineStore("popup", {
  state: () => ({
    popupShow: false,
    popupMsg: "",
    popupImg: false, //True - check, false - cross
    isLoading: false,
  }),
});
