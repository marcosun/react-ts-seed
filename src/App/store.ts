import { observable, action } from 'mobx';

class App {
  @observable user = {
    name: '',
  };

  @action changeUserName = (name: string) => {
    this.user.name = name;
  }
}

const app = new App;

export default app;