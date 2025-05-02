import { test as BaseTest } from '../MesFixtures/ConnectionFixzture';
import CommonUtils from '../utils/common-utils';
type MesFixtureCryptDecrypt =
 {

  commonUtils: CommonUtils,
  
   
}
////////////////connection 
export const test = BaseTest.extend<MesFixtureCryptDecrypt>({
  commonUtils : async({}, use)=>{
  const commonUtils = new CommonUtils ()
  await use(commonUtils)
  },
  
  })
  



 