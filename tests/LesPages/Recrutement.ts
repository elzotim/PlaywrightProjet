import { Page, Locator } from '@playwright/test';

export class Recrutement {
  private readonly page: Page;

  // Définition des champs sous forme de `readonly Locator`
  readonly recruitmentLink: Locator;
  readonly accountAssistantDropdown0: Locator;
  readonly accountAssistantDropdownOp0: Locator;
  readonly accountAssistantDropdown1: Locator;
  readonly accountAssistantDropdownOp1: Locator;
  readonly accountAssistantDropdown2: Locator;
  readonly accountAssistantDropdownOp2: Locator;
  readonly accountAssistantDropdown3: Locator;
  readonly accountAssistantDropdownOp3: Locator;
  readonly accountAssistantDropdown4: Locator;
  readonly accountAssistantDropdownOp4: Locator;
  readonly AccountAssistantOption: Locator;
  readonly juniorAccountAssistantOption: Locator;
  readonly Type_for_hints: Locator;
  readonly radhaGuptaOption: Locator;
  readonly applicationInitiatedOption: Locator;
  readonly typeForHintsTextbox: Locator;
  readonly enterCommaSeparatedWordsTextbox: Locator;
  readonly fromDateTextbox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialisation des locators
    this.recruitmentLink = page.getByRole('link', { name: 'Recruitment' })
    this.accountAssistantDropdown0 = page.getByText('-- Select --').first();
    this.accountAssistantDropdown1 = page.getByText('-- Select --').nth(1)
    this.accountAssistantDropdown2 = page.getByText('-- Select --').nth(2);
    this.accountAssistantDropdown3 = page.getByText('-- Select --').nth(0);
    this.accountAssistantDropdown4 = page.getByText('-- Select --').nth(0);
    this.accountAssistantDropdownOp0 = page.getByRole('option', { name: 'Chief Executive Officer' });
    this.accountAssistantDropdownOp1 = page.getByRole('option', { name: 'Rahul Patil' });
    this.accountAssistantDropdownOp2 = page.getByRole('option', { name: 'Manual' });
    this.accountAssistantDropdownOp3 = page.getByRole('option', { name: 'Senior QA Lead' });
    this.accountAssistantDropdownOp4 = page.getByRole('option', { name: 'Rejected' });
    this.AccountAssistantOption = page.getByText('Software Architect');
    this.juniorAccountAssistantOption = page.getByText('Software Architect');
    this.radhaGuptaOption = page.getByRole('option', { name: 'Radha Gupta' });
    this.typeForHintsTextbox = page.getByRole('textbox', { name: 'Type for hints...' });
    this.enterCommaSeparatedWordsTextbox = page.getByRole('textbox', { name: 'Enter comma seperated words...' });
    this.fromDateTextbox = page.getByRole('textbox', { name: 'From' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  // Méthodes pertinentes pour encapsuler les interactions
  async navigateToRecruitment() {
    await this.recruitmentLink.waitFor({ state: 'visible' }); // Attendre que le lien soit visible
    await this.recruitmentLink.click(); // Cliquer sur le lien "Recruitment"
    
    
  }

  async selectAccountAssistant() {  
    await this.accountAssistantDropdown0.click(); // Cliquer sur le premier dropdown
    await this.accountAssistantDropdownOp0.click();
    await this.accountAssistantDropdown1.click();
    await this.accountAssistantDropdownOp1.click(); // Cliquer sur le deuxième dropdown
    await this.accountAssistantDropdown2.click(); // Cliquer sur le deuxième dropdown
    await this.accountAssistantDropdownOp2.click(); // Cliquer sur le deuxième dropdown 
    await this.accountAssistantDropdown3.click(); // Cliquer sur le troisième dropdown
    await this.accountAssistantDropdownOp3.click(); // Cliquer sur le troisième dropdown
    await this.accountAssistantDropdown4.click(); // Cliquer sur le troisième dropdown
    await this.accountAssistantDropdownOp4.click(); // Cliquer sur le troisième dropdown
    }
 
  async fillTypeForHints(value: string) {
    await this.typeForHintsTextbox.fill(value);
  }

  async fillCommaSeparatedWords(value: string) {
    await this.enterCommaSeparatedWordsTextbox.fill(value);
  }

  async selectFromDate(date: string) {
    await this.fromDateTextbox.click();
    await this.page.getByText(date, { exact: true }).click();
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }
}


