import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import PacienteUpdatePage from './paciente-update.page-object';

const expect = chai.expect;
export class PacienteDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('pruebaApp.paciente.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-paciente'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class PacienteComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('paciente-heading'));
  noRecords: ElementFinder = element(by.css('#app-view-container .table-responsive div.alert.alert-warning'));
  table: ElementFinder = element(by.css('#app-view-container div.table-responsive > table'));

  records: ElementArrayFinder = this.table.all(by.css('tbody tr'));

  getDetailsButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-info.btn-sm'));
  }

  getEditButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-primary.btn-sm'));
  }

  getDeleteButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-danger.btn-sm'));
  }

  async goToPage(navBarPage: NavBarPage) {
    await navBarPage.getEntityPage('paciente');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreatePaciente() {
    await this.createButton.click();
    return new PacienteUpdatePage();
  }

  async deletePaciente() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const pacienteDeleteDialog = new PacienteDeleteDialog();
    await waitUntilDisplayed(pacienteDeleteDialog.deleteModal);
    expect(await pacienteDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/pruebaApp.paciente.delete.question/);
    await pacienteDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(pacienteDeleteDialog.deleteModal);

    expect(await isVisible(pacienteDeleteDialog.deleteModal)).to.be.false;
  }
}
