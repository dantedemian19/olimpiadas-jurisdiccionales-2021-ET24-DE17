import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class EspecialidadesMedicasUpdatePage {
  pageTitle: ElementFinder = element(by.id('pruebaApp.especialidadesMedicas.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  especialidadSelect: ElementFinder = element(by.css('select#especialidades-medicas-especialidad'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setEspecialidadSelect(especialidad) {
    await this.especialidadSelect.sendKeys(especialidad);
  }

  async getEspecialidadSelect() {
    return this.especialidadSelect.element(by.css('option:checked')).getText();
  }

  async especialidadSelectLastOption() {
    await this.especialidadSelect.all(by.tagName('option')).last().click();
  }
  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }

  async enterData() {
    await waitUntilDisplayed(this.saveButton);
    await this.especialidadSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
