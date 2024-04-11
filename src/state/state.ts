interface State {
  data: any;
  listeners: any;
  getState: any;
  setState: any;
  suscribe: any;
  notify: any;
  addItem: any;
}

export const state: State = {
  data: {},
  listeners: [],
  getState() {
    return this.data;
  },
  setState() {},
  suscribe() {},
  notify() {},
  addItem() {},
};
