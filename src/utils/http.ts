import { useMemberStore } from "@/stores";
const memberStore = useMemberStore()
/**
 * 拼接基础地址
 * 设置超时时间
 * 添加请求头标识
 * 添加 token
 */
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
//拦截器配置
const httpInterceptor: UniApp.InterceptorOptions = {
    //拦截前触发
    invoke(args: UniApp.RequestOptions) {
        if (!args.url.startsWith('http')) {
            args.url = baseURL + args.url
        }
        //设置超时时间
        args.timeout = 10000
        //添加请求头标识
        args.header = {
            ...args.header,
            'source-client': 'miniapp',
        }
        //添加 token
        const token = memberStore.profile?.token
        if (token) {
            args.header = {
                ...args.header,
                Authorization: token,
            }
        }
    },
}
//拦截器 request 请求
uni.addInterceptor('request', httpInterceptor)
//拦截器 uploadFile 上传文件
uni.addInterceptor('uploadFile', httpInterceptor)

/**
 * 请求函数
 * @param  UniApp.RequestOptions
 * @returns Promise
 *  1. 返回 Promise 对象，用于处理返回值类型
 *  2. 获取数据成功
 *    2.1 提取核心数据 res.data
 *    2.2 添加类型，支持泛型
 *  3. 获取数据失败
 *    3.1 401错误  -> 清理用户信息，跳转到登录页
 *    3.2 其他错误 -> 根据后端错误信息轻提示
 *    3.3 网络错误 -> 提示用户换网络
 */
type Data<T> = {
    code: string,
    msg: string,
    result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data as Data<T>)
                } else if (res.statusCode === 401) {
                    // 清除 用户信息
                    memberStore.clearProfile()
                    uni.navigateTo({ url: '/pages/login/login' })
                    reject(res)
                } else {
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>).msg || '请求错误'
                    })
                    reject(res)
                }
            },
            fail(e) {
                uni.showToast({
                    icon: 'none',
                    title: '网络错误，换个网络试试'
                })
                reject(e)
            },
        })
    })
}