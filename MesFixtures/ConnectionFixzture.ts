import { test as BaseTest } from '@playwright/test';
import { Connection } from '../tests/LesPages/ConnnexionPage';
import { TableauBordPage } from '../tests/LesPages/TableauBordPage';
import { Recrutement } from '../tests/LesPages/Recrutement';
import { Deconnection } from '../tests/LesPages/DeconnectionPage';



type MesFixture =
 {
    connection : Connection ;
    tableauBordPage: TableauBordPage;
    recrutementPage: Recrutement ;
    deconnection : Deconnection

}
////////////////connection 
export const test = BaseTest.extend<MesFixture>({
connection : async({page}, use)=>{
const connection = new Connection (page)
await use(connection)
},
tableauBordPage : async({page}, use)=>{
  const tableauBordPage= new TableauBordPage(page)
  await use(tableauBordPage)
  },
 
recrutementPage : async({page}, use)=>{
  const recrutementPage= new Recrutement (page) 
  await use(recrutementPage)
  }
,

deconnection : async({page}, use)=>{
  const recrutementPage= new Deconnection (page) 
  await use(recrutementPage)
  }}
)

