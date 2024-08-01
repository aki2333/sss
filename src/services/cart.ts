import { http } from '@/utils/http'
import type { CartItem } from '@/types/cart'
/**
 * 加入购物车
 * @param data 请求体参数
 */
export const postMemberCartApi = (data: { skuId: string; count: number }) => {
    return http({
        method: 'POST',
        url: '/member/cart',
        data,
    })
}

/**
 * 获取购物车列表
 */
export const getMemberCartApi = () => {
    return http<CartItem[]>({
        method: 'GET',
        url: '/member/cart',
    })
}

/**
 * 删除/清空购物车单品
 * @param data 请求体参数 ids SKUID 集合
 * @returns 
 */
export const deleteMemberCartApi = (data: { ids: string[] }) => {
    return http({
        method: 'DELETE',
        url: '/member/cart',
        data,
    })
}
/**
 * 修改购物车单品
 * @param skuId SKU ID
 * @param data Body 参数
 * @returns 
 */
export const putMemberCartBySkuIdApi = (skuId: string, data: { selected?: boolean; count?: number }) => {
    return http({
        method: 'PUT',
        url: `/member/cart/${skuId}`,
        data,
    })
}

/**
 * 购物车全选/取消全选
 * @param selected 是否选中
 * @returns 
 */
export const putMemberCartEelectedApi = (selected: boolean) => {
    return http({
        method: 'PUT',
        url: '/member/cart/selected',
        data: {
            selected
        }
    })
}