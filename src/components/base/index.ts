import dialog from './h-dialog.vue';
import pagination from './h-pagination.vue';

export default {
  install(app: any) {
    app.component('HDialog', dialog);
    app.component('HPagination', pagination);
  }
};
