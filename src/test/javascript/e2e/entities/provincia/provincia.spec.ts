import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import ProvinciaComponentsPage from './provincia.page-object';
import ProvinciaUpdatePage from './provincia-update.page-object';
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

describe('Provincia e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let provinciaComponentsPage: ProvinciaComponentsPage;
  let provinciaUpdatePage: ProvinciaUpdatePage;
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
    provinciaComponentsPage = new ProvinciaComponentsPage();
    provinciaComponentsPage = await provinciaComponentsPage.goToPage(navBarPage);
  });

  it('should load Provincias', async () => {
    expect(await provinciaComponentsPage.title.getText()).to.match(/Provincias/);
    expect(await provinciaComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete Provincias', async () => {
    const beforeRecordsCount = (await isVisible(provinciaComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(provinciaComponentsPage.table);
    provinciaUpdatePage = await provinciaComponentsPage.goToCreateProvincia();
    await provinciaUpdatePage.enterData();

    expect(await provinciaComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(provinciaComponentsPage.table);
    await waitUntilCount(provinciaComponentsPage.records, beforeRecordsCount + 1);
    expect(await provinciaComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await provinciaComponentsPage.deleteProvincia();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(provinciaComponentsPage.records, beforeRecordsCount);
      expect(await provinciaComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(provinciaComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
