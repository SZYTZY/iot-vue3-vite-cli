import { registerMicroApps, start } from 'qiankun';

const getActiveRule = (hash:String) => (location:any) => location.hash.startsWith(hash);
let entrySmartapp = 'https://www.haigeek.com/developercenter/smartappPage/smartapp.html';
if (import.meta.env.VITE_BASE_ENV === 'development') {
  entrySmartapp = '//localhost:9090/';
}
registerMicroApps([
  {
    name: 'smartapp',
    entry: entrySmartapp,
    container: '#childApp',
    activeRule: getActiveRule('#/apply')
  }
]);
// eslint-disable-next-line no-unused-expressions
start && start()
