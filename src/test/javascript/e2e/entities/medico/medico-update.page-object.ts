import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class MedicoUpdatePage {
  pageTitle: ElementFinder = element(by.id('pruebaApp.medico.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  dniInput: ElementFinder = element(by.css('input#medico-dni'));
  matriculaInput: ElementFinder = element(by.css('input#medico-matricula'));
  nombreInput: ElementFinder = element(by.css('input#medico-nombre'));
  apellidoInput: ElementFinder = element(by.css('input#medico-apellido'));
  telefonoInput: ElementFinder = element(by.css('input#medico-telefono'));
  mailInput: ElementFinder = element(by.css('input#medico-mail'));
  atiendeDiscapacitadosInput: ElementFinder = element(by.css('input#medico-atiendeDiscapacitados'));
  especialidadSelect: ElementFinder = element(by.css('select#medico-especialidad'));
  provinciaIdInput: ElementFinder = element(by.css('input#medico-provinciaId'));
  ciudadIdInput: ElementFinder = element(by.css('input#medico-ciudadId'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setDniInput(dni) {
    await this.dniInput.sendKeys(dni);
  }

  async getDniInput() {
    return this.dniInput.getAttribute('value');
  }

  async setMatriculaInput(matricula) {
    await this.matriculaInput.sendKeys(matricula);
  }

  async getMatriculaInput() {
    return this.matriculaInput.getAttribute('value');
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

  getAtiendeDiscapacitadosInput() {
    return this.atiendeDiscapacitadosInput;
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
  async setProvinciaIdInput(provinciaId) {
    await this.provinciaIdInput.sendKeys(provinciaId);
  }

  async getProvinciaIdInput() {
    return this.provinciaIdInput.getAttribute('value');
  }

  async setCiudadIdInput(ciudadId) {
    await this.ciudadIdInput.sendKeys(ciudadId);
  }

  async getCiudadIdInput() {
    return this.ciudadIdInput.getAttribute('value');
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
    await this.setMatriculaInput('matricula');
    expect(await this.getMatriculaInput()).to.match(/matricula/);
    await waitUntilDisplayed(this.saveButton);
    await this.setNombreInput('A5');
    expect(await this.getNombreInput()).to.match(/A5/);
    await waitUntilDisplayed(this.saveButton);
    await this.setApellidoInput('St');
    expect(await this.getApellidoInput()).to.match(/St/);
    await waitUntilDisplayed(this.saveButton);
    await this.setTelefonoInput('5');
    expect(await this.getTelefonoInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setMailInput('2@FMS.j.bzM.hwu5');
    expect(await this.getMailInput()).to.match(/2@FMS.j.bzM.hwu5/);
    await waitUntilDisplayed(this.saveButton);
    const selectedAtiendeDiscapacitados = await this.getAtiendeDiscapacitadosInput().isSelected();
    if (selectedAtiendeDiscapacitados) {
      await this.getAtiendeDiscapacitadosInput().click();
      expect(await this.getAtiendeDiscapacitadosInput().isSelected()).to.be.false;
    } else {
      await this.getAtiendeDiscapacitadosInput().click();
      expect(await this.getAtiendeDiscapacitadosInput().isSelected()).to.be.true;
    }
    await waitUntilDisplayed(this.saveButton);
    await this.especialidadSelectLastOption();
    await waitUntilDisplayed(this.saveButton);
    await this.setProvinciaIdInput('provinciaId');
    expect(await this.getProvinciaIdInput()).to.match(/provinciaId/);
    await waitUntilDisplayed(this.saveButton);
    await this.setCiudadIdInput('ciudadId');
    expect(await this.getCiudadIdInput()).to.match(/ciudadId/);
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
