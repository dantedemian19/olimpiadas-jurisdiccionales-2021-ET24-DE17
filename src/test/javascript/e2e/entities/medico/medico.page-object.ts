import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import MedicoUpdatePage from './medico-update.page-object';

const expect = chai.expect;
export class MedicoDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('pruebaApp.medico.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-medico'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class MedicoComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('medico-heading'));
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
    await navBarPage.getEntityPage('medico');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateMedico() {
    await this.createButton.click();
    return new MedicoUpdatePage();
  }

  async deleteMedico() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const medicoDeleteDialog = new MedicoDeleteDialog();
    await waitUntilDisplayed(medicoDeleteDialog.deleteModal);
    expect(await medicoDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/pruebaApp.medico.delete.question/);
    await medicoDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(medicoDeleteDialog.deleteModal);

    expect(await isVisible(medicoDeleteDialog.deleteModal)).to.be.false;
  }
}
