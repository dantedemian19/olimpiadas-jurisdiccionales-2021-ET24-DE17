import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import MedicoComponentsPage from './medico.page-object';
import MedicoUpdatePage from './medico-update.page-object';
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

describe('Medico e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let medicoComponentsPage: MedicoComponentsPage;
  let medicoUpdatePage: MedicoUpdatePage;
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
    medicoComponentsPage = new MedicoComponentsPage();
    medicoComponentsPage = await medicoComponentsPage.goToPage(navBarPage);
  });

  it('should load Medicos', async () => {
    expect(await medicoComponentsPage.title.getText()).to.match(/Medicos/);
    expect(await medicoComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete Medicos', async () => {
    const beforeRecordsCount = (await isVisible(medicoComponentsPage.noRecords)) ? 0 : await getRecordsCount(medicoComponentsPage.table);
    medicoUpdatePage = await medicoComponentsPage.goToCreateMedico();
    await medicoUpdatePage.enterData();

    expect(await medicoComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(medicoComponentsPage.table);
    await waitUntilCount(medicoComponentsPage.records, beforeRecordsCount + 1);
    expect(await medicoComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await medicoComponentsPage.deleteMedico();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(medicoComponentsPage.records, beforeRecordsCount);
      expect(await medicoComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(medicoComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
