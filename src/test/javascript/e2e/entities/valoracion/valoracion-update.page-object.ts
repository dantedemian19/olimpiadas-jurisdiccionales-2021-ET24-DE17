import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class ValoracionUpdatePage {
  pageTitle: ElementFinder = element(by.id('pruebaApp.valoracion.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  estrellasInput: ElementFinder = element(by.css('input#valoracion-estrellas'));
  descripcionInput: ElementFinder = element(by.css('input#valoracion-descripcion'));
  isForAttentionInput: ElementFinder = element(by.css('input#valoracion-isForAttention'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setEstrellasInput(estrellas) {
    await this.estrellasInput.sendKeys(estrellas);
  }

  async getEstrellasInput() {
    return this.estrellasInput.getAttribute('value');
  }

  async setDescripcionInput(descripcion) {
    await this.descripcionInput.sendKeys(descripcion);
  }

  async getDescripcionInput() {
    return this.descripcionInput.getAttribute('value');
  }

  getIsForAttentionInput() {
    return this.isForAttentionInput;
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
    await this.setEstrellasInput('5');
    expect(await this.getEstrellasInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setDescripcionInput('descripcion');
    expect(await this.getDescripcionInput()).to.match(/descripcion/);
    await waitUntilDisplayed(this.saveButton);
    const selectedIsForAttention = await this.getIsForAttentionInput().isSelected();
    if (selectedIsForAttention) {
      await this.getIsForAttentionInput().click();
      expect(await this.getIsForAttentionInput().isSelected()).to.be.false;
    } else {
      await this.getIsForAttentionInput().click();
      expect(await this.getIsForAttentionInput().isSelected()).to.be.true;
    }
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
