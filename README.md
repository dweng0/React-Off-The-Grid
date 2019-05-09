# React-Off-The-Grid
Unopinionated component that stores your redux store in local storage.


## Usage

create the store and provide an instance of it to the component

```jsx
 <OfflineMode saveName="MOOSE_FILE" store={ store } />
```

typical example:

```jsx

const store = createStore(reducers);
ReactDOM.render(
  <div>
    <OfflineMode saveName="MOOSE_FILE" store={ store } />
    <Provider store={ store }>
      <App/>
   </Provider>
  </div>, document.getElementById('root'));
```

Thats it, your application will now save to local storage whenever the redux store changes

### props

`saveName` - The name of the save file in local storage<br/>
`store` - the redux store<br/>
`comparisonFunction` - If the baked in shallow comparison function doesn't do it for you (compares by simple type and references), you can provide your own as a prop, it must return a true or false, which is then used to determine if the component should save the current store state

When saving, the offline mode will add the key `_lastModified` to the object for comparisons.

Offline mode will attempt to load from local storage if the second level store object is empty. if it finds anything using the save name, it will
dispatch an action with the type: `LOAD_FROM_LOCAL_STORAGE`

You can utilize this to load in data from storage
