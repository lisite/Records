<!--
 * @Author: codeleeter@gmail.com
 * @Date: 2020-07-29 16:08:45
 * @LastEditTime: 2020-07-29 20:01:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hugo/react.md
-->

### React Hooks Record

> Hook 使用了Js的闭包机制

#### Hook规则

1. 只在最顶层使用 Hook
2. 不要在普通的Javascript函数中调用Hook
3. useEffect 不会在服务端渲染时执行

#### useEffect

> 等价于class模式的三个生命周期集合
> componentWillUnMount, componentDidMount, componentDidUpdate

1. useEffect会在每次渲染`结束后`执行(在第一次渲染后以及每次更新后都会执行), 在执行当前effect的时候会对上一个effect进行清除

2. useEffect分无需清除的effect和需要清除的effect, 需要清除的effect需要返回一个函数, effect 的清除阶段在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次

3. 使用多个effect实现`关注点分离`, 需要的时候, 将不同的逻辑分离开

4. 特定场景下设置需要依赖的props来选择性的执行effect

5. `useEffect` 只是底层 API，未来业务接触到的是更多封装后的上层 API，比如 `useFetch` 或者 `useTheme`，它们会更好用。

6. 总结一下需要用到副作用hook的场景
   - DOM操作
   - Localstorage
   - fetch数据请求
   - 定时器、计时器
   - ...

> warning  未来版本，可能会在构建时自动添加第二个参数。

#### useReducer

> useEffect的兄弟函数
> 在useEffect无法解决的计时器问题时, 可以考虑useReducer函数, 将更新和动作解耦

上代码:

```js
const [state, dispatch] = useReducer(reducer, initialState);
const { count, step } = state;

useEffect(() => {
  const id = setInterval(() => {
    dispatch({ type: "tick" }); // Instead of setCount(c => c + step);
  }, 1000);
  return () => clearInterval(id);
}, [dispatch]);
```

#### useCallback

一句话描述这个函数干的事情:

通过useCallback封装的函数, 可以直接作为依赖传入useEffect, useEffect只要关心取数函数是否变化, 而取数参数的变化在useCallback时处理, 依赖的参数变化时, useCallback会返回新的函数引用, 此时触发effect的执行, 再配合[`eslint-plugin-react-hooks`](https://github.com/facebook/react/issues/14920)插件的扫描, 就能做到
`有效依赖, 逻辑内聚, 易于开发者维护`
