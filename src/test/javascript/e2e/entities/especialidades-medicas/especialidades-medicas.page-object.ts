import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import EspecialidadesMedicasUpdatePage from './especialidades-medicas-update.page-object';

const expect = chai.expect;
export class EspecialidadesMedicasDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('pruebaApp.especialidadesMedicas.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-especialidadesMedicas'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class EspecialidadesMedicasComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('especialidades-medicas-heading'));
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
    await navBarPage.getEntityPage('especialidades-medicas');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateEspecialidadesMedicas() {
    await this.createButton.click();
    return new EspecialidadesMedicasUpdatePage();
  }

  async deleteEspecialidadesMedicas() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const especialidadesMedicasDeleteDialog = new EspecialidadesMedicasDeleteDialog();
    await waitUntilDisplayed(especialidadesMedicasDeleteDialog.deleteModal);
    expect(await especialidadesMedicasDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /pruebaApp.especialidadesMedicas.delete.question/
    );
    await especialidadesMedicasDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(especialidadesMedicasDeleteDialog.deleteModal);

    expect(await isVisible(especialidadesMedicasDeleteDialog.deleteModal)).to.be.false;
  }
}
