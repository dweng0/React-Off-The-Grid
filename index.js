import React from 'react';

//function returns an object, but modifies it to include a last modified date this is used to determine when to update local storage
const grabAllFromLocalStorage = (name) => {
    let localData = localStorage.getItem(name);
    return (localData) ? JSON.parse(localData) : {}
}

/**
*
* Add data to local storage
*
* The data is wrapped in an object and a _lastModified key is provided
*
*/
const addToLocalStorage = (name, store) => {
    let localData = grabAllFromLocalStorage(name);
    const _lastModified = new Date();

    localData = {...localData, ...{ store, _lastModified}};
    localStorage.setItem(name, JSON.stringify(localData));
}

const deferred = fn => {setTimeout(fn, 0)}

/**
 * OfflineMode stores the data in an array, the array holds an object that contains your data and a 'lastModified' key
 * @params {comparisonFunction} optional function returns bool and checks for changes in action
 * @params {store} the redux store that offline mode interfaces with
 * @params {saveName} string the save name that will be used in localStorage
 * @params {loadAction} function the load action function used to load from localStorage..
 */
class OfflineMode extends React.PureComponent {
    _unSub;

    maybeSetUnSubscribe = unsub => {
        if(!this._unSub)
        {
            this._unSub = unsub;
        }
    }
    state = {
        saveName: 'MOOSE_FILE',
    }

    store = {}

    /**
     * compares locally stored file against redux store
     */
    comparisonFunction = (action) => {
        const item = grabAllFromLocalStorage(this.state.saveName);
        const shouldSave = item._lastModified === undefined || !!(item._lastModified !== this.store.getState()._lastModified);
        return shouldSave;
    }

    componentDidMount = () => {
        if(this.props.store)
        {
            this.store = this.props.store;
        }
        else
        {
            throw new Error("Need to pass in a redux store");
        }

        if(this.props.saveName)
        {
            this.setState({saveName: this.props.saveName});
        }

        if(this.props.comparisonFunction)
        {
            this.comparisonFunction = this.props.comparisonFunction;
        }
        else
        {
            console.log('no comparison function provided, using default')
        }
        this.maybeSetUnSubscribe(this.props.store.subscribe(this.shouldSave));
        this.loadIfEmpty();
    }

    shouldSave = () => {
        const save = this.comparisonFunction();
        if(save)
        {
            addToLocalStorage(this.state.saveName, this.store.getState());
        }
    }

    /**
    *
    * check if redux store is empty, if it is, attempt to load from local storage.
    *
    * if succesfull, dispatch an action with the values retrieved from local storage
    *
    */
    loadIfEmpty = () => {
        const state = this.store.getState();
        const storeIsEmpty = Object.keys(state).every(item => { return !!(state[item])});

        if (storeIsEmpty)
        {
            const localSave = grabAllFromLocalStorage(this.state.saveName, this.store.getState());
            if(localSave)
            {
                deferred(() => {
                    console.log(`Loading ${this.state.saveName} from local storage`);
                    const action = {
                        type: 'LOAD_FROM_LOCAL_STORAGE',
                        payload: localStorage[this.state.saveName]
                    }
                    this.store.dispatch(action);
                });
            }

        }
    }

    /**
    * Remove subscriptions to redux
    */
    componentWillUnmount = () => {
        this._unSub();
    }

    render () {
        return null;
    }
}
export default OfflineMode;