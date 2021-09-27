import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EspecialidadesMedicasComponentsPage from './especialidades-medicas.page-object';
import EspecialidadesMedicasUpdatePage from './especialidades-medicas-update.page-object';
import {
  waitUntilDisplayed,
  waitUntilAnyDisplayed,
  click,
  getRecordsCount,
  waitUntilHidden,
  waitUntilCount,
  isVisible,
} from '../../util/utils';

const expect = chai.expect;

describe('EspecialidadesMedicas e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let especialidadesMedicasComponentsPage: EspecialidadesMedicasComponentsPage;
  let especialidadesMedicasUpdatePage: EspecialidadesMedicasUpdatePage;
  const username = process.env.E2E_USERNAME ?? 'admin';
  const password = process.env.E2E_PASSWORD ?? 'admin';

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();
    await signInPage.username.sendKeys(username);
    await signInPage.password.sendKeys(password);
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
    await waitUntilDisplayed(navBarPage.adminMenu);
    await waitUntilDisplayed(navBarPage.accountMenu);
  });

  beforeEach(async () => {
    await browser.get('/');
    await waitUntilDisplayed(navBarPage.entityMenu);
    especialidadesMedicasComponentsPage = new EspecialidadesMedicasComponentsPage();
    especialidadesMedicasComponentsPage = await especialidadesMedicasComponentsPage.goToPage(navBarPage);
  });

  it('should load EspecialidadesMedicas', async () => {
    expect(await especialidadesMedicasComponentsPage.title.getText()).to.match(/Especialidades Medicas/);
    expect(await especialidadesMedicasComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete EspecialidadesMedicas', async () => {
    const beforeRecordsCount = (await isVisible(especialidadesMedicasComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(especialidadesMedicasComponentsPage.table);
    especialidadesMedicasUpdatePage = await especialidadesMedicasComponentsPage.goToCreateEspecialidadesMedicas();
    await especialidadesMedicasUpdatePage.enterData();

    expect(await especialidadesMedicasComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(especialidadesMedicasComponentsPage.table);
    await waitUntilCount(especialidadesMedicasComponentsPage.records, beforeRecordsCount + 1);
    expect(await especialidadesMedicasComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await especialidadesMedicasComponentsPage.deleteEspecialidadesMedicas();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(especialidadesMedicasComponentsPage.records, beforeRecordsCount);
      expect(await especialidadesMedicasComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(especialidadesMedicasComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
