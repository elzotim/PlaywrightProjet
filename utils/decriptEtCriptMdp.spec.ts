import { test, chromium, expect } from '@playwright/test';
import CommonUtils  from './common-utils'   ;
test('crypter et decrypté', async ({ page }) => {
////////////////////////////////////////////////////////////////////
   
    const CrypterObj = new CommonUtils()
    const mdp = process.env.PASSWORD ?? '';
    console.log(process.env.BASE_URL);
    console.log("Mon mode de passe : " ,mdp );
    console.log(CrypterObj.encryptData(mdp));
    
   await page.pause()
});

