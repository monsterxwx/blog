### `useDebounce` 防抖


```JavaScript
export function useDebounce(cb, delay = 100) {
    const timer = ref(null)

    let handler = function () {
        clearTimeout(timer.value)
        let args = arguments,
            context = this
        timer.value = setTimeout(() => {
            cb.apply(context, args)
        }, delay)
    }

    const cancel = () => {
        clearTimeout(timer)
        timer.value = null
    }
    
    return {
        handler,
        cancel
    }
}
```




### `useThrottle` 节流


```JavaScript
export function useThrottle(cb, duration = 100) {
    let start = +new Date()
    return function () {
        let args = arguments
        let context = this
        let now = +new Date()
        if (now - start >= duration) {
            cb.apply(context, args)
            start = now
        }
    }
}
```




