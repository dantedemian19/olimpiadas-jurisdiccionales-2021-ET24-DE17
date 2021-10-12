import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import ProvinciaUpdatePage from './provincia-update.page-object';

const expect = chai.expect;
export class ProvinciaDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('pruebaApp.provincia.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-provincia'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class ProvinciaComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('provincia-heading'));
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
    await navBarPage.getEntityPage('provincia');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateProvincia() {
    await this.createButton.click();
    return new ProvinciaUpdatePage();
  }

  async deleteProvincia() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const provinciaDeleteDialog = new ProvinciaDeleteDialog();
    await waitUntilDisplayed(provinciaDeleteDialog.deleteModal);
    expect(await provinciaDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/pruebaApp.provincia.delete.question/);
    await provinciaDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(provinciaDeleteDialog.deleteModal);

    expect(await isVisible(provinciaDeleteDialog.deleteModal)).to.be.false;
  }
}
