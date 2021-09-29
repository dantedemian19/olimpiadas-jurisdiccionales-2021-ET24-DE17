import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import ValoracionUpdatePage from './valoracion-update.page-object';

const expect = chai.expect;
export class ValoracionDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('pruebaApp.valoracion.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-valoracion'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class ValoracionComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('valoracion-heading'));
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
    await navBarPage.getEntityPage('valoracion');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateValoracion() {
    await this.createButton.click();
    return new ValoracionUpdatePage();
  }

  async deleteValoracion() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const valoracionDeleteDialog = new ValoracionDeleteDialog();
    await waitUntilDisplayed(valoracionDeleteDialog.deleteModal);
    expect(await valoracionDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/pruebaApp.valoracion.delete.question/);
    await valoracionDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(valoracionDeleteDialog.deleteModal);

    expect(await isVisible(valoracionDeleteDialog.deleteModal)).to.be.false;
  }
}
