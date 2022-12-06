// подключение через модули NodeNext идут с расширением .js
import { testModule } from "./modules/test-module.js"

const message: string = "Test message";
console.log(message);

testModule('test-text');

