import type { AddressItem } from "@/types/address";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAddressStore = defineStore('address', () => {
    const selectedAddress = ref<AddressItem>()
    const setSelectedAddress = (val: AddressItem) => {
        selectedAddress.value = val
    }
    return {
        selectedAddress,
        setSelectedAddress
    }
})