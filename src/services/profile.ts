import type { ProfileDetail, ProfileParams } from "@/types/member"
import { http } from "@/utils/http"

/**
 * 获取用户信息
 * @returns 
 */
export const getMemberProfileApi = () => {
    return http<ProfileDetail>({
        url: "/member/profile",
        method: "GET",
    })
}

export const putMemberProfileApi = (data: ProfileParams) => {
    return http<ProfileDetail>({
        url: "/member/profile",
        method: "PUT",
        data
    })
}