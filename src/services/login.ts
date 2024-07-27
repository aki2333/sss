import type { LoginResult } from "@/types/member"
import { http } from "@/utils/http"

export type LoginParams = {
    /** 用户登录凭证（有效期五分钟） */
    code: string
    /** 包括敏感数据在内的完整用户信息的加密数据 */
    encryptedData: string
    /** 加密算法的初始向量 */
    iv: string
}

/**
 * 小程序登录
 * @param data 登录参数
 * @returns 
 */
export const postLoginWxMinApi = (data: LoginParams) => {
    return http<LoginResult>({
        url: '/login/wxMin',
        method: 'POST',
        data
    })
}

/**
 * 小程序登录-内测版
 * @param phoneNumber 手机号
 * @returns 
 */
export const postLoginWxMinSimpleApi = (phoneNumber: string) => {
    return http<LoginResult>({
        url: '/login/wxMin/simple',
        method: 'POST',
        data: {
            phoneNumber
        }
    })
}