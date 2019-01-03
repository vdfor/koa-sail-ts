import { IApi } from './type';

const apis: {
  [key: string]: IApi[]
} = {
  testApi: require('./test'),
  userApi: require('./user')
};

export default apis;
