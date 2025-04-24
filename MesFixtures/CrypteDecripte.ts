import { test as BaseTest } from '@playwright/test';
import CommonUtils from '../utils/common-utils';
import { Connection } from '../tests/LesPages/ConnnexionPage';
type MesFixtureCryptDecrypt =
 {
   crypteDecripte : CommonUtils,
   connection : Connection ;
}
////////////////connection 
export const test = BaseTest.extend<MesFixtureCryptDecrypt>({
  crypteDecripte : async({}, use)=>{
  const connection = new CommonUtils ()
  await use(connection)
  },
  
  connection : async({page}, use)=>{
  const connection = new Connection (page)
  await use(connection)
  },
  
  })
  



 