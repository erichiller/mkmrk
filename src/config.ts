export namespace CONFIG {
  export let Debug:boolean = true;
  let Name = "mkmrk";
  let Version = new Date().toDateString();
  export let Title = `${Name} - build ${Version}`; 
  export let DevTools = {
    //React: "/Users/ehiller/Library/Application Support/Google/Chrome/Profile 2/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.0_0/"
    React: "C:/Users/ehiller/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.4_0/"
  };
  export let Log = {
    exclude: [
     // "window.js"
    ]
  }
  
}