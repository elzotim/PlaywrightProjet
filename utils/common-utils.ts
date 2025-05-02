import cryptoJs from 'crypto-js';

/**
 * Classe utilitaire pour gérer le chiffrement de données
 */
export default class CommonUtils {
  private secretKey: string;

  /**
   * Initialise la clé secrète à partir des variables d'environnement
   */
  constructor() {
    if (process.env.SECRET_KEY) {
      this.secretKey = process.env.SECRET_KEY;
    } else if (process.env.NODE_ENV === 'test') {
      this.secretKey = 'fake-test-secret';
    } else {
      throw new Error("SECRET_KEY manquante");
    }
  }
  

  /**
   * Chiffre une donnée (string) avec AES
   * @param data - Le texte à chiffrer
   * @returns Le texte chiffré au format string
   */
  public encryptData(data: string): string {
    // Applique le chiffrement AES avec la clé secrète
    const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString();

    // Affiche le résultat pour débogage
    console.log(encryptedData);

    return encryptedData;
  }
  /**
 * Provide Decrypted data in string format
 * @param encData
 * @returns decryptedData
 */
public decryptData(encData: string): string {
    const decryptedData = cryptoJs.AES.decrypt(encData, this.secretKey)
      .toString(cryptoJs.enc.Utf8);
    return decryptedData;
  }
  
}
