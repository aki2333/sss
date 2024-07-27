import type { PageParams, PageResult } from "@/types/global"
import type { BannerItem, CategoryItem, GuessItem, HotItem } from "@/types/home"
import { http } from "@/utils/http"

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 * @returns 
 */
export const getHomeBannerApi = (distributionSite: number = 1) => {
    return http<BannerItem[]>({
        url: '/home/banner',
        method: 'GET',
        data: {
            distributionSite: distributionSite
        }
    })
}
/**
 * 首页-前台分类-小程序
 * @returns 
 */
export const getHomeCategoryApi = () => {
    return http<CategoryItem[]>({
        url: '/home/category/mutli',
        method: 'GET',
    })
}

/**
 * 首页-热门推荐-小程序
 * @returns 
 */
export const getHomeHotApi = () => {
    return http<HotItem[]>({
        url: '/home/hot/mutli',
        method: 'GET',
    })
}
// 猜你喜欢-小程序
// GET
// /home/goods/guessLike
export const getHomeGoodsGuessLikeApi = (data: PageParams) => {
    return http<PageResult<GuessItem>>({
        url: '/home/goods/guessLike',
        method: 'GET',
        data
    })
}