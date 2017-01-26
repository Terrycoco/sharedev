export default config = {
    name: 'GlobeSteps',
    //driver: use default
    version: 1.0,
    size: 4980736 //default in bytes
    description: 'User Prefs'
};
    


// config(options)
// Set and persist localForage options. This must be called before any other calls to localForage are made, but can be called after localForage is loaded. If you set any config values with this method they will persist after driver changes, so you can call config() then setDriver(). The following config values can be set:
// driver
// The preferred driver(s) to use. Same format as what is passed to setDriver, above.
// Default: [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE]
// name
// The name of the database. May appear during storage limit prompts. Useful to use the name of your app here. In localStorage, this is used as a key prefix for all keys stored in localStorage.
// Default: 'localforage'
// size
// The size of the database in bytes. Used only in WebSQL for now.
// Default: 4980736
// storeName
// The name of the datastore. In IndexedDB this is the dataStore, in WebSQL this is the name of the key/value table in the database. Must be alphanumeric, with underscores. Any non-alphanumeric characters will be converted to underscores.
// Default: 'keyvaluepairs'
// version
// The version of your database. May be used for upgrades in the future; currently unused.
// Default: 1.0
// description
// A description of the database, essentially for developer usage.
// Default: ''


// This will force localStorage as the storage
// driver even if another is available. You can
// use this instead of `setDriver()`.
// localforage.config({
//     driver: localforage.LOCALSTORAGE,
//     name: 'I-heart-localStorage'
// });

// By default, localForage selects backend drivers for the datastore in this order:
// 1 IndexedDB
// 2 WebSQL
// 3 localStorage


// This will use a different driver order.
// localforage.config({
//     driver: [localforage.WEBSQL,
//              localforage.INDEXEDDB,
//              localforage.LOCALSTORAGE],
//     name: 'WebSQL-Rox'
// });