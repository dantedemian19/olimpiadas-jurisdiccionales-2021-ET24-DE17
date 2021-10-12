import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class CiudadUpdatePage {
  pageTitle: ElementFinder = element(by.id('pruebaApp.ciudad.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nombreInput: ElementFinder = element(by.css('input#ciudad-nombre'));
  provinciaIdInput: ElementFinder = element(by.css('input#ciudad-provinciaId'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setNombreInput(nombre) {
    await this.nombreInput.sendKeys(nombre);
  }

  async getNombreInput() {
    return this.nombreInput.getAttribute('value');
  }

  async setProvinciaIdInput(provinciaId) {
    await this.provinciaIdInput.sendKeys(provinciaId);
  }

  async getProvinciaIdInput() {
    return this.provinciaIdInput.getAttribute('value');
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
    await this.setNombreInput('nombre');
    expect(await this.getNombreInput()).to.match(/nombre/);
    await waitUntilDisplayed(this.saveButton);
    await this.setProvinciaIdInput('provinciaId');
    expect(await this.getProvinciaIdInput()).to.match(/provinciaId/);
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
