import type { OrderCreateParams, OrderListParams, OrderListResult, OrderLogisticResult, OrderPreResult, OrderResult } from "@/types/order"
import { http } from "@/utils/http"

/**
 * 填写订单-获取预付订单
 * @returns 
 */
export const getMemberOrderPreApi = () => {
    return http<OrderPreResult>({
        url: '/member/order/pre',
        method: 'GET'
    })
}

/**
 * 填写订单-获取立即购买订单
 * @returns 
 */
export const getMemberOrderPreNowApi = (data: { skuId: string, count: string, addressId?: string }) => {
    return http<OrderPreResult>({
        url: `/member/order/pre/now`,
        method: 'GET',
        data
    })
}

/**
 * 填写订单-再次购买
 * @param id 订单id
 */
export const getMemberOrderRepurchaseByIdApi = (id: string) => {
    return http<OrderPreResult>({
        method: 'GET',
        url: `/member/order/repurchase/${id}`,
    })
}

/**
 * 提交订单
 * @param data 请求参数
 * @returns 
 */
export const postMemberOrderApi = (data: OrderCreateParams) => {
    return http<{ id: string }>({
        url: '/member/order',
        method: 'POST',
        data
    })
}

/**
 * 获取订单详情
 * @param id 订单id
 * @returns 
 */
export const getMemberOrderByIdApi = (id: string) => {
    return http<OrderResult>({
        url: `/member/order/${id}`,
        method: 'GET'
    })
}

/**
 * 获取微信支付参数
 * @param data orderId 订单id
 * @returns 
 */
export const getPayWxPayMiniPayApi = (data: { orderId: string }) => {
    return http<WechatMiniprogram.RequestPaymentOption>({
        url: `/pay/wxPay/miniPay`,
        method: 'GET',
        data
    })
}

/**
 * 模拟支付-内测版
 * @param data orderId 订单id
 */
export const getPayMockApi = (data: { orderId: string }) => {
    return http({
        method: 'GET',
        url: '/pay/mock',
        data,
    })
}

/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const getMemberOrderConsignmentByIdApi = (id: string) => {
    return http({
        method: 'GET',
        url: `/member/order/consignment/${id}`,
    })
}

/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 */
export const putMemberOrderReceiptByIdApi = (id: string) => {
    return http<OrderResult>({
        method: 'PUT',
        url: `/member/order/${id}/receipt`,
    })
}

/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const getMemberOrderLogisticsByIdApi = (id: string) => {
    return http<OrderLogisticResult>({
        method: 'GET',
        url: `/member/order/${id}/logistics`,
    })
}

/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 */
export const deleteMemberOrderApi = (data: { ids: string[] }) => {
    return http({
        method: 'DELETE',
        url: `/member/order`,
        data,
    })
}

/**
 * 取消订单
 * @description 仅在订单状态为待付款时，可取消订单。
 * @param id 订单id
 * @param data cancelReason 取消理由
 */
export const getMemberOrderCancelByIdApi = (id: string, data: { cancelReason: string }) => {
    return http<OrderResult>({
        method: 'PUT',
        url: `/member/order/${id}/cancel`,
        data,
    })
}

/**
 * 获取订单列表
 * @param data orderState 订单状态
 */
export const getMemberOrderApi = (data: OrderListParams) => {
    return http<OrderListResult>({
        method: 'GET',
        url: `/member/order`,
        data,
    })
}



