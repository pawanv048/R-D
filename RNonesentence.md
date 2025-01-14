/// Follow the structure to explain any top:
+ What is it?
+ Why do we need it?
+ How do we use it?
+ Where do we use it in a project?
+ What is the real-world use in an application?
+ What should we be careful about?

 

+ React-Native

- FlatList → Efficiently render large lists.
- SectionList → Render grouped list sections.
- ScrollView → Scroll through long content.
- SafeAreaView → Avoid overlapping system UI.(like notch, status bar)
- Dimensions → Get screen width/height.
- Platform → Detect platform (iOS/Android).
- AsyncStorage → Local key-value storage.
- Context API → Simplified state sharing.
- Metro Bundler → Packager for React Native.
- Hermes → JavaScript engine for RN.
- NativeModules → Bridge for native code.

+ RN File Info:

- CodePush → Push updates without re-deployment.
- Eslint → Code quality tool.
- Prettier → Code formatting tool.
- Fast Refresh → Instant feedback in development
- Jest → Testing JavaScript code.
- Enzyme → Test React components.
- PropTypes → Validate component props.
- TypeScript → Add static typing.
- Hot Reloading → Persist state on reload.

+ Hooks
  
- useState → Manage component state.
- useContext → Access shared state.
- useReducer → Advanced state management.
- useRef → Access DOM-like references.

+ Navigation:
  
- NavigationContainer → Manage app navigation.
- StackNavigator → Navigate between screens.
- DrawerNavigator → Sidebar navigation.
- BottomTabNavigator → Tab-based navigation.

+ Animation:

- Animated → Create complex animations.
- PanResponder → Handle gestures.
- GestureHandler → Advanced gesture control.

+ Redux:

  User Interaction (e.g., click a button) --> Action is Dispatched (an action is sent to the Redux store)->
  ---> Reducer Handles the Action (takes the current state and the action, then creates a new state)--->
  -->Redux Store Updates the State (the state is updated with the new values)-->UI Reacts to State Changes (the app re-renders based on the new state).


- Redux → Centralized state management.
- Redux Thunk → Async middleware for Redux.
- Redux Toolkit → Simplified Redux setup(Slices and reducer).
- configureStore → Create Redux store.
- createSlice → Generate reducers and actions.
- slice → State logic module.
- reducer → Update state logic.
- action → Trigger state updates.
- dispatch → Trigger actions.
- useSelector → Access store state.
- useDispatch → Send actions to store.
- initialState → Default state value.
- middleware → Extend store functionality.
- createAsyncThunk → Handle async actions.
- extraReducers → Handle external actions.
- builder → Add reducers dynamically.
- immer → Simplify immutable updates.
- store → State container.
- state → Data in the store.
- RTK Query → Fetch and cache data.
- Api Slice → Define endpoints for RTK Query.
- mutation → Modify server data.
- cache → Store fetched data locally.
- selectors → Derived state computation.
- Provider → Pass store to app.
- combineReducers → Merge multiple reducers.
- thunk → Middleware for async logic.
- serializableCheck → Validate serializable state.
- redux-devtools → Debug state changes.
- DevTools → Monitor Redux actions.
- defaultMiddleware → Predefined middleware setup.
- reselect → Efficient derived selectors.
- listenerMiddleware → React to specific actions.
- preloadedState → Initialize state.
- action creator → Function to dispatch actions.
- payload → Data passed with actions.
- enhancer → Extend Redux store capabilities.
- logger → Middleware for logging actions.
- unsubscribe → Stop listening to store updates.
- isPending → Check async action status.
- fulfilled → Completed async action.
- rejected → Failed async action.
- cacheTime → Data validity duration.
- invalidateTags → Force data refetch.
- refetch → Reload cached data.
- autoBatching → Optimize action dispatch.
- entityAdapter → Normalize state structure.

+ Axios: 

- async → Asynchronous function declaration.
- Axios → HTTP client.
- await → Wait for a promise.
- GET → Fetch data.
- POST → Send data.
- PUT → Update data.
- DELETE → Remove data.
- BaseURL → Default API endpoint.
- Headers → Request metadata.
- Params → Query parameters.
- Data → Request/response body.
- Interceptors → Pre/post request hooks.
- Response → Server reply.
- Error → Request failure.
- Promise → Async response handler.
- Config → Request settings.
- Timeout → Request limit duration.
- CancelToken → Abort request.
- Instance → Customized Axios setup.
- Instance Methods → Configured Axios calls.(make baseUrl global)
- Retry-After → Retry delay header.







