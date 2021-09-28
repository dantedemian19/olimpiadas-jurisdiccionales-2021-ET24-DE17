import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class PacienteUpdatePage {
  pageTitle: ElementFinder = element(by.id('pruebaApp.paciente.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  dniInput: ElementFinder = element(by.css('input#paciente-dni'));
  historiaClinicaInput: ElementFinder = element(by.css('input#paciente-historiaClinica'));
  nombreInput: ElementFinder = element(by.css('input#paciente-nombre'));
  apellidoInput: ElementFinder = element(by.css('input#paciente-apellido'));
  telefonoInput: ElementFinder = element(by.css('input#paciente-telefono'));
  mailInput: ElementFinder = element(by.css('input#paciente-mail'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setDniInput(dni) {
    await this.dniInput.sendKeys(dni);
  }

  async getDniInput() {
    return this.dniInput.getAttribute('value');
  }

  async setHistoriaClinicaInput(historiaClinica) {
    await this.historiaClinicaInput.sendKeys(historiaClinica);
  }

  async getHistoriaClinicaInput() {
    return this.historiaClinicaInput.getAttribute('value');
  }

  async setNombreInput(nombre) {
    await this.nombreInput.sendKeys(nombre);
  }

  async getNombreInput() {
    return this.nombreInput.getAttribute('value');
  }

  async setApellidoInput(apellido) {
    await this.apellidoInput.sendKeys(apellido);
  }

  async getApellidoInput() {
    return this.apellidoInput.getAttribute('value');
  }

  async setTelefonoInput(telefono) {
    await this.telefonoInput.sendKeys(telefono);
  }

  async getTelefonoInput() {
    return this.telefonoInput.getAttribute('value');
  }

  async setMailInput(mail) {
    await this.mailInput.sendKeys(mail);
  }

  async getMailInput() {
    return this.mailInput.getAttribute('value');
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
    await this.setDniInput('5');
    expect(await this.getDniInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setHistoriaClinicaInput('s');
    expect(await this.getHistoriaClinicaInput()).to.match(/s/);
    await waitUntilDisplayed(this.saveButton);
    await this.setNombreInput(' ');
    expect(await this.getNombreInput()).to.match(/ /);
    await waitUntilDisplayed(this.saveButton);
    await this.setApellidoInput('jb5wd');
    expect(await this.getApellidoInput()).to.match(/jb5wd/);
    await waitUntilDisplayed(this.saveButton);
    await this.setTelefonoInput('5');
    expect(await this.getTelefonoInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setMailInput('.Aq@xqzl.pjVG.1MasH.cd');
    expect(await this.getMailInput()).to.match(/.Aq@xqzl.pjVG.1MasH.cd/);
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
