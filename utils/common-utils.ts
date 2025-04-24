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
      // Stocke la clé secrète dans l'instance
      this.secretKey = process.env.SECRET_KEY; //SECRET_KEY=hafsa npm run ExecRecchrome
    } else {
      // Arrête le programme si la clé n'est pas définie
      throw new Error("Veuillez fournir la clé secrète au début de l’exécution.");
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
