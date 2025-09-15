## 封装

### ts 版本

`src/network/axios.ts`

```TypeScript
import axios, { AxiosRequestConfig } from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

const axiosInstance = axios.create({
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  response => {
    if (response?.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error?.message?.includes?.('timeout')) {
      console.log('timeout')
    } else {
      console.log(error)
    }
    Promise.reject(error)
  },
)

const request = <ResponseType = unknown>(
  url: string,
  options?: AxiosRequestConfig<unknown>,
): Promise<ResponseType> => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      ...options,
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => reject(err))
  })
}
export { axiosInstance, request }

```


### js 版本

`src/network/axios.js`

```JavaScript
import axios, { AxiosRequestConfig } from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

const axiosInstance = axios.create({
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  response => {
    if (response?.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error?.message?.includes?.('timeout')) {
      console.log('timeout')
    } else {
      console.log(error)
    }
    Promise.reject(error)
  },
)

const request = (
  url: string,
  options?: AxiosRequestConfig,
) => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      ...options,
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => reject(err))
  })
}
export { axiosInstance, request }

```


## 业务请求函数

### ts 版本

`src/views/home/services.ts`

```TypeScript
import { request } from '@/network/axios'
import { NameType } from './data.d'

export async function getUserInfo(id: string) {
  return request<NameType>('url', {
    params: {
      id,
    },
  })
}

```


模块导出类型，防止类型污染全局
`src/views/home/data.d.ts`

```TypeScript
export type NameType = {
  name?: string
  age: number
}

```


### js 版本

`src/views/home/services.js`

```JavaScript
import { request } from '@/network/axios'

export async function getUserInfo(id) {
  return request('url', {
    params: {
      id,
    },
  })
}

```


## 自定义 useRequest

```JavaScript
export const useRequest = (api, name, options = {})=>{
    const { ready = true, defaultValue = {}, firstData = false, params = {}, ...rest } = options
    const data = ref(defaultValue)
    const loading = ref(false)

    const run = async ()=>{
        try {
            loading.value = true
            const res = (await api[name](params)) || defaultValue
            data.value = firstData ? res[0] : res
        } catch (error) {
            window.defaultCatchError(error)
        } finally {
            loading.value = false
        }
  
    }
    // 是否满足条件
    if(ready){
        run()
    }
    // 依赖重新请求
    watch(()=>params, ()=>{
        run()
    })
    return {
        data,
        loading,
        run
    }
}
```


## 使用 useRequest

```Vue
<template>
  <div>
    {{ data }}
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Home',
  }
</script>

<script lang="ts" setup>
  import { useRequest } from '@/hooks'
  import { getUserInfo } from './services'
  const { data } = useRequest(() => getUserInfo('666'))
</script>

<style scoped lang="less"></style>

```


