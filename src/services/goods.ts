import type { GoodsResult } from "@/types/goods"
import { http } from "@/utils/http"
/**
 * 商品详情
 * @param id 商品id
 * @returns 
 */
export const getGoodsByIdApi = (id: string) => {
    return http<GoodsResult>({
        url: "/goods",
        method: "GET",
        data: {
            id
        }
    })
}