import { test as BaseTest } from '@playwright/test';
import { Connection } from '../tests/LesPages/ConnnexionPage';
import CommonUtils from '../utils/common-utils';



type MesFixture =
 {
    connection : Connection ;

    commonUtils : CommonUtils
}
////////////////connection 
export const test = BaseTest.extend<MesFixture>({
connection : async({page}, use)=>{
const connection = new Connection (page)
await use(connection)
},

  commonUtils: async({}, use)=>{
  const commonUtils = new CommonUtils ()
  await use(commonUtils)
  },

})