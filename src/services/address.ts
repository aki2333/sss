import type { AddressItem, AddressParams } from "@/types/address"
import { http } from "@/utils/http"

/**
 * 添加收货地址
 * @param data 请求参数
 * @returns 
 */
export const postMemberAddressApi = (data: AddressParams) => {
    return http({
        url: '/member/address',
        method: 'POST',
        data
    })
}
/**
 * 获取收货地址列表
 * @returns 
 */
export const getMemberAddressApi = () => {
    return http<AddressItem[]>({
        url: '/member/address',
        method: 'GET'
    })
}
/**
 * 获取收货地址详情
 * @param id 地址id
 * @returns 
 */
export const getMemberAddressByIdApi = (id: string) => {
    return http<AddressItem>({
        url: `/member/address/${id}`,
        method: 'GET'
    })
}